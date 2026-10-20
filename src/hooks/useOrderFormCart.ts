import { useRef, useState } from "react";
import type { OrderFormProductConfig } from "../types/components";
import { ORDER_FORM_MESSAGES as M } from "../constants/messages";
import { resolveLine, type ProductDraft, type ProductState, type PurchaseLine } from "../components/OrderForm/multi-product";

export function useOrderFormCart(configs: OrderFormProductConfig[], products: Record<string, ProductState>, factor: number) {
  const [drafts, setDrafts] = useState<Record<string, ProductDraft>>({});
  const sequence = useRef(0);
  const rows: ProductDraft[] = [];
  for (const config of configs) {
    const productId = String(config.productId);
    const key = `product:${productId}`;
    rows.push(drafts[key] ?? { key, productId, checked: false, variantId: "", size: "", quantity: 1 });
    rows.push(...Object.values(drafts).filter((row) => row.productId === productId && row.key !== key));
  }
  const lines: PurchaseLine[] = [];
  const errors: Record<string, string> = {};
  const selections = new Set<string>();
  for (const row of rows) {
    if (!row.checked) continue;
    const config = configs.find((item) => String(item.productId) === row.productId)!;
    const resolved = resolveLine(config, products[row.productId], row, factor);
    if (resolved.error) errors[row.key] = resolved.error;
    if (resolved.line) {
      if (selections.has(resolved.line.selectionKey)) errors[row.key] = M.duplicate;
      selections.add(resolved.line.selectionKey);
      lines.push(resolved.line);
    }
  }
  const quantities = new Map<string, number>();
  for (const line of lines) quantities.set(line.purchasableId, (quantities.get(line.purchasableId) ?? 0) + line.quantity);
  for (const line of lines) if (line.stock !== undefined && quantities.get(line.purchasableId)! > line.stock) errors[line.key] = M.stockExceeded;
  const subtotalMinor = lines.reduce((sum, line) => sum + line.unitPriceMinor * line.quantity, 0);
  if (!Number.isSafeInteger(subtotalMinor)) for (const line of lines) errors[line.key] = M.invalidPrice;
  const selectedCount = rows.filter((row) => row.checked).length;

  const update = (row: ProductDraft, change: Partial<ProductDraft>) => {
    setDrafts((previous) => ({ ...previous, [row.key]: { ...row, ...change } }));
  };
  const addVariant = (productId: string) => {
    const key = `variant:${productId}:${++sequence.current}`;
    setDrafts((previous) => ({ ...previous, [key]: { key, productId, checked: false, variantId: "", size: "", quantity: 1 } }));
  };

  return { rows, lines, errors, selectedCount, subtotalMinor, valid: selectedCount > 0 && Object.keys(errors).length === 0, update, addVariant, reset: () => setDrafts({}) };
}
