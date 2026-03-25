import React from "react";
import { ComponentConfig } from "@puckeditor/core";
import { PuckProps } from "../../types/puck";
import { ImageUpload } from "../../ui/ImageUpload";
import GalleryGrid6UI from "../../ui/GalleryGrid6";

export const GalleryGrid6: ComponentConfig<PuckProps["GalleryGrid6"]> = {
  label: "Gallery Grid (6 Pack)",
  fields: {
    title: { type: "text", label: "Title" },
    description: { type: "textarea", label: "Description" },
    images: {
      label: "Images (Max 6)",
      type: "array",
      getItemSummary: (item: any) => item.alt || "Image",
      arrayFields: {
        src: {
          label: "Image",
          type: "custom",
          render: ({ value, onChange }: any) => (
            <ImageUpload value={value} onChange={onChange} />
          ),
        },
        alt: { type: "text", label: "Alt Text" },
      },
      defaultItemProps: {
        src: "",
        alt: "",
      },
    },
  },
  defaultProps: {
    title: "Premium Showcase",
    description: "Our finest selection of handcrafted products.",
    images: [
      { src: "https://hishabi-dev.s3.ap-south-1.amazonaws.com/RETAIL/6786196238dfda001229497e/BANNER/16d78109-11ba-411a-8db6-5777df7f70b7.webp", alt: "Showcase 1" },
      { src: "https://hishabi-dev.s3.ap-south-1.amazonaws.com/RETAIL/6786196238dfda001229497e/BANNER/060e816a-0401-443b-8c6e-526b3a0df138.webp", alt: "Showcase 2" },
      { src: "https://hishabi-dev.s3.ap-south-1.amazonaws.com/RETAIL/6786196238dfda001229497e/BANNER/39bcf414-b4a1-432a-b7e6-526b3a0df138.webp", alt: "Showcase 3" },
    ],
  },
  render: (props: any) => {
    return <GalleryGrid6UI {...props} />;
  },
};
