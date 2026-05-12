'use client';

import React from 'react';
import FAQV0 from './FAQ.v0';
import FAQV1 from './FAQ.v1';
import FAQV2 from './FAQ.v2';
import FAQV3 from './FAQ.v3';
import FAQV4 from './FAQ.v4';
import FAQV5 from './FAQ.v5';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQUIProps {
  version?: 'default' | 'v1' | 'v2' | 'v3' | 'v4' | 'v5';
  heading?: string;
  descriptionPart1?: string;
  descriptionPart2?: string;
  descriptionPart3?: string;
  contactLabel?: string;
  contactNumber?: string;
  faqs?: FAQItem[];
  colors?: {
    primary?: string;
    background?: string;
    faqBackground?: string;
  };
}

const versionMap = {
  default: FAQV0,
  v1: FAQV1,
  v2: FAQV2,
  v3: FAQV3,
  v4: FAQV4,
  v5: FAQV5,
};

export default function FAQUI({ version = 'default', ...rest }: FAQUIProps) {
  const Component = versionMap[version] ?? FAQV0;
  return <Component {...rest} />;
}
