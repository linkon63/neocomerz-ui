import React from "react";
import { ComponentConfig } from "@puckeditor/core";
import { PuckProps } from "../../types/puck";
import { ImageUpload } from "../../ui/ImageUpload";
import GalleryColUI from "../../ui/GalleryCol";

export const GalleryCol: ComponentConfig<PuckProps["GalleryCol"]> = {
  label: "Gallery Column",
  fields: {
    title: { type: "text", label: "Title" },
    description: { type: "textarea", label: "Description" },
    images: {
      label: "Images (Max 4)",
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
    title: "New Arrivals",
    description: "Discover our latest premium products.",
    images: [
      { src: "https://hishabi-dev.s3.ap-south-1.amazonaws.com/RETAIL/6786196238dfda001229497e/BANNER/16d78109-11ba-411a-8db6-5777df7f70b7.webp", alt: "Arrival 1" },
      { src: "https://hishabi-dev.s3.ap-south-1.amazonaws.com/RETAIL/6786196238dfda001229497e/BANNER/060e816a-0401-443b-8c6e-526b3a0df138.webp", alt: "Arrival 2" },
    ],
  },
  render: (props: any) => {
    return <GalleryColUI {...props} />;
  },
};
