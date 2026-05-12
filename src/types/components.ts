// =============================================================================
// Central Component Types
// Single source of truth for all component prop types in neocomerz-storefront-ui.
// Import from here — never declare inline interfaces in component files.
// =============================================================================

import type React from "react";

// ─── Shared Primitives ────────────────────────────────────────────────────────

export type ColorTheme = {
  primary?: string;
  text?: string;
  background?: string;
};

export type ImageItem = {
  src: string;
  alt?: string;
};

export type CtaButton = {
  text?: string;
  href?: string;
};

// ─── Button ──────────────────────────────────────────────────────────────────

export type PrimaryButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  icon?: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
};

/** Alias kept for backward-compat with files that import ButtonProps. */
export type ButtonProps = PrimaryButtonProps;

// ─── CheckListItem ───────────────────────────────────────────────────────────

export type CheckListItemProps = {
  children: React.ReactNode;
  iconClassName?: string;
  textClassName?: string;
  className?: string;
};

// ─── SectionHeader ───────────────────────────────────────────────────────────

export type SectionHeaderProps = {
  title: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
};

// ─── Helpline ────────────────────────────────────────────────────────────────

export type HelplineProps = {
  whatsappNumber?: string;
};

// ─── Hero ────────────────────────────────────────────────────────────────────

export type HeroProps = {
  backgroundImage?: string;
  // Flat Puck builder props:
  logoSrc?: string;
  logoAlt?: string;
  logoWidth?: number;
  logoHeight?: number;
  title?: string;
  titleSize?: string;
  subtitle?: string;
  subtitleSize?: string;
  discountTag?: string;
  discountTagSize?: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  overlayOpacity?: number;
  overlayColor?: string;
  textAlignment?: 'left' | 'center' | 'right';
  contentAlignment?: 'left' | 'center' | 'right';
  primaryColor?: string;
  textColor?: string;
  // Nested object API used by versioned (v0–v5) components:
  logo?: { src?: string; alt?: string; width?: number; height?: number };
  cta?: { text?: string; href?: string; icon?: React.ReactNode };
  secondaryCta?: { text?: string; href?: string; icon?: React.ReactNode };
  settings?: {
    overlayOpacity?: number;
    overlayColor?: string;
    textAlignment?: 'left' | 'center' | 'right';
    contentAlignment?: 'left' | 'center' | 'right';
  };
  theme?: { primaryColor?: string; textColor?: string };
};

export type Hero2Props = {
  backgroundImage?: string;
  logoSrc?: string;
  logoAlt?: string;
  titlePart1?: string;
  titlePart2?: string;
  titlePart3?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
};

export type Hero3Props = {
  leftLeafImage?: string;
  logoSrc?: string;
  logoAlt?: string;
  titleLine1?: string;
  titleLine2?: string;
  description?: string;
  priceLabel?: string;
  price?: string;
  ctaText?: string;
  ctaHref?: string;
  phoneNumber?: string;
  centerImage?: string;
  centerImageAlt?: string;
  badgeImage?: string;
  badgeImageAlt?: string;
  rightLeafImage?: string;
};

export type Hero4Props = {
  leftLeafImage?: string;
  rightLeafImage?: string;
  titleLine1?: string;
  titleLine2?: string;
  titleLine3?: string;
  mangoBannerImage?: string;
  mangoCircleImage?: string;
  badgeTextLine1?: string;
  badgeTextLine2?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  phoneNumber?: string;
};

export type CircleHeroProps = {
  logoSrc?: string;
  logoAlt?: string;
  logoWidth?: number;
  logoHeight?: number;
  productImage?: string;
  productImageAlt?: string;
  badge?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  originalPrice?: string;
  discountPrice?: string;
  ctaText?: string;
  ctaHref?: string;
  trustBadges?: string[];
  backgroundColor?: string;
  primaryColor?: string;
  textColor?: string;
  ringColor?: string;
};

// ─── LayeredHero ─────────────────────────────────────────────────────────────

