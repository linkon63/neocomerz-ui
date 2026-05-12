'use client';
import React from 'react';
import VariantWrapper from './_VariantWrapper';

import InlineHeroDefault from '../../../src/ui/InlineHero';
import InlineHeroV3      from '../../../src/ui/InlineHero.v3';

const SHARED_PROPS = {
  titlePrimary: "প্রিমিয়াম",
  titleSecondary: "Pakistani Dress",
  description: "সেই ডিজাইন—যেটা পরলে আলাদা করে কিছু বলার দরকার পড়ে না। ফ্যাশন-লাভারদের নতুন obsession।",
  ctaText: "এখনই অর্ডার করুন",
  ctaHref: "#",
};

export default function InlineHeroPreview() {
  return (
    <div>
      <VariantWrapper label="InlineHero — Default" index={0}>
        <InlineHeroDefault
          {...SHARED_PROPS}
          theme={{ primaryColor: "#27272a", secondaryColor: "#5b21b6", textColor: "#27272a" }}
        />
      </VariantWrapper>

      <VariantWrapper label="InlineHero.v3" index={1}>
        <InlineHeroV3
          {...SHARED_PROPS}
          theme={{ primaryColor: "#0ea5e9", secondaryColor: "#0ea5e9", textColor: "#0f172a" }}
        />
      </VariantWrapper>
    </div>
  );
}
