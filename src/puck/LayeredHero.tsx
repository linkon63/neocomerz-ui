import React from "react";
import { ComponentConfig } from "@puckeditor/core";
import { PuckProps } from "../types/puck";
import { ImageUpload } from "../ui/ImageUpload";
import LayeredHeroUI from "../ui/LayeredHero";

export const LayeredHero: ComponentConfig<PuckProps["LayeredHero"]> = {
  label: "Layered Hero",
  fields: {
    mainImage: {
      label: "Main Hero Image",
      type: "custom",
      render: ({ value, onChange }) => (
        <ImageUpload value={value} onChange={onChange} />
      )
    },
    logoSrc: {
      label: "Logo Image",
      type: "custom",
      render: ({ value, onChange }) => (
        <ImageUpload value={value} onChange={onChange} />
      )
    },
    logoAlt: { label: "Logo Alt Text", type: "text" },
    overlayImage: {
      label: "Polaroid Overlay Image",
      type: "custom",
      render: ({ value, onChange }) => (
        <ImageUpload value={value} onChange={onChange} />
      )
    },
    shadowImage: {
      label: "Left Shadow Image",
      type: "custom",
      render: ({ value, onChange }) => (
        <ImageUpload value={value} onChange={onChange} />
      )
    },
    watermarkText: { label: "Watermark Text", type: "text" },
    titlePrimary: { label: "Primary Title (Yellow)", type: "text" },
    titleSecondary: { label: "Secondary Title (Black)", type: "text" },
    description: { label: "Description Text", type: "textarea" },
    productName: { label: "Product Name", type: "text" },
    originalPrice: { label: "Original Price", type: "text" },
    discountPrice: { label: "Discount Price", type: "text" },
    ctaText: { label: "Main CTA Text", type: "text" },
    ctaHref: { label: "Main CTA Link", type: "text" },
    showWatermark: { label: "Show Watermark", type: "radio", options: [{ label: "Yes", value: true }, { label: "No", value: false }] },
    showShadow: { label: "Show Left Shadow", type: "radio", options: [{ label: "Yes", value: true }, { label: "No", value: false }] },
    showPolaroid: { label: "Show Polaroid", type: "radio", options: [{ label: "Yes", value: true }, { label: "No", value: false }] },
    primaryColor: { label: "Primary Theme Color", type: "text" },
    textColor: { label: "Text Theme Color", type: "text" },
    descriptionColor: { label: "Description Color", type: "text" },
    priceSuffix: { label: "Price Suffix Text", type: "text" },
    showCtaIcon: { label: "Show CTA Icon", type: "radio", options: [{ label: "Yes", value: true }, { label: "No", value: false }] },
  },
  defaultProps: {
    mainImage: "https://hishabi-dev.s3.ap-south-1.amazonaws.com/RETAIL/6786196238dfda001229497e/BANNER/fbfb8109-11ba-411a-8db6-5777df7f70b7.webp",
    logoSrc: "https://hishabi-dev.s3.ap-south-1.amazonaws.com/RETAIL/6786196238dfda001229497e/LOGO/6ac26c0a-0f81-45af-90d2-432a5ec21389.png",
    overlayImage: "https://hishabi-dev.s3.ap-south-1.amazonaws.com/RETAIL/6786196238dfda001229497e/BANNER/39bcf414-b4a1-432a-b7e6-526b3a0df138.webp",
    shadowImage: "https://hishabi-dev.s3.ap-south-1.amazonaws.com/RETAIL/6786196238dfda001229497e/BANNER/060e816a-0401-443b-8c6e-526b3a0df138.webp",
    logoAlt: "Logo image",
    watermarkText: "Shirt",
    titlePrimary: "এই শীতের",
    titleSecondary: "স্টাইল গেমে আনুন নতুনত্ব",
    description: "শীত এলেই শুরু হয় স্টাইলের নতুন অধ্যায়। এত কম দামে প্রিমিয়াম কোয়ালিটি Sweatshirt and Pant। এই শীতের স্টাইল গেমে আনুন নতুনত্ব। বাজেট ফ্রেন্ডলি প্রাইসে পাচ্ছেন আমাদের এক্সক্লুসিভ প্রিমিয়াম Sweatshirt Collection - যা আপনার লুককে করবে আরো স্টাইলিশ ও আকর্ষনীয়।",
    productName: "Sweat Shirt Set",
    originalPrice: "৳1427",
    discountPrice: "৳999",
    ctaText: "অর্ডার করুন (৩০% ছাড়ে)",
    ctaHref: "#order",
    showWatermark: true,
    showShadow: true,
    showPolaroid: true,
    primaryColor: "#FBBF24",
    textColor: "#222F28",
    descriptionColor: "#6B6B6B",
    priceSuffix: "only",
    showCtaIcon: true,
  },
  render: (props) => (
    <LayeredHeroUI
      mainImage={props.mainImage}
      overlayImage={props.overlayImage}
      shadowImage={props.shadowImage}
      logo={{
        src: props.logoSrc,
        alt: props.logoAlt,
      }}
      watermarkText={props.watermarkText}
      titlePrimary={props.titlePrimary}
      titleSecondary={props.titleSecondary}
      description={props.description}
      productName={props.productName}
      originalPrice={props.originalPrice}
      discountPrice={props.discountPrice}
      priceSuffix={props.priceSuffix}
      cta={{
        text: props.ctaText,
        href: props.ctaHref,
      }}
      settings={{
        showWatermark: props.showWatermark,
        showShadow: props.showShadow,
        showPolaroid: props.showPolaroid,
        showCtaIcon: props.showCtaIcon,
      }}
      theme={{
        primaryColor: props.primaryColor,
        textColor: props.textColor,
        descriptionColor: props.descriptionColor,
      }}
    />
  ),
};
