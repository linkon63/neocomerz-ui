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
    title: "Premium Collection",
    description: "A specialized 6-pack grid for your finest products.",
    images: [],
  },
  render: (props: any) => {
    return <GalleryGrid6UI {...props} />;
  },
};
