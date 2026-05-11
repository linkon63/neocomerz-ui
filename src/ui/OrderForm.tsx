import React, { useState, useEffect, useRef } from 'react';
import OrderFormProductList from './OrderFormProductList';
import OrderFormCartSummary from './OrderFormCartSummary';
import OrderFormBillingFields from './OrderFormBillingFields';
import { getLocalizedString, getSizesArray, getVariantDisplayValues } from './OrderFormHelpers';

export type OrderFormGtmItem = {
  item_id: string;
  item_name: string;
  item_category: string;
  item_variant: string;
  price: number;
  currency: string;
  quantity: number;
};

export type OrderFormGtmPayload = {
  currency: string;
  value: number;
  shipping?: number;
  transaction_id?: string;
  items: OrderFormGtmItem[];
};

interface OrderFormUIProps {
  title?: string;
  description?: string;
  submitButtonText?: string;
  productImage?: string;
  productImageAlt?: string;
  productName?: string;
  productPrice?: string;
  shippingOptions?: Array<{
    id?: string;
    label?: string;
    price?: number;
  }>;
  namePlaceholder?: string;
  phonePlaceholder?: string;
  addressPlaceholder?: string;
  notesPlaceholder?: string;
  cashOnDeliveryText?: string;
  privacyPolicyUrl?: string;
  colors?: {
    primary?: string;
    text?: string;
    background?: string;
  };
  apiBaseUrl?: string;
  apiKey?: string;
  productId?: string | number;
  orderPlacementUrl?: string;
  maxVariantsToShow?: number;
  maxProductsToShow?: number;
  allowedVariants?: { name: string }[];
  channelId?: number;
  currencyCode?: string;
  onProductView?: (payload: OrderFormGtmPayload) => void;
  onAddToCart?: (payload: OrderFormGtmPayload) => void;
  onCheckoutBegin?: (payload: OrderFormGtmPayload) => void;
  onPurchase?: (payload: OrderFormGtmPayload) => void;
}

