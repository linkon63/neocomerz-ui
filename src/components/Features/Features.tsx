import React from 'react';
import FeaturesV1 from './Features.v1';
import FeaturesV2 from './Features.v2';
import FeaturesV3 from './Features.v3';
import FeaturesV4 from './Features.v4';
import FeaturesV5 from './Features.v5';
import { FeaturesProps } from '../../types/components';

interface FeaturesUIProps extends Partial<FeaturesProps> {
  version?: 'v1' | 'v2' | 'v3' | 'v4' | 'v5';
}

const versionMap = {
  v1: FeaturesV1,
  v2: FeaturesV2,
  v3: FeaturesV3,
  v4: FeaturesV4,
  v5: FeaturesV5,
};

export default function FeaturesUI({
  version = 'v1',
  title = 'কেন এটা আলাদা করে নজর কাড়ে',
  description = 'শুধু সুন্দর নয়, আরামদায়কও।',
  ctaButton = { text: 'এখনই অর্ডার করুন', href: '#order-form' },
  tagline = 'এটা শুধু একটা ড্রেস না—এটা এখনকার ফ্যাশন ট্রেন্ডের অংশ।',
  ...rest
}: FeaturesUIProps) {
  const Component = versionMap[version] ?? FeaturesV1;
  return (
    <Component
      title={title}
      description={description}
      ctaButton={ctaButton}
      tagline={tagline}
      {...rest}
    />
  );
}
