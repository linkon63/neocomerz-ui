"use client";

import { useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import { House, Printer, ShoppingBag, X } from "lucide-react";
import type { OrderConfirmationProps } from "../../types/components";

const formatAmount = (amount: number, currencySymbol: string): string =>
  `${currencySymbol} ${Number.isFinite(amount) ? amount.toFixed(2) : "0.00"}`;

const formatDate = (createdAt?: string): string => {
  if (!createdAt) return "";
  const date: Date = new Date(createdAt);
  return Number.isNaN(date.valueOf()) ? "" : date.toLocaleString();
};

const printInvoice = (printAreaId: string, onPrint?: () => void): void => {
  if (onPrint) {
    onPrint();
    return;
  }

  if (typeof window === "undefined" || typeof document === "undefined") return;

  const printArea: HTMLElement | null = document.getElementById(printAreaId);
  if (!printArea) return;

  const clone: HTMLElement = printArea.cloneNode(true) as HTMLElement;
  clone.querySelectorAll(".no-print, [data-no-print]").forEach((element: Element) => element.remove());

  const iframe: HTMLIFrameElement = document.createElement("iframe");
  iframe.style.position = "fixed";
  iframe.style.right = "0";
  iframe.style.bottom = "0";
  iframe.style.width = "0";
  iframe.style.height = "0";
  iframe.style.border = "0";
  document.body.appendChild(iframe);

  const frameWindow: Window | null = iframe.contentWindow;
  if (!frameWindow) {
    document.body.removeChild(iframe);
    return;
  }

  const frameDocument: Document = frameWindow.document;
  frameDocument.open();
  frameDocument.write(`<!doctype html><html><head><title>Order invoice</title></head><body>${clone.outerHTML}</body></html>`);
  frameDocument.close();

  document.querySelectorAll('style, link[rel="stylesheet"]').forEach((style: Element) => {
    frameDocument.head.appendChild(style.cloneNode(true));
  });

  window.setTimeout(() => {
    frameWindow.focus();
    frameWindow.print();
    window.setTimeout(() => {
      if (iframe.isConnected) document.body.removeChild(iframe);
    }, 1000);
  }, 500);
};

export default function OrderConfirmation({
  version: versionProp,
  settings,
  portalContainer,
  preview = false,
  isOpen,
  onClose,
  orderId = "",
  orderNumber = "",
  createdAt,
  address,
  items,
  subtotal = 0,
  delivery = 0,
  total = 0,
  currencySymbol = "BDT",
  paymentMethod = "Cash on Delivery",
  paymentStatus = "Unpaid",
  viewMoreHref = "/shop",
  continueShoppingText = "Continue shopping",
  viewMoreText = "View more",
  printText = "Print invoice",
  onPrint,
  printAreaId,
  logoSrc = "",
  brandName = "",
  colors,
  className = "",
}: OrderConfirmationProps) {
  const [mounted, setMounted] = useState<boolean>(false);
  const generatedId: string = useId();
  const titleId = `order-confirmation-title-${generatedId}`;
  const resolvedPrintAreaId: string = printAreaId ?? `order-confirmation-${generatedId.replaceAll(":", "")}`;
  const orderItems = Array.isArray(items) ? items : [];
  const addressLines: string[] = [
    address?.addressLine,
    address?.area,
    address?.district,
    address?.division,
    address?.postcode,
    address?.country,
  ].filter((line): line is string => typeof line === "string" && line.length > 0);
  const resolvedOrderNumber: string = orderNumber || orderId || "N/A";
  const orderDate: string = formatDate(createdAt);
  const version = settings?.version ?? versionProp ?? "v1";
  const primaryColor: string = settings?.primaryColor ?? colors?.primary ?? "#059669";
  const backgroundColor: string = settings?.backgroundColor ?? colors?.background ?? "#ffffff";
  const textColor: string | undefined = settings?.textColor || undefined;
  const customTextStyle = textColor ? { color: textColor } : undefined;
  const title = settings?.title ?? "Thank you for your order";
  const message = settings?.message ?? "";
  const confirmedLabel = settings?.confirmedLabel ?? "Order confirmed";
  const orderNumberLabel = settings?.orderNumberLabel ?? "Order number:";
  const placedOnLabel = settings?.placedOnLabel ?? "Placed on";
  const customerInformationLabel = settings?.customerInformationLabel ?? "Customer information";
  const paymentLabel = settings?.paymentLabel ?? "Payment";
  const amountDueLabel = settings?.amountDueLabel ?? "Amount due:";
  const paymentStatusLabel = settings?.paymentStatusLabel ?? "Status:";
  const orderDetailsLabel = settings?.orderDetailsLabel ?? "Order details";
  const quantityLabel = settings?.quantityLabel ?? "Qty";
  const subtotalLabel = settings?.subtotalLabel ?? "Subtotal";
  const deliveryLabel = settings?.deliveryLabel ?? "Delivery";
  const totalLabel = settings?.totalLabel ?? "Total";
  const noItemsLabel = settings?.noItemsLabel ?? "No item details available.";
  const missingNameLabel = settings?.missingNameLabel ?? "Name not provided";
  const missingPhoneLabel = settings?.missingPhoneLabel ?? "Phone not provided";
  const missingAddressLabel = settings?.missingAddressLabel ?? "Address not provided";
  const resolvedPrintText = settings?.printLabel ?? printText;
  const resolvedContinueShoppingText = settings?.continueShoppingLabel ?? continueShoppingText;
  const resolvedViewMoreText = settings?.viewMoreLabel ?? viewMoreText;
  const resolvedBrandName = settings?.brandName ?? brandName;
  const resolvedLogoSrc = settings?.logoSrc ?? logoSrc;
  const resolvedViewMoreHref = settings?.viewMoreHref ?? viewMoreHref;
  const dialogStyle = version === "v2"
    ? "max-w-5xl rounded-3xl"
    : version === "v3"
      ? "max-w-2xl rounded-xl"
      : "max-w-4xl rounded-2xl";
  const headerStyle = version === "v2"
    ? "rounded-2xl p-6 text-white"
    : version === "v3"
      ? "flex-col items-center text-center"
      : "";
  const cardStyle = version === "v2"
    ? "rounded-2xl bg-slate-50"
    : version === "v3"
      ? "border-0 bg-slate-50/70"
      : "";

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen || !mounted) return;

    const modalDocument = portalContainer?.ownerDocument ?? document;
    const originalOverflow: string = modalDocument.body.style.overflow;
    modalDocument.body.style.overflow = "hidden";
    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === "Escape") onClose();
    };
    modalDocument.addEventListener("keydown", handleKeyDown);

    return () => {
      modalDocument.body.style.overflow = originalOverflow;
      modalDocument.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, mounted, onClose, portalContainer]);

  const modal = (
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-slate-950/60 px-4 py-5 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        aria-labelledby={titleId}
        aria-modal="true"
        className={`relative flex max-h-[92vh] w-full flex-col overflow-hidden bg-white shadow-2xl ${dialogStyle} ${className}`}
        role="dialog"
        style={{ backgroundColor }}
      >
        <button
          type="button"
          aria-label="Close order confirmation"
          onClick={onClose}
          className="absolute right-3 top-3 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-600 shadow-sm transition hover:bg-slate-100"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>

        <div id={resolvedPrintAreaId} className="overflow-y-auto p-5 sm:p-7 md:p-8">
          <header
            className={`flex flex-col gap-4 border-b border-slate-200 pb-5 pr-10 sm:flex-row sm:items-start sm:justify-between ${headerStyle}`}
            style={version === "v2" ? { backgroundColor: primaryColor } : undefined}
          >
            <div>
              {resolvedLogoSrc ? <img src={resolvedLogoSrc} alt={resolvedBrandName || "Store logo"} className="mb-4 max-h-12 max-w-40 object-contain" /> : ""}
              <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: version === "v2" ? "white" : primaryColor }}>{confirmedLabel}</p>
              <h1 id={titleId} className={`mt-2 text-2xl font-bold md:text-3xl ${version === "v2" ? "text-white" : "text-slate-900"}`} style={version === "v2" ? undefined : customTextStyle}>
                {title}
              </h1>
              {resolvedBrandName ? <p className={`mt-1 text-sm ${version === "v2" ? "text-white/80" : "text-slate-500"}`}>{resolvedBrandName}</p> : ""}
              {message ? <p className={`mt-2 text-sm ${version === "v2" ? "text-white/90" : "text-slate-600"}`}>{message}</p> : ""}
              <p className={`mt-3 text-sm ${version === "v2" ? "text-white/90" : "text-slate-600"}`}>
                {orderNumberLabel} <span className={`font-semibold ${version === "v2" ? "text-white" : "text-slate-900"}`}>{resolvedOrderNumber}</span>
              </p>
              {orderDate ? <p className={`text-xs ${version === "v2" ? "text-white/70" : "text-slate-400"}`}>{placedOnLabel} {orderDate}</p> : ""}
            </div>
            <button
              type="button"
              onClick={() => { if (!preview) printInvoice(resolvedPrintAreaId, onPrint); }}
              className="no-print inline-flex shrink-0 items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-white transition hover:opacity-90 print:hidden"
              style={{ backgroundColor: primaryColor }}
              data-no-print="true"
            >
              <Printer className="h-4 w-4" aria-hidden="true" />
              {resolvedPrintText}
            </button>
          </header>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <section className={`border border-slate-200 p-4 ${cardStyle}`}>
              <h2 className="text-sm font-semibold text-slate-900" style={customTextStyle}>{customerInformationLabel}</h2>
              <div className="mt-2 space-y-1 text-sm text-slate-700" style={customTextStyle}>
                <p className="font-semibold">{address?.name || missingNameLabel}</p>
                <p>{address?.phone || missingPhoneLabel}</p>
                {addressLines.length > 0 ? addressLines.map((line: string, index: number) => (
                  <p key={`${line}-${index}`}>{line}</p>
                )) : <p className="text-slate-500">{missingAddressLabel}</p>}
              </div>
            </section>
            <section className={`border border-slate-200 p-4 ${cardStyle}`}>
              <h2 className="text-sm font-semibold text-slate-900" style={customTextStyle}>{paymentLabel}</h2>
              <div className="mt-2 space-y-1 text-sm text-slate-700" style={customTextStyle}>
                <p className="font-semibold">{paymentMethod}</p>
                <p className="text-slate-500">{amountDueLabel} {formatAmount(total, currencySymbol)}</p>
                <p className="text-slate-500">{paymentStatusLabel} {paymentStatus}</p>
              </div>
            </section>
          </div>

          <section className="mt-6 border border-slate-200">
            <h2 className="border-b border-slate-200 px-4 py-3 text-sm font-semibold text-slate-900" style={customTextStyle}>{orderDetailsLabel}</h2>
            {orderItems.length > 0 ? orderItems.map((item, index) => (
              <div key={`${item.id}-${item.name}-${index}`} className="flex flex-col gap-4 border-b border-slate-100 px-4 py-4 last:border-b-0 sm:flex-row sm:items-center">
                <div className="flex min-w-0 flex-1 items-center gap-3">
                  {item.imageUrl ? <img src={item.imageUrl} alt={item.name} className="h-16 w-16 shrink-0 object-cover" /> : ""}
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-slate-900" style={customTextStyle}>{item.name}</p>
                    <p className="text-xs text-slate-500">{quantityLabel} {item.quantity}</p>
                  </div>
                </div>
                <p className="text-sm font-semibold text-slate-900" style={customTextStyle}>{formatAmount(item.price * item.quantity, currencySymbol)}</p>
              </div>
            )) : <p className="px-4 py-6 text-center text-sm text-slate-500">{noItemsLabel}</p>}
          </section>

          <div className="mt-6 flex flex-col items-end gap-2 text-sm text-slate-700" style={customTextStyle}>
            <div className="flex w-full max-w-xs justify-between"><span>{subtotalLabel}</span><span>{formatAmount(subtotal, currencySymbol)}</span></div>
            <div className="flex w-full max-w-xs justify-between"><span>{deliveryLabel}</span><span>{delivery > 0 ? formatAmount(delivery, currencySymbol) : "Free"}</span></div>
            <div className="flex w-full max-w-xs justify-between text-base font-semibold text-slate-900"><span>{totalLabel}</span><span>{formatAmount(total, currencySymbol)}</span></div>
          </div>

          <div className="no-print mt-7 flex flex-wrap gap-3 print:hidden" data-no-print="true">
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              style={{ backgroundColor: primaryColor }}
            >
              <ShoppingBag className="h-4 w-4" aria-hidden="true" />
              {resolvedContinueShoppingText}
            </button>
            <a
              href={resolvedViewMoreHref}
              onClick={(event) => {
                if (preview) event.preventDefault();
                else onClose();
              }}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-500"
            >
              <House className="h-4 w-4" aria-hidden="true" />
              {resolvedViewMoreText}
            </a>
          </div>
        </div>
      </section>
    </div>
  );

  return mounted && isOpen ? createPortal(modal, portalContainer ?? document.body) : <></>;
}