export default function OrderFormUI({
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
  apiBaseUrl,
  apiKey,
  productId,
  orderPlacementUrl,
  maxVariantsToShow,
  maxProductsToShow,
  allowedVariants,
  channelId,
  currencyCode = 'BDT',
  onProductView,
  onAddToCart,
  onCheckoutBegin,
  onPurchase,
}: OrderFormUIProps) {
  const primaryColor = colors.primary || '#F36621';
  const textColor = colors.text || '#27272a';
  const backgroundColor = colors.background || '#f3e8ff';

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [selectedShipping, setSelectedShipping] = useState(shippingOptions[0]?.id || '');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [allProducts, setAllProducts] = useState<any[]>([]);
  const [isLoadingProduct, setIsLoadingProduct] = useState(false);
  const [selectedVariantId, setSelectedVariantId] = useState<string | number>('');
  const [selectedSize, setSelectedSize] = useState<string>('');

  // Backward-compatible fallback for previously saved content.
  const effectiveMaxVariantsToShow = maxVariantsToShow ?? maxProductsToShow;

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoadingProduct(true);
      try {
        const baseUrl = apiBaseUrl || process.env.NEXT_PUBLIC_API_BASE_URL;
        if (!baseUrl) return;
        const headers: Record<string, string> = { "Accept": "application/json" };
        if (apiKey) headers["Authorization"] = `Bearer ${apiKey}`;

        if (!productId) {
          console.warn("OrderFormUI: productId is required to fetch product data.");
          setIsLoadingProduct(false);
          return;
        }
        
        const endpoint = `${baseUrl.replace(/\/$/, '')}/products/${productId}`;
        const url = endpoint;
        const res = await fetch(url, { headers });
        const data = await res.json();
        const payload = data?.data ?? data?.product ?? data;
        const items = Array.isArray(payload) ? payload : (payload ? [payload] : []);
        setAllProducts(items);
      } catch (err) {
        console.warn("Products API failed:", err);
      } finally {
        setIsLoadingProduct(false);
      }
    };
    fetchProducts();
  }, [apiBaseUrl, apiKey, productId]);

  const effectiveProductId = productId ?? allProducts[0]?.id ?? '';
  const productData = allProducts.find(p => String(p.id) === String(effectiveProductId)) || allProducts[0];
  let rawVariants = productData?.variants || productData?.attributes || [];
  
  let filteredVariants = rawVariants;
  if (allowedVariants && allowedVariants.length > 0) {
    const allowedList = allowedVariants.map(a => (a.name || '').toLowerCase().trim()).filter(Boolean);
    if (allowedList.length > 0) {
      filteredVariants = rawVariants.filter((v: any) => {
        const { label, value } = getVariantDisplayValues(v);
        const nameStr = String(v.name || v.title || v.sku || value || '').toLowerCase().trim();
        const sizes = getSizesArray(v.sizes || productData?.sizes).map(s => s.toLowerCase().trim());
        const colors = [String(v.color || '').toLowerCase().trim(), String(v.attribute_value || '').toLowerCase().trim()].filter(Boolean);
        
        return allowedList.some(allowed => 
           nameStr === allowed || nameStr.includes(allowed) || 
           sizes.includes(allowed) || 
           colors.includes(allowed) ||
           String(label).toLowerCase().trim() === allowed
        );
      });
    }
  }

  const variants = filteredVariants;

  useEffect(() => {
    if (variants.length > 0) {
      if (!variants.find((v: any) => String(v.id) === String(selectedVariantId))) {
        setSelectedVariantId(variants[0].id);
      }
    } else {
      setSelectedVariantId('');
    }
  }, [variants, selectedVariantId]);

  const selectedVariantData = variants.find((v: any) => String(v.id) === String(selectedVariantId)) || variants[0];

  useEffect(() => {
    const availableSizes = getSizesArray(selectedVariantData?.sizes || productData?.sizes);
    if (selectedSize && !availableSizes.includes(selectedSize)) {
      setSelectedSize('');
    }
  }, [selectedVariantData, productData, selectedSize]);

  const hasFiredViewItemRef = useRef(false);
  const hasFiredCheckoutRef = useRef(false);
  const hasMountedRef = useRef(false);

  const rawTitle = title || "Stock সীমিত – আজই অর্ডার করুন!";
  const rawProductName = productData?.name || productData?.title || productName || "প্রিমিয়াম Quality Panjabi";
  const displayTitle = getLocalizedString(rawTitle);
  
  const { value: globalVariantValue } = getVariantDisplayValues(selectedVariantData);
  const displayProductName = getLocalizedString(rawProductName) + (globalVariantValue ? ` - ${globalVariantValue}` : "");
  
  const variantPrice = selectedVariantData?.price ?? selectedVariantData?.current_pricing?.unit_price ?? selectedVariantData?.current_pricing?.retail_price;
  const basePrice = productData?.price ?? productData?.current_pricing?.unit_price ?? productData?.current_pricing?.retail_price;
  const finalPrice = variantPrice ?? basePrice;
  const hasFinalPrice = finalPrice !== null && finalPrice !== undefined && String(finalPrice).trim() !== '';
  const displayProductPrice = hasFinalPrice ? (String(finalPrice).includes('৳') ? String(finalPrice) : `৳${finalPrice}`) : (productPrice || "৳1499");
  
  const displayProductImage = selectedVariantData?.image || selectedVariantData?.thumbnail || productData?.image || productData?.thumbnail_image || productData?.thumbnail || productData?.thumbnail_url || productImage;

  const selectedShippingOption = shippingOptions.find(opt => opt.id === selectedShipping) || shippingOptions[0];
  const shippingCharge = selectedShippingOption?.price || 0;
  const productPriceNum = parseFloat(String(displayProductPrice).replace(/[^\d.]/g, '') || '0');
  const subtotal = productPriceNum * quantity;
  const total = subtotal + shippingCharge;

  const buildGtmItem = (qty: number = quantity): OrderFormGtmItem => {
    const categoryName =
      typeof productData?.category === 'string'
        ? productData.category
        : (productData?.category?.name ?? '');
    return {
      item_id: String(effectiveProductId),
      item_name: getLocalizedString(rawProductName),
      item_category: getLocalizedString(categoryName),
      item_variant: getLocalizedString(globalVariantValue || '') + (selectedSize ? ` / ${selectedSize}` : ''),
      price: productPriceNum,
      currency: currencyCode,
      quantity: qty,
    };
  };

  useEffect(() => {
    if (!productData?.id || hasFiredViewItemRef.current) return;
    hasFiredViewItemRef.current = true;
    onProductView?.({
      currency: currencyCode,
      value: productPriceNum,
      items: [buildGtmItem(1)],
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productData?.id]);

  useEffect(() => {
    if (!hasMountedRef.current) {
      hasMountedRef.current = true;
      return;
    }
    if (!productData?.id) return;
    onAddToCart?.({
      currency: currencyCode,
      value: subtotal,
      items: [buildGtmItem()],
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quantity, selectedVariantId, selectedSize]);

  const handleBeginCheckout = () => {
    if (hasFiredCheckoutRef.current) return;
    if (!productData?.id) return;
    hasFiredCheckoutRef.current = true;
    onCheckoutBegin?.({
      currency: currencyCode,
      value: total,
      shipping: shippingCharge,
      items: [buildGtmItem()],
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const baseUrl = apiBaseUrl || process.env.NEXT_PUBLIC_API_BASE_URL;
    const submitUrl = orderPlacementUrl || (baseUrl ? `${baseUrl.replace(/\/$/, '')}/orders` : null);

    const trimmedName = name.trim();
    const firstSpaceIdx = trimmedName.indexOf(' ');
    const firstName = firstSpaceIdx === -1 ? trimmedName : trimmedName.slice(0, firstSpaceIdx);
    const lastName = firstSpaceIdx === -1 ? '' : trimmedName.slice(firstSpaceIdx + 1);

    const purchasableId = selectedVariantId || effectiveProductId;

    const sharedAddress = {
      first_name: firstName,
      last_name: lastName,
      phone,
      state: '',
      city: '',
      area: '',
      postcode: '',
      address,
      landmark: '',
    };

    const payload = {
      channel_id: channelId ?? 2, // 2 = WEB; 1 = POS
      amount_due: total,
      amount_paid: 0,
      amount_change: 0,
      billing_address: { ...sharedAddress, type: 'billing' },
      shipping_address: { ...sharedAddress, type: 'shipping' },
      payment: {
        intent: 'sale',
        status: 'unpaid',
        meta_data: [
          {
            provider: 'Cash on Delivery',
            type: 'cash',
            amount: String(total),
            payment_information: notes || 'Cash on Delivery',
            vouchers: [],
          },
        ],
      },
      purchasable: [
        {
          id: purchasableId,
          quantity,
          discount_should_apply: true,
          order_quantity: quantity,
          uom_id: 1,
          uom: 'pcs',
          order_uom_id: 1,
          order_uom: 'pcs',
          batch_id: null,
        },
      ],
      meta_data: {
        additional_amount_breakdown:
          shippingCharge > 0
            ? [
                {
                  key: 'additional_amount',
                  title: selectedShippingOption?.label || 'Shipping Charge',
                  amount: shippingCharge,
                },
              ]
            : [],
      },
    };

    if (submitUrl) {
      try {
        const headers: Record<string, string> = { "Content-Type": "application/json", "Accept": "application/json" };
        if (apiKey) headers["Authorization"] = `Bearer ${apiKey}`;
        const res = await fetch(submitUrl, { method: "POST", headers, body: JSON.stringify(payload) });
        if (!res.ok) throw new Error("API Submission failed");

        const json = await res.json().catch(() => null);
        const transactionId =
          json?.data?.id ?? json?.data?.order_number ?? json?.order?.id ?? json?.id ?? `ORDER_${Date.now()}`;

        onPurchase?.({
          transaction_id: String(transactionId),
          currency: currencyCode,
          value: total,
          shipping: shippingCharge,
          items: [buildGtmItem()],
        });

        setIsSubmitting(false);
        alert('Order submitted successfully!');
        setName(''); setPhone(''); setAddress(''); setNotes(''); setQuantity(1);
      } catch (err) {
        setIsSubmitting(false);
        alert('Failed to submit order. Please try again or contact support.');
      }
    } else {
      setTimeout(() => {
        setIsSubmitting(false);
        alert('Order submitted successfully! (Simulated)');
        setName(''); setPhone(''); setAddress(''); setNotes(''); setQuantity(1);
      }, 2000);
    }
  };

  return (
    <section className="py-24" style={{ backgroundColor }}>
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 flex flex-col justify-start items-center gap-8 lg:gap-16">
        <div className="self-stretch flex flex-col justify-start items-center gap-4 mb-0">
          <h1 className="text-center text-3xl md:text-5xl lg:text-6xl font-bold leading-tight lg:leading-[64px]" style={{ color: textColor }}>
            {displayTitle}
          </h1>
          {description && (
            <p className="text-center text-lg md:text-xl lg:text-2xl font-normal leading-7 mt-0" style={{ color: textColor }}>
              {description}
            </p>
          )}
        </div>

        <form onSubmit={handleSubmit} className="self-stretch rounded-2xl grid grid-cols-1 lg:grid-cols-3 overflow-hidden shadow-xl lg:shadow-none bg-white lg:bg-transparent">
          <OrderFormProductList 
            isLoadingProduct={isLoadingProduct}
            productData={productData}
            variants={variants}
            allowedVariants={allowedVariants}
            maxVariantsToShow={effectiveMaxVariantsToShow}
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

          <OrderFormCartSummary 
            isLoadingProduct={isLoadingProduct}
            displayProductName={displayProductName}
            selectedSize={selectedSize}
            quantity={quantity}
            subtotal={subtotal}
            shippingCharge={shippingCharge}
            total={total}
          />

          <OrderFormBillingFields
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
            onBeginCheckout={handleBeginCheckout}
          />
        </form>
      </div>
    </section>
  );
}
