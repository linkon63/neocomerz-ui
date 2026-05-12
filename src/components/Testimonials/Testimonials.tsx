'use client';

import React from 'react';
import TestimonialsV0  from './Testimonials.v0';
import TestimonialsV1  from './Testimonials.v1';
import TestimonialsV2  from './Testimonials.v2';
import TestimonialsV3  from './Testimonials.v3';
import TestimonialsV4  from './Testimonials.v4';
import TestimonialsV5  from './Testimonials.v5';

import review1 from '../../images/review-1.jpeg';
import review2 from '../../images/review-2.jpeg';
import review3 from '../../images/review-3.jpeg';
import review4 from '../../images/review-2-alt.jpeg';

export interface TestimonialImageItem {
  src: string;
  alt?: string;
}

const defaultImages: TestimonialImageItem[] = [
  { src: review1.src, alt: 'Review 1' },
  { src: review2.src, alt: 'Review 2' },
  { src: review3.src, alt: 'Review 3' },
  { src: review4.src, alt: 'Review 4' },
];

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

export default function TestimonialsUI({ version = 'default', images = defaultImages, ...rest }: TestimonialsUIProps) {
  const Component = versionMap[version] ?? TestimonialsV0;
  return <Component images={images} {...rest} />;
}
