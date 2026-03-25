import React from 'react';

export interface HeroProps {
  backgroundImage?: string;
  logo?: {
    src?: string;
    alt?: string;
    width?: number;
    height?: number;
  };
  title?: string;
  titleSize?: string;
  subtitle?: string;
  subtitleSize?: string;
  discountTag?: string;
  discountTagSize?: string;
  cta?: {
    text?: string;
    href?: string;
    icon?: React.ReactNode;
  };
  secondaryCta?: {
    text?: string;
    href?: string;
    icon?: React.ReactNode;
  };
  settings?: {
    overlayOpacity?: number;
    overlayColor?: string;
    textAlignment?: 'left' | 'center' | 'right';
    contentAlignment?: 'left' | 'center' | 'right';
  };
  theme?: {
    primaryColor?: string;
    textColor?: string;
  };
}

export interface LayeredHeroProps {
  logo?: {
    src?: string;
    alt?: string;
    width?: number;
    height?: number;
  };
  mainImage?: string;
  mainImageAlt?: string;
  overlayImage?: string;
  overlayImageAlt?: string;
  shadowImage?: string;
  shadowImageAlt?: string;
  watermarkText?: string;
  titlePrimary?: string;
  titleSecondary?: string;
  description?: string;
  productName?: string;
  originalPrice?: string;
  discountPrice?: string;
  priceSuffix?: string;
  cta?: {
    text?: string;
    href?: string;
    icon?: React.ReactNode;
  };
  settings?: {
    showWatermark?: boolean;
    showShadow?: boolean;
    showPolaroid?: boolean;
    showCtaIcon?: boolean;
  };
  theme?: {
    primaryColor?: string;
    textColor?: string;
    descriptionColor?: string;
  };
}

export interface InlineHeroProps {
  backgroundImage?: string;
  backgroundImageAlt?: string;
  logoSrc?: string;
  logoAlt?: string;
  logoWidth?: number;
  logoHeight?: number;
  titlePrimary?: string;
  titleSecondary?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  theme?: {
    primaryColor?: string;
    secondaryColor?: string;
    textColor?: string;
  };
}

export interface FeatureItem {
  text: string;
}

export interface FeatureImage {
  src: string;
  alt: string;
}

export interface FeaturesProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  features?: FeatureItem[];
  images?: FeatureImage[];
  ctaButton?: {
    text: string;
    href: string;
    icon?: React.ReactNode;
  };
  tagline?: string;
  colors?: {
    primary?: string;
    text?: string;
    background?: string;
  };
  whatsappNumber?: string;
}

export interface DesignAndFitProps {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  imageCards?: {
    image?: string;
    title?: string;
    description?: string;
    alt?: string;
  }[];
  detailCards?: {
    title?: string;
    items?: FeatureItem[];
  }[];
  ctaButton?: {
    text: string;
    href: string;
    icon?: React.ReactNode;
  };
  colors?: {
    primary?: string;
    text?: string;
    background?: string;
  };
}

export interface GalleryProps {
  title?: string;
  description?: string;
  images?: { src: string; alt?: string }[];
}

export interface OrderFormProps {
  apiBaseUrl?: string;
  productId?: string | number;
  title?: string;
  description?: string;
  submitButtonText?: string;
  productImage?: string;
  productImageAlt?: string;
  productName?: string;
  productPrice?: string;
  shippingOptions?: {
    id?: string;
    label?: string;
    price?: number;
  }[];
  namePlaceholder?: string;
  phonePlaceholder?: string;
  addressPlaceholder?: string;
  notesPlaceholder?: string;
  cashOnDeliveryText?: string;
  primaryColor?: string;
  textColor?: string;
  backgroundColor?: string;
}

export interface SizeChartProps {
  title?: string;
  description?: string;
  sizeData?: Array<{
    measurement?: string;
    description?: string;
    m?: string;
    l?: string;
    xl?: string;
    xxl?: string;
  }>;
  chartImage?: string;
  chartImageAlt?: string;
  whatsappText?: string;
  whatsappNumber?: string;
  contactText?: string;
  returnPolicy?: string;
  colors?: {
    primary?: string;
    text?: string;
    background?: string;
  };
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  icon?: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary';
}

export interface CheckListItemProps {
  children: React.ReactNode;
  iconClassName?: string;
  textClassName?: string;
}

export interface HelplineProps {
  whatsappNumber?: string;
}

export interface SectionHeaderProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  style?: React.CSSProperties;
}
