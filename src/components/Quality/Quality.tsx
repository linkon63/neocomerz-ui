import React from 'react';
import QualityV1 from './Quality.v1';
import QualityV2 from './Quality.v2';
import QualityV3 from './Quality.v3';
import QualityV4 from './Quality.v4';
import QualityV5 from './Quality.v5';

interface QualityUIProps {
  version?: 'v1' | 'v2' | 'v3' | 'v4' | 'v5';
  title?: string;
  subtitle?: string;
  imageCards?: Array<{
    image?: string;
    title?: string;
    description?: string;
    alt?: string;
  }>;
  detailCards?: Array<{
    title?: string;
    items?: Array<{ text?: string }>;
  }>;
  ctaButton?: {
    text?: string;
    href?: string;
  };
  colors?: {
    primary?: string;
    text?: string;
    background?: string;
  };
}

const versionMap = {
  v1: QualityV1,
  v2: QualityV2,
  v3: QualityV3,
  v4: QualityV4,
  v5: QualityV5,
};

export default function QualityUI({
  version = 'v1',
  title = 'আমাদের কোয়ালিটি গ্যারান্টি',
  subtitle = 'প্রতিটি পণ্যে আমরা যা নিশ্চিত করি',
  ctaButton = { text: 'এখনই অর্ডার করুন', href: '#order-form' },
  ...rest
}: QualityUIProps) {
  const Component = versionMap[version] ?? QualityV1;
  return (
    <Component
      title={title}
      subtitle={subtitle}
      ctaButton={ctaButton}
      {...rest}
    />
  );
}
