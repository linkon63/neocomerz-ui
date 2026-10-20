# Using the multiple-product Order Form

The public `OrderForm` component supports an optional multiple-product mode. Each customer selection has a checkbox, variant/options, and quantity. Only checked selections contribute to the cart, payable total, and `purchasable` request array.

## Package usage

```tsx
import { OrderForm } from "neocomerz-storefront-ui";

<OrderForm
  productSelectionMode="multiple"
  apiBaseUrl="https://your-tenant-api.example"
  products={[
    { productId: 101 },
    { productId: 205, productName: "Premium Scarf" },
  ]}
  shippingOptions={[
    { id: "city", label: "Inside city", price: 80 },
    { id: "outside", label: "Outside city", price: 130 },
  ]}
  confirmationSettings={{ version: "v1", title: "Thank you for your order" }}
/>;
```

Replace the example URL and product IDs with your own. An explicit `productSelectionMode` wins; if it is omitted, supplying `products` enables multiple-product mode. Without either, the existing `productId` flow remains active.

## In pagebuilder.neocomerz

1. Select **Commerce → Order Form Component**.
2. Under **Product Mode**, choose **Multiple products**.
3. Check the products to make available on the landing page.
4. Expand each configured product to set its variant filter, display name, fallback image, and variant display limit.
5. Use Move up/Move down to arrange products. Save the page normally.

The builder picker currently searches the catalog entries returned by the existing products proxy (up to 100 requested entries). It uses the builder session for catalog access. The rendered Order Form uses its configured tenant API URL to load the chosen product details.

## Customer behavior

- Every product starts unchecked. Setting a quantity alone does not select a product.
- Checking a product includes it in the cart. Missing required variant/options are shown as errors and block submission.
- Unchecking removes it from totals and the request while keeping draft choices and quantity.
- Removing a cart row unchecks its selection.
- **Add another variant** creates another unchecked row for that product.
- Duplicate checked selections are flagged and cannot be submitted; edit the existing row's quantity instead.
- Delivery is charged once when at least one product is checked. With no checked products, all totals are zero and submission is disabled.
- Checked quantities must be positive integers and must respect stock limits when the API supplies them.
- Checkout submits once for the selected lines. The confirmation modal and invoice use the confirmed order response where supported, otherwise the submitted selection snapshot.

## API requirements

Product detail responses can use `data`, `product`, or a direct product object. Product variants need actual purchasable identifiers. The order request follows the existing checkout structure, with an entry per selected line in `purchasable`.

Size/option records are supported when they explicitly supply `purchasable_id` or `variant_id`. Bare size labels and generic option `id` values are not assumed to be SKU IDs. Such unresolved options show an error and cannot be ordered in the new mode. Their mapping needs confirmation from the tenant API.

The existing checkout implementation uses a multiple-entry `purchasable` array. No live order was placed to verify backend acceptance, atomicity, inventory behavior, or idempotency. The server remains responsible for validating prices, inventory, and totals.

If a response is successful but has no usable order identifier, or a network/server failure makes the outcome uncertain, the component preserves the cart and asks the customer to contact the store before retrying. A successful order is never assigned a fabricated ID.

## Implementation

| File | Responsibility |
| --- | --- |
| `src/components/OrderForm/OrderForm.tsx` | Chooses single or multiple mode. |
| `src/components/OrderForm/SingleProductOrderForm.tsx` | Preserves the existing single-product implementation. |
| `src/components/OrderForm/MultiProductOrderForm.tsx` | Renders product choices, selected cart, shared billing fields, and confirmation. |
| `src/components/OrderForm/MultiProductCard.tsx` | Checkbox, options, and quantity for one selection. |
| `src/components/OrderForm/multi-product.ts` | Product normalization, option mapping, prices, and shared helpers. |
| `src/hooks/useOrderFormProducts.ts` | Product detail loading with cancellation and bounded concurrency. |
| `src/hooks/useOrderFormCart.ts` | Selection drafts, checked lines, validation, and subtotal. |
| `src/hooks/useOrderFormSubmit.ts` | Order payload, submission, success snapshot, and purchase callbacks. |
| `src/constants/messages.ts` | Messages for the new flow. |

Existing public single-product list and cart-summary prop types remain available. Each Order Form has independent state. The cart is not persisted across browser refreshes or saved with landing-page configuration.

## Build status

On 20 October 2026, `pnpm build` passed in both `neocomerz-ui` and `pagebuilder.neocomerz`, including their TypeScript compilation. The builder still reports its existing multiple-lockfile workspace-root warning. Browser interactions and live order submission have not been tested. No changes were made to `storefront-next`.
