import React from "react";
import { ComponentConfig } from "@puckeditor/core";
import { PuckProps } from "../types/puck";
import { ImageUpload } from "../ui/ImageUpload";
import InlineHeroUI from "../ui/InlineHero";

export const InlineHero: ComponentConfig<PuckProps["InlineHero"]> = {
    fields: {
        backgroundImage: {
            label: "Background Image",
            type: "custom",
            render: ({ value, onChange }) => (
                <ImageUpload value={value} onChange={onChange} />
            )
        },
        backgroundImageAlt: { label: "Background Alt Text", type: "text" },
        logoSrc: {
            label: "Logo Image",
            type: "custom",
            render: ({ value, onChange }) => (
                <ImageUpload value={value} onChange={onChange} />
            )
        },
        logoAlt: { label: "Logo Alt Text", type: "text" },
        titlePrimary: { label: "Primary Title", type: "text" },
        titleSecondary: { label: "Secondary Title", type: "text" },
        description: { label: "Description Text", type: "textarea" },
        ctaText: { label: "CTA Button Text", type: "text" },
        ctaHref: { label: "CTA Button Link", type: "text" },
        primaryColor: { label: "Primary Title Color", type: "text" },
        secondaryColor: { label: "Secondary Title & Button BG Color", type: "text" },
        textColor: { label: "Description Text Color", type: "text" },
    },
    defaultProps: {
    logoSrc: "https://hishabi-dev.s3.ap-south-1.amazonaws.com/RETAIL/6786196238dfda001229497e/LOGO/6ac26c0a-0f81-45af-90d2-432a5ec21389.png",
    backgroundImage: "https://hishabi-dev.s3.ap-south-1.amazonaws.com/RETAIL/6786196238dfda001229497e/BANNER/16d78109-11ba-411a-8db6-5777df7f70b7.webp",
    logoAlt: "NeoComerz Logo",
        titlePrimary: "প্রিমিয়াম",
        titleSecondary: "Pakistani Dress",
        description: "সেই ডিজাইন—যেটা পরলে আলাদা করে কিছু বলার দরকার পড়ে না. ফ্যাশন-লাভারদের নতুন obsession",
        ctaText: "এখনই অর্ডার করুন",
        ctaHref: "#order",
        primaryColor: "#27272a",
        secondaryColor: "#5b21b6",
        textColor: "#27272a",
    },
    render: (props) => (
        <InlineHeroUI
            backgroundImage={props.backgroundImage}
            backgroundImageAlt={props.backgroundImageAlt}
            logoSrc={props.logoSrc}
            logoAlt={props.logoAlt}
            titlePrimary={props.titlePrimary}
            titleSecondary={props.titleSecondary}
            description={props.description}
            ctaText={props.ctaText}
            ctaHref={props.ctaHref}
            theme={{
                primaryColor: props.primaryColor,
                secondaryColor: props.secondaryColor,
                textColor: props.textColor,
            }}
        />
    ),
};
