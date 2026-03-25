import React from "react";
import { ComponentConfig } from "@puckeditor/core";
import { PuckProps } from "../../types/puck";
import { ImageUpload } from "../../ui/ImageUpload";
import GalleryGridUI from "../../ui/GalleryGrid";

export const GalleryGrid: ComponentConfig<PuckProps["GalleryGrid"]> = {
  label: "Gallery Grid (9 Pack)",
  fields: {
    title: { type: "text", label: "Title" },
    description: { type: "textarea", label: "Description" },
    images: {
      label: "Images (Max 9)",
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
    title: "Curated Collection",
    description: "Explore our visually stunning grid of premium products and lifestyle shots.",
    images: [],
  },
  render: (props: any) => {
    return <GalleryGridUI {...props} />;
  },
};
