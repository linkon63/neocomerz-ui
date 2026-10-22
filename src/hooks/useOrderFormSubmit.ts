import { useRef, useState } from "react";
import type { OrderFormProps, OrderFormSuccess } from "../types/components";
import { ORDER_FORM_MESSAGES as M } from "../constants/messages";
import { amount, gtmItems, notifyConsumer, record, records, type PurchaseLine } from "../components/OrderForm/multi-product";
import { getLocalizedString } from "../components/OrderForm/helpers";

export type OrderCustomer = { name: string; phone: string; address: string; notes: string };
type Submission = {
  customer: OrderCustomer; lines: PurchaseLine[]; subtotal: number;
  delivery: number; deliveryLabel: string; total: number; factor: number; valid: boolean;
};

export function useOrderFormSubmit(props: OrderFormProps) {
  const lock = useRef(false);
  const [isSubmitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [uncertain, setUncertain] = useState(false);
  const [order, setOrder] = useState<OrderFormSuccess>();
  const [isOpen, setOpen] = useState(false);

  const submit = async (snapshot: Submission): Promise<boolean> => {
    if (lock.current) return false;
    setError("");
    if (!snapshot.valid || snapshot.lines.length === 0) { setError(M.empty); return false; }
    const { customer, lines, subtotal, delivery, total, factor } = snapshot;
    if (!customer.name.trim() || !customer.phone.trim() || !customer.address.trim()) { setError(M.customerRequired); return false; }
    const baseUrl = props.apiBaseUrl ?? process.env["NEXT_PUBLIC_API_BASE_URL"];
    const url = props.orderPlacementUrl || (baseUrl ? `${baseUrl.replace(/\/$/, "")}/orders` : "");
    if (!url) { setError(M.configuration); return false; }
    lock.current = true;
    setSubmitting(true);
    const [firstName, ...rest] = customer.name.trim().split(/\s+/);
    const address = { first_name: firstName, last_name: rest.join(" "), phone: customer.phone.trim(), address: customer.address.trim(), state: "", city: "", area: "", postcode: "", landmark: "" };
    const payload = {
      channel_id: props.channelId ?? 2, amount_due: total, amount_paid: 0, amount_change: 0,
      billing_address: { ...address, type: "billing" }, shipping_address: { ...address, type: "shipping" },
      payment: { intent: "sale", status: "unpaid", meta_data: [{ provider: M.cod, type: "cash", amount: String(total), payment_information: customer.notes || M.cod, vouchers: [] }] },
      purchasable: lines.map((line) => ({
        id: line.purchasableId, quantity: line.quantity, order_quantity: line.quantity,
        discount_should_apply: true, uom_id: 1, uom: "pcs", order_uom_id: 1, order_uom: "pcs", batch_id: null,
      })),
      meta_data: { additional_amount_breakdown: delivery > 0 ? [{ key: "additional_amount", title: snapshot.deliveryLabel, amount: delivery }] : [] },
    };
    let unknownOutcome = false;
    let succeeded = false;
    try {
      const headers: Record<string, string> = { Accept: "application/json", "Content-Type": "application/json" };
      if (props.apiKey) headers.Authorization = `Bearer ${props.apiKey}`;
      const response = await fetch(url, { method: "POST", headers, body: JSON.stringify(payload) });
      const body = record(await response.json().catch(() => undefined));
      if ((response.status !== 200 && response.status !== 201) || body.status === "error" || body.status === "failed" || body.success === false) {
        unknownOutcome = response.status >= 500;
        setError(unknownOutcome ? M.uncertain : M.failed);
      } else {
        const data = record(body.data ?? body.order ?? body);
        const result = Object.keys(record(data.order)).length > 0 ? record(data.order) : data;
        const id = result.id ?? result.order_number;
        if ((typeof id !== "string" && typeof id !== "number") || String(id).trim() === "") {
          unknownOutcome = true;
          setError(M.uncertain);
        } else {
          const submittedItems = lines.map((line) => ({
            id: line.selectionKey, name: line.name, quantity: line.quantity, price: line.unitPriceMinor / factor, imageUrl: line.imageUrl,
          }));
          const returnedItems = records(result.items);
          const matchedLines = returnedItems.map((item) => lines.find((line) =>
            line.purchasableId === String(item.purchasable_id ?? record(item.purchasable).id ?? item.variant_id ?? item.product_id ?? "")
          ));
          const canUseReturnedItems = returnedItems.length === lines.length
            && new Set(matchedLines.map((line) => line?.selectionKey)).size === lines.length
            && returnedItems.every((item, index) =>
            matchedLines[index] && getLocalizedString(item.name) && amount(item.price) !== undefined && Number.isSafeInteger(Number(item.quantity)) && Number(item.quantity) > 0
          );
          const success: OrderFormSuccess = {
            orderId: String(id), orderNumber: String(result.order_number ?? id),
            createdAt: typeof result.created_at === "string" ? result.created_at : new Date().toISOString(),
            customer: { name: customer.name.trim(), phone: customer.phone.trim(), addressLine: customer.address.trim() },
            items: canUseReturnedItems ? returnedItems.map((item, index) => ({
              id: matchedLines[index]!.selectionKey,
              name: matchedLines[index]!.variant ? `${getLocalizedString(item.name)} — ${matchedLines[index]!.variant}` : getLocalizedString(item.name),
              price: amount(item.price)!, quantity: Number(item.quantity), imageUrl: String(item.image_url ?? ""),
            })) : submittedItems,
            subtotal: amount(result.subtotal) ?? subtotal,
            delivery: amount(result.delivery ?? result.shipping_total) ?? delivery,
            total: amount(result.total ?? result.amount_due) ?? total,
          };
          setOrder(success);
          setOpen(true);
          succeeded = true;
          const currency = props.currencyCode ?? "BDT";
          notifyConsumer(props.onOrderSuccess, success);
          notifyConsumer(props.onPurchase, {
            currency, value: success.total, shipping: success.delivery, transaction_id: success.orderId,
            items: success.items.map((item) => {
              const line = lines.find((entry) => entry.selectionKey === item.id)!;
              return { ...gtmItems([line], currency, factor)[0], item_name: item.name, price: item.price, quantity: item.quantity };
            }),
          });
        }
      }
    } catch {
      unknownOutcome = true;
      setError(M.uncertain);
    } finally {
      setSubmitting(false);
      setUncertain(unknownOutcome);
      lock.current = unknownOutcome;
    }
    return succeeded;
  };

  return { submit, isSubmitting, error, uncertain, order, isOpen, close: () => setOpen(false) };
}
