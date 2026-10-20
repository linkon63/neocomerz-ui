import type { OrderFormProductConfig, OrderFormGtmItem } from "../../types/components";
import { ORDER_FORM_MESSAGES as M } from "../../constants/messages";
import { getLocalizedString, getSizesArray, getVariantDisplayValues, getDynamicSizeLabel } from "./helpers";

export type ProductRecord = Record<string, unknown>;
export type ProductState = { data?: ProductRecord; loading: boolean; error?: string };
export type ProductDraft = { key: string; productId: string; checked: boolean; variantId: string; size: string; quantity: number };
export type PurchaseLine = {
  key: string; selectionKey: string; productId: string; purchasableId: string;
  name: string; imageUrl: string; variant: string; quantity: number;
  unitPriceMinor: number; stock?: number;
};

export function record(value: unknown): ProductRecord {
  return value && typeof value === "object" && !Array.isArray(value) ? value as ProductRecord : {};
}

export function extractProduct(value: unknown, id?: string): ProductRecord {
  const body = record(value);
  const candidates = [body.data, body.product, record(body.data).product, body];
  for (const candidate of candidates) {
    const items = Array.isArray(candidate) ? candidate : [candidate];
    const product = items.map(record).find((item) => !id || String(item.id) === id);
    if (product && Object.keys(product).length > 0) return product;
  }
  return {};
}

export function productImage(data: ProductRecord): string {
  return String(data.image ?? data.thumbnail_image ?? data.thumbnail ?? data.thumbnail_url ?? "");
}

export function productName(data: ProductRecord): string {
  return getLocalizedString(data.name ?? data.title);
}

export function productDetailUrl(id: string, apiBaseUrl?: string, productApiBaseUrl?: string): string {
  const base = productApiBaseUrl || apiBaseUrl || process.env["NEXT_PUBLIC_API_BASE_URL"] || "";
  if (!base) return "";
  return `${base.replace(/\/$/, "")}/products/${encodeURIComponent(id)}`;
}

export function records(value: unknown): ProductRecord[] {
  return Array.isArray(value) && value.length > 0
    ? value.filter((item) => item && typeof item === "object" && !Array.isArray(item)) as ProductRecord[]
    : [];
}

export function normalizeProducts(products?: OrderFormProductConfig[]): OrderFormProductConfig[] {
  const seen = new Set<string>();
  return Array.isArray(products) && products.length > 0 ? products.filter((product) => {
    const id = String(product?.productId ?? "").trim();
    const valid = id !== "" && !seen.has(id);
    if (valid) seen.add(id);
    return valid;
  }) : [];
}

export function currencyFactor(currency: string): number {
  let digits = 2;
  try {
    digits = new Intl.NumberFormat("en", { style: "currency", currency }).resolvedOptions().maximumFractionDigits ?? 2;
  } catch {}
  return 10 ** digits;
}

export function amount(value: unknown): number | undefined {
  const number = typeof value === "number" ? value
    : typeof value === "string" && value.trim() !== "" ? Number(value.replace(/[^0-9.-]/g, "")) : NaN;
  return Number.isFinite(number) && number >= 0 ? number : undefined;
}

export function priceOf(data: ProductRecord): number | undefined {
  const pricing = record(data.current_pricing);
  return amount(
    data.discount_price ??
    data.discounted_price ??
    pricing.discount_price ??
    pricing.discounted_price ??
    data.retail_price ??
    pricing.retail_price ??
    data.unit_price ??
    pricing.unit_price ??
    data.price
  );
}

export function stockOf(data: ProductRecord): number | undefined {
  return amount(data.available_quantity ?? data.stock_quantity ?? (typeof data.stock === "object" ? undefined : data.stock));
}

