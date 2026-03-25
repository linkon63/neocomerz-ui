import React from "react";
import { ComponentConfig } from "@puckeditor/core";
import { PuckProps } from "../types/puck";
import { ImageUpload } from "../ui/ImageUpload";
import DesignAndFitUI from "../ui/DesignAndFit";

export const DesignAndFit: ComponentConfig<PuckProps["DesignAndFit"]> = {
  label: "Design & Fit Section",
  fields: {
    title: { label: "MAIN TITLE", type: "text" },
    subtitle: { label: "SUBTITLE", type: "textarea" },
    imageCards: {
      label: "IMAGE CARDS (3 RECOMMENDED)",
      type: "array",
      getItemSummary: (item, index) => item.title || `Card ${(index || 0) + 1}`,
      arrayFields: {
        image: {
          label: "CARD IMAGE",
          type: "custom",
          render: ({ value, onChange }) => (
            <ImageUpload value={value} onChange={onChange} />
          ),
        },
        title: { type: "text", label: "CARD TITLE" },
        description: { type: "text", label: "CARD DESCRIPTION" },
        alt: { type: "text", label: "IMAGE ALT TEXT" },
      },
    },
    detailCards: {
      label: "DETAIL CARDS (3 RECOMMENDED)",
      type: "array",
      getItemSummary: (item, index) => item.title || `Detail ${(index || 0) + 1}`,
      arrayFields: {
        title: { type: "text", label: "CARD TITLE" },
        items: {
          label: "FEATURE ITEMS",
          type: "array",
          getItemSummary: (item) => item.text || "Feature",
          arrayFields: {
            text: { type: "text", label: "FEATURE TEXT" },
          },
        },
      },
    },
    ctaText: { label: "CTA BUTTON TEXT", type: "text" },
    ctaHref: { label: "CTA BUTTON LINK", type: "text" },
    primaryColor: { label: "PRIMARY COLOR (BRAND)", type: "text" },
    textColor: { label: "TEXT COLOR", type: "text" },
    backgroundColor: { label: "BACKGROUND COLOR", type: "text" },
  },
  defaultProps: {
    title: "ইন্ডিয়ান এমব্রয়ডারি,",
    subtitle: "পাঞ্জাবি সাশ্রয় দামে - আজকের সেরা ডিল",
    imageCards: [
      {
        image: "https://hishabi-dev.s3.ap-south-1.amazonaws.com/RETAIL/6786196238dfda001229497e/BANNER/060e816a-0401-443b-8c6e-526b3a0df138.webp",
        title: "Premium Design",
        description: "Classic Indian embroidery craftsmanship.",
        alt: "Main Design Image"
      },
      {
        image: "https://hishabi-dev.s3.ap-south-1.amazonaws.com/RETAIL/6786196238dfda001229497e/BANNER/39bcf414-b4a1-432a-b7e6-526b3a0df138.webp",
        title: "Elegant Fit",
        description: "Tailored for comfort and style.",
        alt: "Overlay Design Image"
      }
    ],
    detailCards: [
      {
        title: "Design & Cut",
        items: [
          { text: "Modern Quality silhouette" },
          { text: "Clean finishing & elegant tailoring" },
          { text: "এমন ডিজাইন যা আলাদা করে নজর কাড়ে" },
        ],
      },
      {
        title: "Fit & Styling",
        items: [
          { text: "Comfortable fit – ঢিলাও না, আঁটসাঁটও না" },
          { text: "Casual, festive বা semi-formal—সব জায়গায় মানানসই" },
          { text: "Dupatta ও dress balance perfectly matched" },
        ],
      },
      {
        title: "Color & Variations",
        items: [
          { text: "Trend-based colour selection" },
          { text: "Limited colour runs (স্টক শেষ হলে আর আসবে না)" },
        ],
      },
    ],
    ctaText: "এখনই অর্ডার করুন",
    ctaHref: "#order-form",
    primaryColor: "#F36621",
    textColor: "#27272a",
    backgroundColor: "#f3f4f6",
  },
  render: (props) => (
    <DesignAndFitUI
      title={props.title}
      subtitle={props.subtitle}
      imageCards={props.imageCards || []}
      detailCards={props.detailCards || []}
      ctaButton={{
        text: props.ctaText || "এখনই অর্ডার করুন",
        href: props.ctaHref || "#order-form"
      }}
      colors={{
        primary: props.primaryColor,
        text: props.textColor,
        background: props.backgroundColor
      }}
    />
  ),
};
