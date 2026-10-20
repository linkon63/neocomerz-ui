import { useEffect, useId, useRef, useState } from "react";
import type { OrderFormProps } from "../../types/components";
import { ORDER_FORM_MESSAGES as M } from "../../constants/messages";
import { useOrderFormProducts } from "../../hooks/useOrderFormProducts";
import { useOrderFormCart } from "../../hooks/useOrderFormCart";
import { useOrderFormSubmit, type OrderCustomer } from "../../hooks/useOrderFormSubmit";
import OrderConfirmation from "../OrderConfirmation";
import BillingFields from "./BillingFields";
import MultiProductCard from "./MultiProductCard";
import QuantityStepper from "./QuantityStepper";
import { amount, currencyFactor, gtmItems, normalizeProducts, notifyConsumer, priceOf, resolveLine, variantsOf, type ProductDraft } from "./multi-product";
import { getLocalizedString } from "./helpers";

const emptyCustomer: OrderCustomer = { name: "", phone: "", address: "", notes: "" };

export default function MultiProductOrderForm(props: OrderFormProps) {
  const instanceId = useId();
  const configs = normalizeProducts(props.products);
  const currency = props.currencyCode ?? "BDT";
  const factor = currencyFactor(currency);
  const primaryColor = props.primaryColor ?? props.colors?.primary ?? "#F36621";
  const textColor = props.textColor ?? props.colors?.text ?? "#27272a";
  const backgroundColor = props.backgroundColor ?? props.colors?.background ?? "#f3e8ff";
  const catalog = useOrderFormProducts(configs, props.apiBaseUrl, props.apiKey, props.productApiBaseUrl);
  const cart = useOrderFormCart(configs, catalog.productsById, factor);
  const submission = useOrderFormSubmit(props);
  const [customer, setCustomer] = useState<OrderCustomer>(emptyCustomer);
  const shippingOptions = Array.isArray(props.shippingOptions) ? props.shippingOptions.map((option, index) => ({ ...option, id: option.id ?? String(index) })) : [];
  const [shippingId, setShippingId] = useState(shippingOptions[0]?.id ?? "");
  const shipping = shippingOptions.find((option) => option.id === shippingId) ?? shippingOptions[0];
  const shippingValid = shippingOptions.length === 0 || (shipping !== undefined && amount(shipping.price) !== undefined);
  const deliveryMinor = cart.selectedCount > 0 ? Math.round((amount(shipping?.price) ?? 0) * factor) : 0;
  const subtotal = cart.subtotalMinor / factor;
  const delivery = deliveryMinor / factor;
  const total = (cart.subtotalMinor + deliveryMinor) / factor;
  const valid = cart.valid && shippingValid && Number.isSafeInteger(cart.subtotalMinor + deliveryMinor);
  const checkoutStarted = useRef(false);
  const viewed = useRef(new Set<string>());
  const locked = submission.isSubmitting || submission.uncertain;
  const money = (minor: number) => `${currency} ${(minor / factor).toFixed(Math.log10(factor))}`;

  useEffect(() => {
    for (const config of configs) {
      const productId = String(config.productId);
      const product = catalog.productsById[productId]?.data;
      const viewKey = `${props.apiBaseUrl ?? ""}:${productId}`;
      if (!product || viewed.current.has(viewKey)) continue;
      const price = priceOf(product) ?? priceOf(variantsOf(product, config)[0] ?? {});
      if (price === undefined) continue;
      viewed.current.add(viewKey);
      notifyConsumer(props.onProductView, {
        currency, value: price, items: [{
          item_id: productId, item_name: getLocalizedString(product.name ?? product.title) || config.productName || M.product,
          item_category: "", item_variant: "", price, quantity: 1, currency,
        }],
      });
    }
  }, [configs, catalog.productsById, props.apiBaseUrl, props.onProductView, currency]);

  const updateRow = (row: ProductDraft, change: Partial<ProductDraft>) => {
    if (locked) return;
    const next = { ...row, ...change };
    const config = configs.find((item) => String(item.productId) === row.productId)!;
    const resolved = resolveLine(config, catalog.productsById[row.productId], next, factor);
    if (next.checked && !resolved.error && resolved.line) {
      const line = resolved.line;
      const old = resolveLine(config, catalog.productsById[row.productId], row, factor).line;
      const quantityAdded = !row.checked || old?.selectionKey !== line.selectionKey ? next.quantity : Math.max(0, next.quantity - row.quantity);
      const duplicate = cart.lines.some((existing) => existing.key !== row.key && existing.selectionKey === line.selectionKey);
      if (quantityAdded > 0 && !duplicate) notifyConsumer(props.onAddToCart, { currency, value: line.unitPriceMinor * quantityAdded / factor, items: gtmItems([{ ...line, quantity: quantityAdded }], currency, factor) });
    }
    cart.update(row, change);
  };
  const beginCheckout = () => {
    if (!valid || checkoutStarted.current) return;
    checkoutStarted.current = true;
    notifyConsumer(props.onCheckoutBegin, { currency, value: total, shipping: delivery, items: gtmItems(cart.lines, currency, factor) });
  };

  return (
    <>
      <section className="py-24" style={{ backgroundColor, color: textColor }}>
        <div className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-12 space-y-8">
          <header className="text-center space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold">{getLocalizedString(props.title) || M.title}</h1>
            {props.description ? <p className="text-lg">{props.description}</p> : <></>}
          </header>
          <form noValidate onSubmit={(event) => {
            event.preventDefault();
            if (!valid || locked) return;
            beginCheckout();
            void submission.submit({ customer, lines: cart.lines, subtotal, delivery, deliveryLabel: shipping?.label ?? M.delivery, total, factor, valid }).then((success) => {
              if (success) { cart.reset(); setCustomer(emptyCustomer); checkoutStarted.current = false; }
            });
          }}>
            <fieldset disabled={locked} className="m-0 min-w-0 border-0 p-0 grid grid-cols-1 lg:grid-cols-3 rounded-2xl overflow-hidden bg-white">
              <div className="min-w-0 p-4 lg:p-6 space-y-4 border-b lg:border-b-0 lg:border-r border-neutral-200">
                <h2 className="text-2xl font-bold">{M.selectProducts}</h2>
                {configs.length === 0 ? <p>{M.noProducts}</p> : configs.map((config) => {
                  const productId = String(config.productId);
                  const rows = cart.rows.filter((row) => row.productId === productId);
                  const product = catalog.productsById[productId]?.data;
                  const canAddVariant = product ? variantsOf(product, config).length > 1 : false;
                  return <div key={`product-group-${productId}`} className="space-y-3">
                    {rows.map((row) => <MultiProductCard key={row.key} config={config} state={catalog.productsById[productId]} row={row} update={updateRow} error={cart.errors[row.key]} primaryColor={primaryColor} currency={currency} retry={catalog.retry} />)}
                    {canAddVariant ? <button type="button" onClick={() => cart.addVariant(productId)} className="text-sm underline" style={{ color: primaryColor }}>{M.anotherVariant}</button> : <></>}
                  </div>;
                })}
              </div>
              <div className="min-w-0 p-4 lg:p-6 bg-neutral-50 space-y-5 border-b lg:border-b-0 lg:border-r border-neutral-200">
                <h2 className="text-2xl font-bold">{M.cart}</h2>
                {cart.selectedCount === 0 ? <p>{M.empty}</p> : cart.rows.filter((row) => row.checked).map((row) => {
                  const line = cart.lines.find((item) => item.key === row.key);
                  const config = configs.find((item) => String(item.productId) === row.productId);
                  return <div key={`cart-${row.key}`} className="p-4 bg-white rounded-xl border space-y-3">
                    <p className="font-semibold">{line?.name ?? config?.productName ?? M.product}</p>
                    <label className="flex items-center justify-between text-sm">{M.quantity}
                      <QuantityStepper value={row.quantity} onChange={(quantity) => updateRow(row, { quantity })} label={line?.name ?? config?.productName ?? M.product} />
                    </label>
                    {line ? <p>{money(line.unitPriceMinor * line.quantity)}</p> : <></>}
                    {cart.errors[row.key] ? <p role="alert" className="text-red-700 text-sm">{cart.errors[row.key]}</p> : <></>}
                    <button type="button" className="text-sm underline" onClick={() => updateRow(row, { checked: false })}>{M.remove}</button>
                  </div>;
                })}
                <dl className="space-y-3" aria-live="polite">
                  <div className="flex justify-between"><dt>{M.subtotal}</dt><dd>{money(cart.subtotalMinor)}</dd></div>
                  <div className="flex justify-between"><dt>{M.delivery}</dt><dd>{money(deliveryMinor)}</dd></div>
                  <div className="flex justify-between border-t pt-3 font-bold"><dt>{M.total}</dt><dd>{money(cart.subtotalMinor + deliveryMinor)}</dd></div>
                </dl>
                {!shippingValid ? <p role="alert" className="text-red-700">{M.deliveryRequired}</p> : <></>}
              </div>
              <BillingFields
                {...props} primaryColor={primaryColor}
                name={customer.name} setName={(name) => setCustomer((old) => ({ ...old, name }))}
                phone={customer.phone} setPhone={(phone) => setCustomer((old) => ({ ...old, phone }))}
                address={customer.address} setAddress={(address) => setCustomer((old) => ({ ...old, address }))}
                notes={customer.notes} setNotes={(notes) => setCustomer((old) => ({ ...old, notes }))}
                shippingOptions={shippingOptions} selectedShipping={shipping?.id ?? ""} setSelectedShipping={setShippingId}
                shippingGroupName={`shipping-${instanceId}`} isSubmitting={submission.isSubmitting} submitDisabled={!valid || submission.uncertain} onBeginCheckout={beginCheckout}
              />
            </fieldset>
            {submission.error ? <p role="alert" className="mt-4 rounded-lg bg-red-50 p-4 text-red-700">{submission.error}</p> : <></>}
          </form>
        </div>
      </section>
      <OrderConfirmation
        isOpen={submission.isOpen} onClose={submission.close} settings={props.confirmationSettings}
        orderId={submission.order?.orderId} orderNumber={submission.order?.orderNumber} createdAt={submission.order?.createdAt}
        address={submission.order?.customer} items={submission.order?.items}
        subtotal={submission.order?.subtotal} delivery={submission.order?.delivery} total={submission.order?.total}
        currencySymbol={currency} brandName={props.confirmationBrandName} continueShoppingText={props.continueShoppingText}
        viewMoreHref={props.viewMoreHref} viewMoreText={props.viewMoreText} colors={{ primary: primaryColor }}
      />
    </>
  );
}