export function variantsOf(product: ProductRecord, config: OrderFormProductConfig): ProductRecord[] {
  const variants = records(product.variants ?? product.attributes);
  const allowedIds = Array.isArray(config.allowedVariants) ? config.allowedVariants.map((v) => String(v.id ?? "")).filter(Boolean) : [];
  if (allowedIds.length > 0) return variants.filter((variant) => allowedIds.includes(String(variant.id)));
  const allowed = Array.isArray(config.allowedVariants) ? config.allowedVariants.map((v) => (v.name ?? "").toLowerCase().trim()).filter(Boolean) : [];
  return allowed.length === 0 || allowed.includes("default") ? variants : variants.filter((v) => {
    const label = getVariantDisplayValues(v).label || "Variant";
    return allowed.includes(label.toLowerCase()) || allowed.includes(getDynamicSizeLabel(v, product).toLowerCase());
  });
}

export function optionData(product: ProductRecord, config: OrderFormProductConfig, draft: ProductDraft) {
  const variants = variantsOf(product, config);
  const variant = variants.find((item) => String(item.id) === draft.variantId);
  const source = variant ?? product;
  const sizes = getSizesArray(source.sizes ?? product.sizes);
  return { variants, variant, sizes, source };
}

export function resolveLine(config: OrderFormProductConfig, state: ProductState | undefined, draft: ProductDraft, factor: number): { line?: PurchaseLine; error?: string } {
  if (!state?.data || state.loading || state.error) return { error: state?.loading ? M.loading : M.loadFailed };
  const product = state.data;
  const { variants, variant, sizes, source } = optionData(product, config, draft);
  if (records(product.variants ?? product.attributes).length > 0 && (!variant || variants.length === 0)) return { error: M.invalidVariant };
  if (sizes.length > 0 && !sizes.includes(draft.size)) return { error: M.invalidSize };
  const rawSize = records(source.sizes ?? product.sizes).find((size) => getSizesArray([size])[0] === draft.size);
  // Size option IDs are not necessarily SKU IDs; only explicit purchasable references are safe.
  const sizeId = rawSize?.purchasable_id ?? rawSize?.variant_id;
  if (sizes.length > 0 && !sizeId) return { error: M.unmappedSize };
  const purchasableId = String(sizeId ?? source.purchasable_id ?? source.id ?? "");
  if (!purchasableId || product.is_active === false || product.status === "inactive" || source.is_active === false || source.status === "inactive") return { error: M.unavailable };
  const unitPrice = (sizeId ? priceOf(rawSize ?? {}) : undefined) ?? priceOf(source) ?? priceOf(product) ?? amount(config.productPrice);
  if (unitPrice === undefined) return { error: M.invalidPrice };
  if (!Number.isSafeInteger(draft.quantity) || draft.quantity < 1) return { error: M.invalidQuantity };
  const unitPriceMinor = Math.round(unitPrice * factor);
  if (!Number.isSafeInteger(unitPriceMinor) || !Number.isSafeInteger(unitPriceMinor * draft.quantity)) return { error: M.invalidPrice };
  const variantLabel = getVariantDisplayValues(variant).value;
  const description = [variantLabel, draft.size].filter(Boolean).join(" / ");
  const name = config.productName || productName(product) || M.product;
  const stock = stockOf(rawSize ?? {}) ?? stockOf(source) ?? stockOf(product);
  return {
    line: {
      key: draft.key, productId: draft.productId, purchasableId,
      selectionKey: JSON.stringify([draft.productId, purchasableId, draft.size]),
      name: description ? `${name} — ${description}` : name,
      imageUrl: String(config.productImage || rawSize?.image || source.image || source.thumbnail || productImage(product) || ""),
      variant: description, unitPriceMinor, quantity: draft.quantity, stock,
    },
    error: stock !== undefined && draft.quantity > stock ? M.stockExceeded : undefined,
  };
}

export function gtmItems(lines: PurchaseLine[], currency: string, factor: number): OrderFormGtmItem[] {
  return lines.map((line) => ({
    item_id: line.purchasableId, item_name: line.name, item_variant: line.variant,
    item_category: "", price: line.unitPriceMinor / factor, quantity: line.quantity, currency,
  }));
}

export function notifyConsumer<T>(callback: ((value: T) => void) | undefined, value: T) {
  try {
    void Promise.resolve(callback?.(value)).catch(() => console.warn(M.callbackFailed));
  } catch { console.warn(M.callbackFailed); }
}
