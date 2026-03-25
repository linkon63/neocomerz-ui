import React from "react";
import { ComponentConfig } from "@puckeditor/core";
import { PuckProps } from "../types/puck";
import { ImageUpload } from "../ui/ImageUpload";
import FeaturesUI from "../ui/Features";

export const Features: ComponentConfig<PuckProps["Features"]> = {
  fields: {
    title: { type: "text" },
    description: { type: "textarea" },
    tagline: { type: "text" },
    features: {
      type: "array",
      getItemSummary: (item) => item.text || "Feature",
      arrayFields: {
        text: { type: "text" },
      },
    },
    images: {
      type: "array",
      getItemSummary: (item) => item.alt || "Image",
      arrayFields: {
        src: {
          type: "custom",
          render: ({ value, onChange }) => (
            <ImageUpload value={value} onChange={onChange} />
          ),
        },
        alt: { type: "text" },
      },
    },
    ctaText: { type: "text" },
    ctaHref: { type: "text" },
    primaryColor: { type: "text" },
    textColor: { type: "text" },
    backgroundColor: { type: "text" },
    whatsappNumber: { type: "text" },
  },
  defaultProps: {
    title: "কেন আমাদের পাঞ্জাবি সেরা?",
    description: "আমাদের পাঞ্জাবিগুলো উন্নতমানের ফেব্রিক এবং নিখুঁত সেলাই দিয়ে তৈরি।",
    tagline: "এটা শুধু একটা ড্রেস না—এটা এখনকার ফ্যাশন ট্রেনের অংশ।",
    features: [
      { text: "100% Cotton Premium Fabric" },
      { text: "Exclusive Embroidery Work" },
      { text: "Hand-Crafted Details" },
      { text: "Perfect Fit for Every Occasion" },
    ],
    images: [
      { src: "https://hishabi-dev.s3.ap-south-1.amazonaws.com/RETAIL/6786196238dfda001229497e/BANNER/060e816a-0401-443b-8c6e-526b3a0df138.webp", alt: "Feature 1" },
      { src: "https://hishabi-dev.s3.ap-south-1.amazonaws.com/RETAIL/6786196238dfda001229497e/BANNER/39bcf414-b4a1-432a-b7e6-526b3a0df138.webp", alt: "Feature 2" },
    ],
    ctaText: "এখনই অর্ডার করুন",
    ctaHref: "#order",
    primaryColor: "#F36621",
    textColor: "#222F28",
    backgroundColor: "#ffffff",
    whatsappNumber: "+880 1712-508063",
  },
  render: (props) => (
    <FeaturesUI
      {...props}
      ctaButton={{ text: props.ctaText || "", href: props.ctaHref || "" }}
      colors={{ primary: props.primaryColor, text: props.textColor, background: props.backgroundColor }}
    />
  ),
};
