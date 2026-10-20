"use client";

import type { OrderFormProps } from "../../types/components";
import SingleProductOrderForm from "./SingleProductOrderForm";
import MultiProductOrderForm from "./MultiProductOrderForm";

export default function OrderForm(props: OrderFormProps) {
  const multiple = props.productSelectionMode
    ? props.productSelectionMode === "multiple"
    : props.products !== undefined;

  return multiple ? <MultiProductOrderForm {...props} /> : <SingleProductOrderForm {...props} />;
}
