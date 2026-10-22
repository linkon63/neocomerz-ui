import { useEffect, useId } from "react";
import type { OrderFormProductConfig } from "../../types/components";
import { ORDER_FORM_MESSAGES as M } from "../../constants/messages";
import { getDynamicSizeLabel, getVariantDisplayValues } from "./helpers";
import { optionData, priceOf, productImage, productName, type ProductDraft, type ProductState } from "./multi-product";
import QuantityStepper from "./QuantityStepper";

type Props = {
  config: OrderFormProductConfig; state?: ProductState; row: ProductDraft; error?: string;
  primaryColor: string; currency: string;
  update: (row: ProductDraft, change: Partial<ProductDraft>) => void;
  retry: () => void;
};

export default function MultiProductCard({ config, state, row, error, primaryColor, currency, update, retry }: Props) {
  const id = useId();
  const product = state?.data ?? {};
  const { variants, sizes, source } = optionData(product, config, row);
  const limit = config.maxVariantsToShow;
  const visibleVariants = typeof limit === "number" && limit > 0 ? variants.slice(0, Math.floor(limit)) : variants;
  const name = config.productName || productName(product) || M.product;
  const image = String(config.productImage || source.image || source.thumbnail || productImage(product) || "");
  const price = priceOf(source) ?? priceOf(product);
  const loading = !state || state.loading;

  useEffect(() => {
    if (variants.length === 1 && row.variantId !== String(variants[0].id)) {
      update(row, { variantId: String(variants[0].id), size: "" });
    }
  }, [variants, row, update]);

  return (
    <div className={`w-full rounded-xl border p-4 space-y-3 ${row.checked ? "bg-orange-50" : "bg-white"}`} style={{ borderColor: row.checked ? primaryColor : "#e5e7eb" }}>
      <label htmlFor={id} className="flex items-center gap-3 cursor-pointer font-semibold text-zinc-900">
        <input id={id} type="checkbox" checked={row.checked} onChange={(event) => update(row, { checked: event.target.checked })} className="h-5 w-5 shrink-0" style={{ accentColor: primaryColor }} aria-describedby={error ? `${id}-error` : undefined} />
        {image ? <img src={image} alt={config.productImageAlt ?? name} className="h-14 w-14 rounded-lg object-cover" /> : <></>}
        <span><span className="block">{name}</span><span className="text-xs font-normal">{M.select}</span></span>
      </label>
      {loading ? <p role="status" className="text-sm text-zinc-500">{M.loading}</p> : state.error ? (
        <div role="alert" className="text-sm text-red-700">{state.error} <button type="button" onClick={retry} className="underline">{M.retry}</button></div>
      ) : (
        <>
          <p className="font-semibold">{price !== undefined ? `${currency} ${price}` : M.invalidPrice}</p>
          {variants.length > 1 ? (
            <label className="block text-sm text-zinc-700">{M.variant}
              <select value={row.variantId} onChange={(event) => update(row, { variantId: event.target.value, size: "" })} className="mt-1 w-full rounded-lg border bg-white p-2">
                <option value="">{M.chooseVariant}</option>
                {visibleVariants.map((variant, index) => <option key={`${row.key}-${variant.id}-${index}`} value={String(variant.id)}>{getVariantDisplayValues(variant).value || String(variant.sku ?? variant.id)}</option>)}
              </select>
            </label>
          ) : <></>}
          {sizes.length > 0 ? (
            <label className="block text-sm text-zinc-700">{getDynamicSizeLabel(source, product)}
              <select value={row.size} onChange={(event) => update(row, { size: event.target.value })} className="mt-1 w-full rounded-lg border bg-white p-2">
                <option value="">{M.chooseSize}</option>
                {sizes.map((size, index) => <option key={`${row.key}-${size}-${index}`} value={size}>{size}</option>)}
              </select>
            </label>
          ) : <></>}
          <label className="flex justify-between items-center gap-3 text-sm">{M.quantity}
            <QuantityStepper value={row.quantity} onChange={(quantity) => update(row, { quantity })} label={name} />
          </label>
        </>
      )}
      {error ? <p id={`${id}-error`} role="alert" className="text-sm text-red-700">{error}</p> : <></>}
    </div>
  );
}
