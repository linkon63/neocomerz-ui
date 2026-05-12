'use client';
import React from 'react';
import VariantWrapper from './_VariantWrapper';

import FeaturesDefault from '../../../src/ui/Features';
import FeaturesV1      from '../../../src/ui/Features.v1';
import FeaturesV2      from '../../../src/ui/Features.v2';
import FeaturesV3      from '../../../src/ui/Features.v3';
import FeaturesV4      from '../../../src/ui/Features.v4';
import FeaturesV5      from '../../../src/ui/Features.v5';

const SHARED_PROPS = {
  title: "কেন এটা আলাদা করে নজর কাড়ে",
  description: "শুধু সুন্দর নয়, আরামদায়কও। আমাদের প্রিমিয়াম কোয়ালিটির পণ্য আপনাকে দেবে এক অনন্য অভিজ্ঞতা।",
  tagline: "এটা শুধু একটা ড্রেস না—এটা এখনকার ফ্যাশন ট্রেন্ডের অংশ।",
  features: [
    { text: "Premium Indian Embroidery কারুকাজ" },
    { text: "Soft, Skin-friendly ফ্যাব্রিক" },
    { text: "Perfect Fit — আরামদায়ক ও স্টাইলিশ" },
    { text: "ফ্রি পায়জামা সহ কমপ্লিট সেট" },
    { text: "৩ দিনের মধ্যে রিটার্ন/এক্সচেঞ্জ" },
  ],
  ctaButton: { text: "এখনই অর্ডার করুন", href: "#" },
  whatsappNumber: "+880 1712-508063",
};

export default function FeaturesPreview() {
  return (
    <div>
      <VariantWrapper label="Features — Default" index={0}>
        <FeaturesDefault {...SHARED_PROPS} colors={{ primary: '#F36621', text: '#222F28', background: '#ffffff' }} />
      </VariantWrapper>
      <VariantWrapper label="Features.v1" index={1}>
        <FeaturesV1 {...SHARED_PROPS} colors={{ primary: '#F36621', text: '#222F28', background: '#ffffff' }} />
      </VariantWrapper>
      <VariantWrapper label="Features.v2" index={2}>
        <FeaturesV2 {...SHARED_PROPS} colors={{ primary: '#0ea5e9', text: '#0f172a', background: '#f0f9ff' }} />
      </VariantWrapper>
      <VariantWrapper label="Features.v3" index={3}>
        <FeaturesV3 {...SHARED_PROPS} colors={{ primary: '#10b981', text: '#064e3b', background: '#f0fdf4' }} />
      </VariantWrapper>
      <VariantWrapper label="Features.v4" index={4}>
        <FeaturesV4 {...SHARED_PROPS} colors={{ primary: '#f59e0b', text: '#78350f', background: '#fffbeb' }} />
      </VariantWrapper>
      <VariantWrapper label="Features.v5" index={5}>
        <FeaturesV5 {...SHARED_PROPS} colors={{ primary: '#7c3aed', text: '#1a1a1a', background: '#faf5ff' }} />
      </VariantWrapper>
    </div>
  );
}
