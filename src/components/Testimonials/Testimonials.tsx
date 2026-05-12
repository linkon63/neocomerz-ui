'use client';

import React from 'react';
import TestimonialsV0  from './Testimonials.v0';
import TestimonialsV1  from './Testimonials.v1';
import TestimonialsV2  from './Testimonials.v2';
import TestimonialsV3  from './Testimonials.v3';
import TestimonialsV4  from './Testimonials.v4';
import TestimonialsV5  from './Testimonials.v5';

export interface TestimonialImageItem {
  src: string;
  alt?: string;
}

export interface TestimonialsUIProps {
  version?: 'default' | 'v1' | 'v2' | 'v3' | 'v4' | 'v5';
  title?: string;
  description?: string | React.ReactNode;
  images?: TestimonialImageItem[];
  initialDisplayCount?: number;
  loadMoreCount?: number;
  loadMoreText?: string;
  loadingText?: string;
  colors?: {
    primary?: string;
    text?: string;
    background?: string;
  };
}

const versionMap = {
  default: TestimonialsV0,
  v1: TestimonialsV1,
  v2: TestimonialsV2,
  v3: TestimonialsV3,
  v4: TestimonialsV4,
  v5: TestimonialsV5,
};

export default function TestimonialsUI({ version = 'default', ...rest }: TestimonialsUIProps) {
  const Component = versionMap[version] ?? TestimonialsV0;
  return <Component {...rest} />;
}
