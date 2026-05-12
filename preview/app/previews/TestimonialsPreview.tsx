'use client';
import React from 'react';
import VariantWrapper from './_VariantWrapper';

import TestimonialsDefault from '../../../src/ui/Testimonials';
import TestimonialsV1      from '../../../src/ui/Testimonials.v1';
import TestimonialsV2      from '../../../src/ui/Testimonials.v2';
import TestimonialsV3      from '../../../src/ui/Testimonials.v3';
import TestimonialsV4      from '../../../src/ui/Testimonials.v4';
import TestimonialsV5      from '../../../src/ui/Testimonials.v5';

const SAMPLE_IMAGES = [
  { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80", alt: "Review 1" },
  { src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80", alt: "Review 2" },
  { src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80", alt: "Review 3" },
  { src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80", alt: "Review 4" },
  { src: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=400&q=80", alt: "Product 1" },
  { src: "https://images.unsplash.com/photo-1598452963314-b09f397a5c48?auto=format&fit=crop&w=400&q=80", alt: "Product 2" },
  { src: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=400&q=80", alt: "Product 3" },
  { src: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=400&q=80", alt: "Product 4" },
];

const SHARED_PROPS = {
  title: "গ্রাহকের মতামত",
  description: "আমাদের গ্রাহকরা সবসময়ই আমাদের অভিজ্ঞতা নিয়ে সন্তুষ্ট!",
  images: SAMPLE_IMAGES,
  loadMoreText: "আরো দেখুন",
  loadingText: "লোড হচ্ছে...",
};

export default function TestimonialsPreview() {
  return (
    <div>
      <VariantWrapper label="Testimonials — Default" index={0}>
        <TestimonialsDefault {...SHARED_PROPS} colors={{ primary: '#F36621', text: '#27272a', background: '#f3f4f6' }} />
      </VariantWrapper>
      <VariantWrapper label="Testimonials.v1" index={1}>
        <TestimonialsV1 {...SHARED_PROPS} colors={{ primary: '#F36621', text: '#27272a', background: '#ffffff' }} />
      </VariantWrapper>
      <VariantWrapper label="Testimonials.v2" index={2}>
        <TestimonialsV2 {...SHARED_PROPS} colors={{ primary: '#0ea5e9', text: '#0f172a', background: '#f0f9ff' }} />
      </VariantWrapper>
      <VariantWrapper label="Testimonials.v3" index={3}>
        <TestimonialsV3 {...SHARED_PROPS} colors={{ primary: '#10b981', text: '#064e3b', background: '#f0fdf4' }} />
      </VariantWrapper>
      <VariantWrapper label="Testimonials.v4" index={4}>
        <TestimonialsV4 {...SHARED_PROPS} colors={{ primary: '#f59e0b', text: '#78350f', background: '#fffbeb' }} />
      </VariantWrapper>
      <VariantWrapper label="Testimonials.v5" index={5}>
        <TestimonialsV5 {...SHARED_PROPS} colors={{ primary: '#7c3aed', text: '#1a1a1a', background: '#faf5ff' }} />
      </VariantWrapper>
    </div>
  );
}
