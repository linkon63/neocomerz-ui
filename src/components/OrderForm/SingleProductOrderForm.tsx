import React, { useState, useEffect, useRef } from "react";
import type { OrderFormProps } from "../../types/components";
import OrderConfirmation from "../OrderConfirmation";
import ProductList from "./ProductList";
import CartSummary from "./CartSummary";
import BillingFields from "./BillingFields";
import {
  getLocalizedString,
  getSizesArray,
  getVariantDisplayValues,
  getDynamicSizeLabel,
} from "./helpers";
import { currencyFactor, type PurchaseLine } from "./multi-product";
import { useOrderFormProducts } from "../../hooks/useOrderFormProducts";
import { useOrderFormSubmit } from "../../hooks/useOrderFormSubmit";
import { createSingleProductGtmItem, getSingleProductDisplay } from "../../utils/orderFormProduct";

export default function SingleProductOrderForm({
  title,
  description,
  submitButtonText,
  productImage,
  productImageAlt,
  productName,
  productPrice,
  shippingOptions = [],
  namePlaceholder,
  phonePlaceholder,
  addressPlaceholder,
  notesPlaceholder,
  cashOnDeliveryText,
  privacyPolicyUrl,
  colors = {},
  primaryColor: primaryColorProp,
  textColor: textColorProp,
  backgroundColor: backgroundColorProp,
  apiBaseUrl,
  productApiBaseUrl,
  apiKey,
  productId,
  orderPlacementUrl,
  allowedVariants,
  maxVariantsToShow,
  maxProductsToShow,
  channelId,
  currencyCode = "BDT",
  onProductView,
  onAddToCart,
  onCheckoutBegin,
  onPurchase,
  onOrderSuccess,
  confirmationBrandName,
  confirmationSettings,
  continueShoppingText,
  viewMoreHref,
  viewMoreText,
}: OrderFormProps) {
  const primaryColor = primaryColorProp ?? colors.primary ?? "#F36621";
  const textColor = textColorProp ?? colors.text ?? "#27272a";
  const backgroundColor = backgroundColorProp ?? colors.background ?? "#f3e8ff";

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [selectedShipping, setSelectedShipping] = useState(
    shippingOptions[0]?.id ?? ""
  );
  const [selectedVariantId, setSelectedVariantId] = useState<string | number>("");
  const [selectedSize, setSelectedSize] = useState<string>("");
  const hasFiredViewItemRef = useRef(false);
  const hasFiredCheckoutRef = useRef(false);
  const previousCartStateRef = useRef<{
    productId: unknown;
    quantity: number;
    selectedVariantId: string | number;
    selectedSize: string;
  } | null>(null);
  const productCatalog = useOrderFormProducts(
    productId ? [{ productId }] : [],
    apiBaseUrl,
    apiKey,
    productApiBaseUrl
  );
  const productState = productId
    ? productCatalog.productsById[String(productId)]
    : undefined;
  const productData = productState?.data;
  const isLoadingProduct = productState?.loading ?? false;
  const effectiveProductId = productId ?? productData?.["id"] ?? "";
  const submission = useOrderFormSubmit({
    apiBaseUrl,
    apiKey,
    orderPlacementUrl,
    channelId,
    currencyCode,
    onOrderSuccess,
    onPurchase,
  });

  const rawVariants =
    (productData?.["variants"] as Record<string, unknown>[]) ||
    (productData?.["attributes"] as Record<string, unknown>[]) ||
    [];

  let filteredVariants = rawVariants;
  if (allowedVariants && allowedVariants.length > 0) {
    const allowedIds = allowedVariants
      .map((variant) => String(variant.id ?? "").trim())
      .filter(Boolean);
    const allowedList = allowedVariants
      .map((a) => (a.name || "").toLowerCase().trim())
      .filter(Boolean);
    if (allowedIds.length > 0) {
      filteredVariants = rawVariants.filter((variant) =>
        allowedIds.includes(String(variant["id"]))
      );
    } else if (allowedList.length > 0 && !allowedList.includes("default")) {
      filteredVariants = rawVariants.filter((v) => {
        const { label } = getVariantDisplayValues(v);
        const vLabel = (label || "Variant").toLowerCase().trim();
        const sLabel = getDynamicSizeLabel(v, productData).toLowerCase().trim();
        return allowedList.includes(vLabel) || allowedList.includes(sLabel);
      });
    }
  }

  const variants = filteredVariants;

  useEffect(() => {
    if (variants.length > 0) {
      if (!variants.find((v) => String(v["id"]) === String(selectedVariantId))) {
        setSelectedVariantId(variants[0]["id"] as string | number);
      }
    } else {
      setSelectedVariantId("");
    }
  }, [variants, selectedVariantId]);

  const selectedVariantData =
    variants.find((v) => String(v["id"]) === String(selectedVariantId)) ??
    variants[0];

  useEffect(() => {
    const availableSizes = getSizesArray(
      selectedVariantData?.["sizes"] || productData?.["sizes"]
    );
    if (selectedSize && !availableSizes.includes(selectedSize)) {
      setSelectedSize("");
    }
  }, [selectedVariantData, productData, selectedSize]);

  const rawTitle = title ?? "Stock Limited – Order Now!";
  const displayTitle = getLocalizedString(rawTitle);
  const productDisplay = getSingleProductDisplay(
    productData ?? {},
    selectedVariantData ?? {},
    productName ?? "",
    productPrice ?? "",
    productImage ?? ""
  );
  const {
    rawProductName,
    variantValue: globalVariantValue,
    displayProductName,
    displayProductPrice,
    displayProductImage,
    productPrice: productPriceNum,
  } = productDisplay;

  const selectedShippingOption =
    shippingOptions.find((opt) => opt.id === selectedShipping) ??
    shippingOptions[0];
  const shippingCharge = selectedShippingOption?.price ?? 0;
  const subtotal = productPriceNum * quantity;
  const total = subtotal + shippingCharge;
  useEffect(() => {
    if (!productData?.["id"] || hasFiredViewItemRef.current) return;
    hasFiredViewItemRef.current = true;
    onProductView?.({
      currency: currencyCode,
      value: productPriceNum,
      items: [createSingleProductGtmItem(productData ?? {}, String(effectiveProductId), rawProductName, globalVariantValue, selectedSize, productPriceNum, currencyCode, 1)],
    });
    // The ref ensures the view event fires once for the loaded product.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productData?.["id"]]);

  useEffect(() => {
    const nextCartState = {
      productId: productData?.["id"],
      quantity,
      selectedVariantId,
      selectedSize,
    };
    const previousCartState = previousCartStateRef.current;
    previousCartStateRef.current = nextCartState;

    if (
      !previousCartState ||
      previousCartState.productId !== nextCartState.productId ||
      !productData?.["id"]
    ) {
      return;
    }

    const cartChanged =
      previousCartState.quantity !== quantity ||
      previousCartState.selectedVariantId !== selectedVariantId ||
      previousCartState.selectedSize !== selectedSize;
    if (!cartChanged) return;

    onAddToCart?.({
      currency: currencyCode,
      value: subtotal,
      items: [createSingleProductGtmItem(productData ?? {}, String(effectiveProductId), rawProductName, globalVariantValue, selectedSize, productPriceNum, currencyCode, quantity)],
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quantity, selectedVariantId, selectedSize, productData?.["id"]]);

  const handleBeginCheckout = () => {
    if (hasFiredCheckoutRef.current || !productData?.["id"]) return;
    hasFiredCheckoutRef.current = true;
    onCheckoutBegin?.({
      currency: currencyCode,
      value: total,
      shipping: shippingCharge,
      items: [createSingleProductGtmItem(productData ?? {}, String(effectiveProductId), rawProductName, globalVariantValue, selectedSize, productPriceNum, currencyCode, quantity)],
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const purchasableId = selectedVariantId || effectiveProductId;
    const factor = currencyFactor(currencyCode);
    const variant = getLocalizedString(globalVariantValue || "") + (selectedSize ? ` / ${selectedSize}` : "");
    const line: PurchaseLine = {
      key: "single-product",
      selectionKey: JSON.stringify([effectiveProductId, purchasableId, selectedSize]),
      productId: String(effectiveProductId),
      purchasableId: String(purchasableId),
      name: displayProductName,
      imageUrl: displayProductImage || productImage || "",
      variant,
      quantity,
      unitPriceMinor: Math.round(productPriceNum * factor),
    };

    void submission.submit({
      customer: { name, phone, address, notes },
      lines: [line],
      subtotal,
      delivery: shippingCharge,
      deliveryLabel: selectedShippingOption?.label || "Shipping Charge",
      total,
      factor,
      valid: Boolean(effectiveProductId) && productPriceNum > 0,
    }).then((success) => {
      if (success) {
        setName(""); setPhone(""); setAddress(""); setNotes(""); setQuantity(1);
      }
    });
  };

  return (
    <>
    <section className="py-24" style={{ backgroundColor }}>
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 flex flex-col justify-start items-center gap-8 lg:gap-16">
        <div className="self-stretch flex flex-col justify-start items-center gap-4">
          <h1
            className="text-center text-3xl md:text-5xl lg:text-6xl font-bold leading-tight lg:leading-[64px]"
            style={{ color: textColor }}
          >
            {displayTitle}
          </h1>
          {description && (
            <p
              className="text-center text-lg md:text-xl lg:text-2xl font-normal leading-7"
              style={{ color: textColor }}
            >
              {description}
            </p>
          )}
        </div>

        <form
          onSubmit={handleSubmit}
          className="self-stretch rounded-2xl grid grid-cols-1 lg:grid-cols-3 overflow-hidden shadow-xl lg:shadow-none bg-white lg:bg-transparent"
        >
          <ProductList
            isLoadingProduct={isLoadingProduct}
            productData={productData ?? null}
            variants={variants}
            allowedVariants={allowedVariants}
            selectedVariantId={selectedVariantId}
            setSelectedVariantId={setSelectedVariantId}
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
            quantity={quantity}
            setQuantity={setQuantity}
            primaryColor={primaryColor}
            rawProductName={rawProductName}
            productPrice={productPrice}
            productImage={productImage}
            productImageAlt={productImageAlt}
            displayProductName={displayProductName}
            displayProductPrice={displayProductPrice}
            displayProductImage={displayProductImage}
            maxVariantsToShow={maxVariantsToShow ?? maxProductsToShow}
          />

          <CartSummary
            isLoadingProduct={isLoadingProduct}
            displayProductName={displayProductName}
            selectedSize={selectedSize}
            selectedSizeLabel={
              getDynamicSizeLabel(selectedVariantData, productData) || "Size"
            }
            quantity={quantity}
            subtotal={subtotal}
            shippingCharge={shippingCharge}
            total={total}
          />

          <BillingFields
            primaryColor={primaryColor}
            namePlaceholder={namePlaceholder}
            phonePlaceholder={phonePlaceholder}
            addressPlaceholder={addressPlaceholder}
            notesPlaceholder={notesPlaceholder}
            cashOnDeliveryText={cashOnDeliveryText}
            privacyPolicyUrl={privacyPolicyUrl}
            submitButtonText={submitButtonText}
            name={name} setName={setName}
            phone={phone} setPhone={setPhone}
            address={address} setAddress={setAddress}
            notes={notes} setNotes={setNotes}
            shippingOptions={shippingOptions}
            selectedShipping={selectedShipping}
            setSelectedShipping={setSelectedShipping}
            isSubmitting={submission.isSubmitting}
            onBeginCheckout={handleBeginCheckout}
          />
        </form>
      </div>
    </section>
    <OrderConfirmation
      isOpen={submission.isOpen}
      onClose={submission.close}
      orderId={submission.order?.orderId}
      orderNumber={submission.order?.orderNumber}
      createdAt={submission.order?.createdAt}
      address={{
        name: submission.order?.customer.name,
        phone: submission.order?.customer.phone,
        addressLine: submission.order?.customer.addressLine,
      }}
      items={submission.order?.items}
      subtotal={submission.order?.subtotal}
      delivery={submission.order?.delivery}
      total={submission.order?.total}
      currencySymbol={currencyCode}
      brandName={confirmationSettings?.brandName ?? confirmationBrandName}
      logoSrc={confirmationSettings?.logoSrc}
      version={confirmationSettings?.version}
      settings={confirmationSettings}
      continueShoppingText={continueShoppingText}
      viewMoreHref={viewMoreHref}
      viewMoreText={viewMoreText}
      colors={{ primary: primaryColor, text: textColor, background: "#f8fafc" }}
    />
    </>
  );
}
