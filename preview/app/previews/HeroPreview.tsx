'use client';
import React from 'react';
import VariantWrapper from './_VariantWrapper';

import Hero      from '../../../src/ui/Hero';
import HeroV2    from '../../../src/ui/Hero.v2';
import HeroV3    from '../../../src/ui/Hero.v3';
import HeroV4    from '../../../src/ui/Hero.v4';
import HeroV5    from '../../../src/ui/Hero.v5';
import Hero2     from '../../../src/ui/Hero2';
import Hero3     from '../../../src/ui/Hero3';
import Hero4     from '../../../src/ui/Hero4';

const SAMPLE  = "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1200&q=80";
const SAMPLE2 = "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=1200&q=80";

const BASE_PROPS = {
  title: "👑 STYLISH & COMFORTABLE",
  subtitle: "✨ LUXURY SUMMER COLLECTION",
  discountTag: "UP TO 50% OFF",
  cta: { text: "SHOP NOW", href: "#" },
  secondaryCta: { text: "VIEW CATALOG", href: "#" },
  settings: { overlayOpacity: 15, overlayColor: "#000000", textAlignment: "center" as const, contentAlignment: "right" as const },
  theme: { primaryColor: "#F36621", textColor: "#222F28" },
};

export default function HeroPreview() {
  return (
    <div>
      <VariantWrapper label="Hero — Default" index={0}>
        <Hero {...BASE_PROPS} />
      </VariantWrapper>

      <VariantWrapper label="Hero.v2" index={1}>
        <HeroV2 {...BASE_PROPS} />
      </VariantWrapper>

      <VariantWrapper label="Hero.v3" index={2}>
        <HeroV3 {...BASE_PROPS} />
      </VariantWrapper>

      <VariantWrapper label="Hero.v4" index={3}>
        <HeroV4 {...BASE_PROPS} />
      </VariantWrapper>

      <VariantWrapper label="Hero.v5" index={4}>
        <HeroV5 {...BASE_PROPS} />
      </VariantWrapper>

      <VariantWrapper label="Hero2 — Organic / Mango Style" index={5}>
        <Hero2
          backgroundImage={SAMPLE}
          logoSrc=""
          titlePart1="সম্পূর্ণ ফরমালিনমুক্ত নওগাঁর "
          titlePart2="নাকফজলি"
          titlePart3=" আমের মেলা"
          description="নাক ফজলি আম বাংলাদেশের জনপ্রিয় একটি সুস্বাদু জাত, যা আকারে বড়, লম্বাটে ও হালকা বাঁকানো।"
          ctaText="অর্ডার করুন"
          ctaHref="#"
        />
      </VariantWrapper>

      <VariantWrapper label="Hero3 — Center Circle Layout" index={6}>
        <Hero3
          logoSrc=""
          leftLeafImage=""
          rightLeafImage=""
          centerImage={SAMPLE2}
          badgeImage=""
          titleLine1="নওগাঁর ঐতিহ্যবাহী ফরমালিনমুক্ত"
          titleLine2="নাকফজলি আম"
          description="নাক ফজলি আম বাংলাদেশের জনপ্রিয় একটি সুস্বাদু জাত।"
          priceLabel="প্রতিকোজি আম এখন পাচ্ছেন"
          price="মাত্র ২০০ টাকায়"
          ctaText="অর্ডার করুন"
          ctaHref="#"
          phoneNumber="01738552161"
        />
      </VariantWrapper>

      <VariantWrapper label="Hero4 — Full Cinematic" index={7}>
        <Hero4
          leftLeafImage=""
          rightLeafImage=""
          mangoBannerImage={SAMPLE}
          mangoCircleImage={SAMPLE2}
          titleLine1="খাঁটি, রসালো ও"
          titleLine2="ফরমালিনমুক্ত "
          titleLine3="আমের নিশ্চয়তা"
          badgeTextLine1="100%"
          badgeTextLine2="ফরমালিনমুক্ত"
          description="আমাদের বাগান থেকে সরাসরি সংগ্রহ করা টাটকা, রসালো ও কেমিক্যালমুক্ত দেশি আম।"
          ctaText="অর্ডার করুন"
          ctaHref="#"
          phoneNumber="01738552161"
        />
      </VariantWrapper>
    </div>
  );
}
