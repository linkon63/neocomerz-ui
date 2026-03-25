import React from "react";
import { ComponentConfig } from "@puckeditor/core";
import { PuckProps } from "../types/puck";
import { ImageUpload } from "../ui/ImageUpload";
import HeroUI from "../ui/Hero";

export const Hero: ComponentConfig<PuckProps["Hero"]> = {
  fields: {
    backgroundImage: {
      type: "custom",
      label: "BACKGROUND IMAGE",
      render: ({ value, onChange }) => (
        <ImageUpload value={value} onChange={onChange} />
      )
    },
    logoSrc: {
      type: "custom",
      label: "LOGO SRC",
      render: ({ value, onChange }) => (
        <ImageUpload value={value} onChange={onChange} />
      )
    },
    logoAlt: { type: "text", label: "LOGO ALT" },
    logoWidth: { type: "number", label: "LOGO WIDTH" },
    logoHeight: { type: "number", label: "LOGO HEIGHT" },
    title: { type: "text", label: "TITLE" },
    titleSize: { type: "text", label: "TITLE SIZE" },
    subtitle: { type: "text", label: "SUBTITLE" },
    subtitleSize: { type: "text", label: "SUBTITLE SIZE" },
    discountTag: { type: "text", label: "DISCOUNT TAG" },
    discountTagSize: { type: "text", label: "DISCOUNT TAG SIZE" },
    ctaText: { type: "text", label: "CTA TEXT" },
    ctaHref: { type: "text", label: "CTA HREF" },
    secondaryCtaText: { type: "text", label: "SECONDARY CTA TEXT" },
    secondaryCtaHref: { type: "text", label: "SECONDARY CTA HREF" },
    overlayOpacity: { type: "number", label: "OVERLAY OPACITY" },
    overlayColor: { type: "text", label: "OVERLAY COLOR" },
    textAlignment: {
      type: "radio",
      options: [
        { label: "Left", value: "left" },
        { label: "Center", value: "center" },
        { label: "Right", value: "right" },
      ],
    },
    contentAlignment: {
      type: "radio",
      options: [
        { label: "Left", value: "left" },
        { label: "Center", value: "center" },
        { label: "Right", value: "right" },
      ],
    },
    primaryColor: { type: "text" },
    textColor: { type: "text" },
  },
  defaultProps: {
    title: "STYLISH & COMFORTABLE",
    subtitle: "SUMMER COLLECTION",
    discountTag: "UP TO 50% OFF",
    ctaText: "SHOP NOW",
    ctaHref: "#",
    logoSrc: "https://hishabi-dev.s3.ap-south-1.amazonaws.com/RETAIL/6786196238dfda001229497e/LOGO/6ac26c0a-0f81-45af-90d2-432a5ec21389.png",
    backgroundImage: "https://hishabi-dev.s3.ap-south-1.amazonaws.com/RETAIL/6786196238dfda001229497e/BANNER/060e816a-0401-443b-8c6e-526b3a0df138.webp",
    logoAlt: "Logo",
    logoWidth: 150,
    logoHeight: 50,
    overlayOpacity: 10,
    overlayColor: "#000000",
    textAlignment: "center",
    contentAlignment: "right",
    primaryColor: "#F36621",
    textColor: "#222F28",
  },
  render: (props) => (
      <HeroUI 
        {...props} 
        logo={{ src: props.logoSrc, alt: props.logoAlt, width: props.logoWidth, height: props.logoHeight }}
        cta={{ text: props.ctaText, href: props.ctaHref }}
        secondaryCta={props.secondaryCtaText ? { text: props.secondaryCtaText, href: props.secondaryCtaHref } : undefined}
        settings={{ 
            overlayOpacity: props.overlayOpacity, 
            overlayColor: props.overlayColor,
            textAlignment: props.textAlignment,
            contentAlignment: props.contentAlignment
        }}
        theme={{ primaryColor: props.primaryColor, textColor: props.textColor }}
      />
  ),
};
