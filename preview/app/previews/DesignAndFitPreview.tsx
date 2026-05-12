'use client';
import React from 'react';
import VariantWrapper from './_VariantWrapper';

import DesignAndFitDefault from '../../../src/ui/DesignAndFit';
import DesignAndFitV1      from '../../../src/ui/DesignAndFit.v1';
import DesignAndFitV2      from '../../../src/ui/DesignAndFit.v2';
import DesignAndFitV3      from '../../../src/ui/DesignAndFit.v3';
import DesignAndFitV4      from '../../../src/ui/DesignAndFit.v4';
import DesignAndFitV5      from '../../../src/ui/DesignAndFit.v5';

const IMG1 = "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=600&q=80";
const IMG2 = "https://images.unsplash.com/photo-1598452963314-b09f397a5c48?auto=format&fit=crop&w=600&q=80";
const IMG3 = "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=600&q=80";

const SHARED_PROPS = {
  title: "ইন্ডিয়ান এমব্রয়ডারি,",
  subtitle: "পাঞ্জাবি সাশ্রয় দামে - আজকের সেরা ডিল",
  imageCards: [
    { title: "ফিল:", description: "সফট, স্কিন-ফ্রেন্ডলি, আরামদায়ক", image: IMG1, alt: "Premium Fabric" },
    { title: "থিকনেস:", description: "রাজকীয় কারুকাজে অভিজাত্যের ছোঁয়া", image: IMG2, alt: "Thickness Quality" },
    { title: "ফ্রি অফার:", description: "প্রিমিয়াম কোয়ালিটির পায়জামা সম্পূর্ণ ফ্রি!", image: IMG3, alt: "Free Offer" },
  ],
  detailCards: [
    {
      title: "Design & Cut",
      items: [
        { text: "Modern Quality silhouette" },
        { text: "Clean finishing & elegant tailoring" },
        { text: "এমন ডিজাইন যা আলাদা করে নজর কাড়ে" },
      ],
    },
    {
      title: "Fit & Styling",
      items: [
        { text: "Comfortable fit – ঢিলাও না, আঁটসাঁটও না" },
        { text: "Casual, festive বা semi-formal—সব জায়গায় মানানসই" },
      ],
    },
    {
      title: "Color & Variations",
      items: [
        { text: "Trend-based colour selection" },
        { text: "Limited colour runs" },
      ],
    },
  ],
  ctaButton: { text: "এখনই অর্ডার করুন", href: "#" },
};

export default function DesignAndFitPreview() {
  return (
    <div>
      <VariantWrapper label="DesignAndFit — Default" index={0}>
        <DesignAndFitDefault {...SHARED_PROPS} colors={{ primary: '#F36621', text: '#27272a', background: '#f3f4f6' }} />
      </VariantWrapper>
      <VariantWrapper label="DesignAndFit.v1" index={1}>
        <DesignAndFitV1 {...SHARED_PROPS} colors={{ primary: '#F36621', text: '#27272a', background: '#f9fafb' }} />
      </VariantWrapper>
      <VariantWrapper label="DesignAndFit.v2" index={2}>
        <DesignAndFitV2 {...SHARED_PROPS} colors={{ primary: '#0ea5e9', text: '#0f172a', background: '#f0f9ff' }} />
      </VariantWrapper>
      <VariantWrapper label="DesignAndFit.v3" index={3}>
        <DesignAndFitV3 {...SHARED_PROPS} colors={{ primary: '#10b981', text: '#064e3b', background: '#f0fdf4' }} />
      </VariantWrapper>
      <VariantWrapper label="DesignAndFit.v4" index={4}>
        <DesignAndFitV4 {...SHARED_PROPS} colors={{ primary: '#f59e0b', text: '#78350f', background: '#fffbeb' }} />
      </VariantWrapper>
      <VariantWrapper label="DesignAndFit.v5" index={5}>
        <DesignAndFitV5 {...SHARED_PROPS} colors={{ primary: '#7c3aed', text: '#1a1a1a', background: '#faf5ff' }} />
      </VariantWrapper>
    </div>
  );
}
