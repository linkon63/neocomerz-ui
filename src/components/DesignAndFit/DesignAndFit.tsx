import React from 'react';
import DesignAndFitV1 from './DesignAndFit.v1';
import DesignAndFitV2 from './DesignAndFit.v2';
import DesignAndFitV3 from './DesignAndFit.v3';
import DesignAndFitV4 from './DesignAndFit.v4';
import DesignAndFitV5 from './DesignAndFit.v5';

import featureImg1 from '../../images/productFeature-1.jpg';
import featureImg2 from '../../images/productFeature-2.webp';
import featureImg3 from '../../images/productFeature-3.jpg';

export interface DesignAndFitUIProps {
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

const defaultImageCards = [
  { image: featureImg1.src, title: 'প্রিমিয়াম ডিজাইন', description: 'আধুনিক ডিজাইন যা আপনাকে করে তুলবে আকর্ষণীয়' },
  { image: featureImg2.src, title: 'পারফেক্ট ফিটিং', description: 'বডি শেইপ অনুযায়ী দারুণ ফিটিং' },
  { image: featureImg3.src, title: 'উন্নত কোয়ালিটি', description: 'দীর্ঘস্থায়ী ও আরামদায়ক ফেব্রিক' },
];

const versionMap = {
  v1: DesignAndFitV1,
  v2: DesignAndFitV2,
  v3: DesignAndFitV3,
  v4: DesignAndFitV4,
  v5: DesignAndFitV5,
};

export default function DesignAndFitUI({ version = 'v1', imageCards = defaultImageCards, ...props }: DesignAndFitUIProps) {
  const Component = versionMap[version] ?? DesignAndFitV1;
  return <Component imageCards={imageCards} {...props} />;
}