export type LayeredHeroProps = {
  mainImage?: string;
  mainImageAlt?: string;
  overlayImage?: string;
  overlayImageAlt?: string;
  shadowImage?: string;
  shadowImageAlt?: string;
  // Flat Puck builder props:
  logoSrc?: string;
  logoAlt?: string;
  logoWidth?: number;
  logoHeight?: number;
  primaryColor?: string;
  textColor?: string;
  descriptionColor?: string;
  watermarkText?: string;
  titlePrimary?: string;
  titleSecondary?: string;
  description?: string;
  productName?: string;
  originalPrice?: string;
  discountPrice?: string;
  priceSuffix?: string;
  ctaText?: string;
  ctaHref?: string;
  showWatermark?: boolean;
  showShadow?: boolean;
  showPolaroid?: boolean;
  showCtaIcon?: boolean;
  // Nested object API used by versioned (v0–v5) components:
  logo?: { src?: string; alt?: string; width?: number; height?: number };
  cta?: { text?: string; href?: string; icon?: React.ReactNode };
  secondaryCta?: { text?: string; href?: string; icon?: React.ReactNode };
  settings?: {
    showWatermark?: boolean;
    showShadow?: boolean;
    showPolaroid?: boolean;
    showCtaIcon?: boolean;
  };
  theme?: { primaryColor?: string; textColor?: string; descriptionColor?: string };
};

// ─── InlineHero ──────────────────────────────────────────────────────────────

export type InlineHeroProps = {
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
  primaryColor?: string;
  secondaryColor?: string;
  textColor?: string;
  /** Nested theme object used by versioned components. */
  theme?: {
    primaryColor?: string;
    secondaryColor?: string;
    textColor?: string;
  };
};

// ─── Features ────────────────────────────────────────────────────────────────

export type FeatureItem = { text: string };

export type FeaturesProps = {
  version?: "v1" | "v2" | "v3" | "v4" | "v5";
  title?: string;
  description?: string;
  features?: FeatureItem[];
  images?: ImageItem[];
  ctaText?: string;
  ctaHref?: string;
  /** Object-style CTA — used by versioned components. */
  ctaButton?: CtaButton;
  tagline?: string;
  colors?: ColorTheme;
  primaryColor?: string;
  textColor?: string;
  backgroundColor?: string;
  whatsappNumber?: string;
};

// ─── DesignAndFit ────────────────────────────────────────────────────────────

export type DesignAndFitImageCard = {
  image?: string;
  title?: string;
  description?: string;
  alt?: string;
};

export type DesignAndFitDetailCard = {
  title?: string;
  items?: { text?: string }[];
};

export type DesignAndFitProps = {
  version?: "v1" | "v2" | "v3" | "v4" | "v5";
  title?: string;
  subtitle?: string;
  imageCards?: DesignAndFitImageCard[];
  detailCards?: DesignAndFitDetailCard[];
  ctaText?: string;
  ctaHref?: string;
  /** Object-style CTA — used by versioned components. */
  ctaButton?: CtaButton;
  colors?: ColorTheme;
  primaryColor?: string;
  textColor?: string;
  backgroundColor?: string;
};

// ─── Quality ─────────────────────────────────────────────────────────────────

export type QualityImageCard = {
  image?: string;
  title?: string;
  description?: string;
  alt?: string;
};

export type QualityDetailCard = {
  title?: string;
  items?: { text?: string }[];
};

export type QualityProps = {
  version?: "v1" | "v2" | "v3" | "v4" | "v5";
  title?: string;
  subtitle?: string;
  imageCards?: QualityImageCard[];
  detailCards?: QualityDetailCard[];
  ctaButton?: CtaButton;
  colors?: ColorTheme;
};

// ─── Gallery ─────────────────────────────────────────────────────────────────

export type GalleryProps = {
  title?: string;
  description?: string;
  images?: ImageItem[];
};

// ─── SizeChart ───────────────────────────────────────────────────────────────

export type SizeRow = {
  measurement?: string;
  description?: string;
  m?: string;
  l?: string;
  xl?: string;
  xxl?: string;
};

