'use client';
import React from 'react';
import VariantWrapper from './_VariantWrapper';

import LayeredHeroDefault from '../../../src/ui/LayeredHero';
import LayeredHeroV1      from '../../../src/ui/LayeredHero.v1';
import LayeredHeroV2      from '../../../src/ui/LayeredHero.v2';
import LayeredHeroV3      from '../../../src/ui/LayeredHero.v3';
import LayeredHeroV4      from '../../../src/ui/LayeredHero.v4';
import LayeredHeroV5      from '../../../src/ui/LayeredHero.v5';

const SHARED_PROPS = {
  titlePrimary: "এই শীতের",
  titleSecondary: "স্টাইল গেমে আনুন নতুনত্ব",
  description: "বাজেট ফ্রেন্ডলি প্রাইসে পাচ্ছেন আমাদের এক্সক্লুসিভ প্রিমিয়াম Sweatshirt Collection।",
  productName: "Sweat Shirt Set",
  originalPrice: "৳1427",
  discountPrice: "৳999",
  priceSuffix: "only",
  cta: { text: "অর্ডার করুন (৩০% ছাড়ে)", href: "#" },
  settings: { showWatermark: true, showShadow: true, showPolaroid: true, showCtaIcon: true },
};

export default function LayeredHeroPreview() {
  return (
    <div>
      <VariantWrapper label="LayeredHero — Default" index={0}>
        <LayeredHeroDefault {...SHARED_PROPS} theme={{ primaryColor: "#FBBF24", textColor: "#222F28", descriptionColor: "#6B6B6B" }} />
      </VariantWrapper>
      <VariantWrapper label="LayeredHero.v1" index={1}>
        <LayeredHeroV1 {...SHARED_PROPS} theme={{ primaryColor: "#F36621", textColor: "#222F28", descriptionColor: "#6B6B6B" }} />
      </VariantWrapper>
      <VariantWrapper label="LayeredHero.v2" index={2}>
        <LayeredHeroV2 {...SHARED_PROPS} theme={{ primaryColor: "#0ea5e9", textColor: "#0f172a", descriptionColor: "#475569" }} />
      </VariantWrapper>
      <VariantWrapper label="LayeredHero.v3" index={3}>
        <LayeredHeroV3 {...SHARED_PROPS} theme={{ primaryColor: "#10b981", textColor: "#064e3b", descriptionColor: "#6b7280" }} />
      </VariantWrapper>
      <VariantWrapper label="LayeredHero.v4" index={4}>
        <LayeredHeroV4 {...SHARED_PROPS} theme={{ primaryColor: "#f59e0b", textColor: "#78350f", descriptionColor: "#92400e" }} />
      </VariantWrapper>
      <VariantWrapper label="LayeredHero.v5" index={5}>
        <LayeredHeroV5 {...SHARED_PROPS} theme={{ primaryColor: "#7c3aed", textColor: "#1a1a1a", descriptionColor: "#6b7280" }} />
      </VariantWrapper>
    </div>
  );
}
