import React, { useState, useEffect } from "react";
import type { OrderFormProps } from "../../types/components";
import ProductList from "./ProductList";
import CartSummary from "./CartSummary";
import BillingFields from "./BillingFields";
import {
  getLocalizedString,
  getSizesArray,
  getVariantDisplayValues,
  getDynamicSizeLabel,
} from "./helpers";

export default function OrderForm({
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
  apiKey,
  productId,
  orderPlacementUrl,
  allowedVariants,
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOrderCompleted, setIsOrderCompleted] = useState(false);

  const [allProducts, setAllProducts] = useState<Record<string, unknown>[]>([]);
  const [isLoadingProduct, setIsLoadingProduct] = useState(false);
  const [selectedVariantId, setSelectedVariantId] = useState<string | number>("");
  const [selectedSize, setSelectedSize] = useState<string>("");

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoadingProduct(true);
      try {
        const baseUrl =
          apiBaseUrl ??
          (typeof process !== "undefined"
            ? process.env["NEXT_PUBLIC_API_BASE_URL"]
            : undefined);
        if (!baseUrl || !productId) return;

        const headers: Record<string, string> = { Accept: "application/json" };
        if (apiKey) headers["Authorization"] = `Bearer ${apiKey}`;

        const endpoint = `${baseUrl.replace(/\/$/, "")}/products/${productId}`;
        const res = await fetch(endpoint, { headers });
        const data = (await res.json()) as Record<string, unknown>;
        const payload = (data["data"] ?? data["product"] ?? data) as unknown;
        const items = Array.isArray(payload)
          ? payload
          : payload
          ? [payload]
          : [];
        setAllProducts(items as Record<string, unknown>[]);
      } catch (err) {
        console.warn("OrderForm: Products API failed:", err);
      } finally {
        setIsLoadingProduct(false);
      }
    };
    void fetchProducts();
  }, [apiBaseUrl, apiKey, productId]);

  const effectiveProductId = productId ?? allProducts[0]?.["id"] ?? "";
  const productData =
    allProducts.find((p) => String(p["id"]) === String(effectiveProductId)) ??
    allProducts[0];

  const rawVariants =
    (productData?.["variants"] as Record<string, unknown>[]) ||
    (productData?.["attributes"] as Record<string, unknown>[]) ||
    [];

  let filteredVariants = rawVariants;
  if (allowedVariants && allowedVariants.length > 0) {
    const allowedList = allowedVariants
      .map((a) => (a.name || "").toLowerCase().trim())
      .filter(Boolean);
    if (allowedList.length > 0 && !allowedList.includes("default")) {
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

  const rawTitle = title ?? "Stock সীমিত – আজই অর্ডার করুন!";
  const rawProductName =
    getLocalizedString(productData?.["name"] || productData?.["title"]) ||
    productName ||
    "প্রিমিয়াম Quality Panjabi";

  const displayTitle = getLocalizedString(rawTitle);
  const { value: globalVariantValue } = getVariantDisplayValues(selectedVariantData);
  const displayProductName =
    getLocalizedString(rawProductName) +
    (globalVariantValue ? ` - ${globalVariantValue}` : "");

  const variantPrice =
    selectedVariantData?.["price"] ??
    (selectedVariantData?.["current_pricing"] as Record<string, unknown>)?.[
      "unit_price"
    ] ??
    (selectedVariantData?.["current_pricing"] as Record<string, unknown>)?.[
      "retail_price"
    ];
  const basePrice =
    productData?.["price"] ??
    (productData?.["current_pricing"] as Record<string, unknown>)?.[
      "unit_price"
    ] ??
    (productData?.["current_pricing"] as Record<string, unknown>)?.[
      "retail_price"
    ];
  const finalPrice = variantPrice ?? basePrice;
  const hasFinalPrice =
    finalPrice !== null &&
    finalPrice !== undefined &&
    String(finalPrice).trim() !== "";
  const displayProductPrice = hasFinalPrice
    ? String(finalPrice).includes("৳")
      ? String(finalPrice)
      : `৳${finalPrice}`
    : productPrice ?? "৳1499";

  const displayProductImage =
    String(
      selectedVariantData?.["image"] ||
        selectedVariantData?.["thumbnail"] ||
        productData?.["image"] ||
        productData?.["thumbnail_image"] ||
        productData?.["thumbnail"] ||
        productData?.["thumbnail_url"] ||
        productImage ||
        ""
    ) || undefined;

  const selectedShippingOption =
    shippingOptions.find((opt) => opt.id === selectedShipping) ??
    shippingOptions[0];
  const shippingCharge = selectedShippingOption?.price ?? 0;
  const productPriceNum = parseFloat(
    String(displayProductPrice).replace(/[^\d.]/g, "") || "0"
  );
  const subtotal = productPriceNum * quantity;
  const total = subtotal + shippingCharge;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const baseUrl =
      apiBaseUrl ??
      (typeof process !== "undefined"
        ? process.env["NEXT_PUBLIC_API_BASE_URL"]
        : undefined);
    const submitUrl =
      orderPlacementUrl ||
      (baseUrl ? `${baseUrl.replace(/\/$/, "")}/orders` : null);

    const payload = {
      product_id: effectiveProductId,
      variant_id: selectedVariantId || undefined,
      size: selectedSize || undefined,
      name,
      phone,
      address,
      notes,
      quantity,
      shipping_id: selectedShipping,
      total_amount: total,
    };

    if (submitUrl) {
      try {
        const headers: Record<string, string> = {
          "Content-Type": "application/json",
          Accept: "application/json",
        };
        if (apiKey) headers["Authorization"] = `Bearer ${apiKey}`;
        const res = await fetch(submitUrl, {
          method: "POST",
          headers,
          body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error("API submission failed");
        setName(""); setPhone(""); setAddress(""); setNotes(""); setQuantity(1);
        setIsOrderCompleted(true);
      } catch {
        alert("Failed to submit order. Please try again or contact support.");
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setTimeout(() => {
        setIsSubmitting(false);
        setName(""); setPhone(""); setAddress(""); setNotes(""); setQuantity(1);
        setIsOrderCompleted(true);
      }, 2000);
    }
  };

  if (isOrderCompleted) {
    return (
      <section className="py-24" style={{ backgroundColor }}>
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 flex flex-col justify-center items-center">
          <div className="max-w-xl w-full bg-white p-8 md:p-12 rounded-2xl shadow-2xl text-center flex flex-col items-center gap-6">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-green-500 mb-2">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">অর্ডার সম্পন্ন হয়েছে!</h2>
            <p className="text-lg text-gray-600">
              আপনার অর্ডারটি সফলভাবে গ্রহণ করা হয়েছে। আমাদের প্রতিনিধি খুব শীঘ্রই আপনার সাথে যোগাযোগ করবেন।
            </p>
            <button 
              onClick={() => setIsOrderCompleted(false)}
              className="mt-4 px-8 py-4 rounded-xl font-bold text-white text-lg transition-all hover:opacity-90 hover:scale-105 active:scale-95"
              style={{ backgroundColor: primaryColor, boxShadow: `0 4px 14px 0 ${primaryColor}40` }}
            >
              আরও শপিং করুন
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
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
          onSubmit={(e) => { void handleSubmit(e); }}
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
            isSubmitting={isSubmitting}
          />
        </form>
      </div>
    </section>
  );
}