export type SizeChartProps = {
  version?: "v0" | "v1" | "v2" | "v3" | "v4" | "v5";
  title?: string;
  description?: string;
  sizeData?: SizeRow[];
  chartImage?: string;
  chartImageAlt?: string;
  whatsappText?: string;
  whatsappNumber?: string;
  contactText?: string;
  returnPolicy?: string;
  colors?: ColorTheme;
  primaryColor?: string;
  textColor?: string;
  backgroundColor?: string;
};

// ─── Testimonials ────────────────────────────────────────────────────────────

export type TestimonialItem = {
  id: string;
  name: string;
  rating: number;
  text: string;
  image?: string;
  designation?: string;
};

export type TestimonialsProps = {
  version?: "v0" | "v1" | "v2" | "v3" | "v4" | "v5";
  title?: string;
  description?: string;
  images?: ImageItem[];
  initialDisplayCount?: number;
  loadMoreCount?: number;
  loadMoreText?: string;
  loadingText?: string;
  primaryColor?: string;
  textColor?: string;
  backgroundColor?: string;
};

// ─── FAQ ─────────────────────────────────────────────────────────────────────

export type FAQItem = {
  question: string;
  answer: string;
};

export type FAQProps = {
  version?: "v0" | "v1" | "v2" | "v3" | "v4" | "v5";
  heading?: string;
  descriptionPart1?: string;
  descriptionPart2?: string;
  descriptionPart3?: string;
  contactLabel?: string;
  contactNumber?: string;
  faqs?: FAQItem[];
  primaryColor?: string;
  backgroundColor?: string;
  faqBackgroundColor?: string;
};

// ─── OrderForm ───────────────────────────────────────────────────────────────

export type ShippingOption = {
  id?: string;
  label?: string;
  price?: number;
};

export type AllowedVariant = { name: string };

export type OrderFormProps = {
  title?: string;
  description?: string;
  submitButtonText?: string;
  productImage?: string;
  productImageAlt?: string;
  productName?: string;
  productPrice?: string;
  shippingOptions?: ShippingOption[];
  namePlaceholder?: string;
  phonePlaceholder?: string;
  addressPlaceholder?: string;
  notesPlaceholder?: string;
  cashOnDeliveryText?: string;
  privacyPolicyUrl?: string;
  colors?: ColorTheme;
  /** Flat colour shortcuts (from Puck builder config). */
  primaryColor?: string;
  textColor?: string;
  backgroundColor?: string;
  apiBaseUrl?: string;
  apiKey?: string;
  productId?: string | number;
  orderPlacementUrl?: string;
  allowedVariants?: AllowedVariant[];
};

export type OrderFormBillingFieldsProps = {
  primaryColor: string;
  namePlaceholder?: string;
  phonePlaceholder?: string;
  addressPlaceholder?: string;
  notesPlaceholder?: string;
  cashOnDeliveryText?: string;
  privacyPolicyUrl?: string;
  submitButtonText?: string;
  name: string;
  setName: (v: string) => void;
  phone: string;
  setPhone: (v: string) => void;
  address: string;
  setAddress: (v: string) => void;
  notes: string;
  setNotes: (v: string) => void;
  shippingOptions: ShippingOption[];
  selectedShipping: string;
  setSelectedShipping: (id: string) => void;
  isSubmitting: boolean;
};

export type OrderFormCartSummaryProps = {
  isLoadingProduct: boolean;
  displayProductName: string;
  selectedSize: string;
  selectedSizeLabel?: string;
  quantity: number;
  subtotal: number;
  shippingCharge: number;
  total: number;
};

export type OrderFormProductListProps = {
  isLoadingProduct: boolean;
  productData: Record<string, unknown> | null | undefined;
  variants: Record<string, unknown>[];
  allowedVariants?: AllowedVariant[];
  selectedVariantId: string | number;
  setSelectedVariantId: (id: string | number) => void;
  selectedSize: string;
  setSelectedSize: (size: string) => void;
  quantity: number;
  setQuantity: (q: number) => void;
  primaryColor: string;
  rawProductName: string;
  productPrice?: string;
  productImage?: string;
  productImageAlt?: string;
  displayProductName: string;
  displayProductPrice: string;
  displayProductImage?: string;
};
