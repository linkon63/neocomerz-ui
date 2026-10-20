import { useEffect, useState } from "react";
import type { OrderFormProductConfig } from "../types/components";
import { ORDER_FORM_MESSAGES as M } from "../constants/messages";
import { extractProduct, normalizeProducts, productDetailUrl, type ProductState } from "../components/OrderForm/multi-product";

export function useOrderFormProducts(products: OrderFormProductConfig[], apiBaseUrl?: string, apiKey?: string, productApiBaseUrl?: string) {
  const idsKey = JSON.stringify(normalizeProducts(products).map((p) => String(p.productId)));
  const baseUrl = apiBaseUrl ?? process.env["NEXT_PUBLIC_API_BASE_URL"] ?? "";
  const requestKey = JSON.stringify([baseUrl, productApiBaseUrl, apiKey, idsKey]);
  const [revision, setRevision] = useState(0);
  const [result, setResult] = useState<{ key: string; items: Record<string, ProductState> }>({ key: "", items: {} });

  useEffect(() => {
    const controller = new AbortController();
    const ids = JSON.parse(idsKey) as string[];
    setResult({ key: requestKey, items: Object.fromEntries(ids.map((id) => [id, { loading: true }])) });
    let next = 0;
    const worker = async () => {
      while (next < ids.length && !controller.signal.aborted) {
        const id = ids[next++];
        let state: ProductState = { loading: false, error: M.loadFailed };
        const url = productDetailUrl(id, baseUrl, productApiBaseUrl);
        if (url) {
          try {
            const headers: Record<string, string> = { Accept: "application/json" };
            if (apiKey) headers.Authorization = `Bearer ${apiKey}`;
            const response = await fetch(url, { headers, signal: controller.signal });
            const product = extractProduct(await response.json(), id);
            if (response.status === 200 && String(product.id) === id) state = { loading: false, data: product };
          } catch {}
        }
        if (!controller.signal.aborted) setResult((previous) => ({ key: requestKey, items: { ...previous.items, [id]: state } }));
      }
    };
    void Promise.all(Array.from({ length: Math.min(4, ids.length) }, worker));
    return () => controller.abort();
  }, [idsKey, baseUrl, productApiBaseUrl, apiKey, requestKey, revision]);

  return { productsById: result.key === requestKey ? result.items : {}, retry: () => setRevision((v) => v + 1) };
}
