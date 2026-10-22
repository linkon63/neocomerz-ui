import type { OrderFormGtmItem } from "../types/components";
import { getLocalizedString, getVariantDisplayValues } from "../components/OrderForm/helpers";
import { amount, priceOf, record, type ProductRecord } from "../components/OrderForm/multi-product";

export function getSingleProductDisplay(
  product: ProductRecord,
  variant: ProductRecord,
  fallbackName: string,
  fallbackPrice: string,
  fallbackImage: string
) {
  const rawProductName =
    getLocalizedString(product.name || product.title) ||
    fallbackName ||
    "premium Quality Panjabi";
  const variantValue = getVariantDisplayValues(variant).value;
  const finalPrice = priceOf(variant) ?? priceOf(product);
  const displayProductPrice = finalPrice !== undefined
    ? String(finalPrice).includes("৳") ? String(finalPrice) : `৳${finalPrice}`
    : fallbackPrice || "৳1499";
  const displayProductImage = String(
    variant.image ||
    variant.thumbnail ||
    product.image ||
    product.thumbnail_image ||
    product.thumbnail ||
    product.thumbnail_url ||
    fallbackImage ||
    ""
  );

  return {
    rawProductName,
    variantValue,
    displayProductName: rawProductName + (variantValue ? ` - ${variantValue}` : ""),
    displayProductPrice,
    displayProductImage,
    productPrice: amount(displayProductPrice) ?? 0,
  };
}

export function createSingleProductGtmItem(
  product: ProductRecord,
  productId: string,
  productName: string,
  variantValue: string,
  selectedSize: string,
  price: number,
  currency: string,
  quantity: number
): OrderFormGtmItem {
  const category = product.category;
  const categoryName = typeof category === "string"
    ? category
    : getLocalizedString(record(category).name);

  return {
    item_id: productId,
    item_name: getLocalizedString(productName),
    item_category: getLocalizedString(categoryName),
    item_variant: variantValue + (selectedSize ? ` / ${selectedSize}` : ""),
    price,
    currency,
    quantity,
  };
}
