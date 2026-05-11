import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { InlineHeroProps } from './types';
import inlineHeroBgDefault from './images/hero-3/hero-bg.webp';
import inlineHeroLogoDefault from './images/hero-3/Logo.svg';

export default function InlineHeroV2({
  backgroundImage = inlineHeroBgDefault.src,
  backgroundImageAlt = 'Hero Background',
  logoSrc = inlineHeroLogoDefault.src,
  logoAlt = 'Logo',
  logoWidth = 200, logoHeight = 60,
  titlePrimary = '🌟 প্রিমিয়াম',
  titleSecondary = 'Pakistani Elite Dress',
  description = 'সেই ডিজাইন—যেটা পরলে আলাদা করে কিছু বলার দরকার পড়ে না।',
  ctaText = 'এখনই অর্ডার করুন',
  ctaHref = '#order',
  theme = { primaryColor: '#dc2626', secondaryColor: '#dc2626', textColor: '#ffffff' }
}: InlineHeroProps) {
  const { primaryColor, secondaryColor, textColor } = theme;
  return (
    <section className="relative w-full min-h-screen flex items-end">
      <div className="absolute inset-0 z-0">
        {backgroundImage && <Image src={backgroundImage} alt={backgroundImageAlt} fill className="object-cover object-center" priority quality={90} />}
        <div className="absolute inset-0 bg-black/50" />
      </div>
      {/* Urgency bar */}
      <div className="absolute top-0 left-0 right-0 z-20 py-2 text-center text-sm font-bold text-white" style={{ backgroundColor: primaryColor }}>
        🔥 সীমিত স্টক! আজই অর্ডার করুন!
      </div>
      <div className="relative z-10 w-full px-4 sm:px-8 pb-12 pt-20">
        <div className="max-w-2xl flex flex-col gap-6">
          {logoSrc && <Image src={logoSrc} alt={logoAlt} width={logoWidth} height={logoHeight} className="h-12 w-auto" style={{ filter: "brightness(0) invert(1)" }} priority />}
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-white">{titlePrimary} {titleSecondary}</h1>
          <p className="text-base md:text-xl font-medium leading-relaxed text-white/80">{description}</p>
          {ctaText && ctaHref && (
            <Link href={ctaHref} className="inline-flex items-center gap-2 px-10 py-4 rounded-2xl text-white font-extrabold text-xl w-fit hover:scale-105 active:scale-95 transition-all shadow-2xl" style={{ backgroundColor: primaryColor }}>
              🛒 {ctaText}
            </Link>
          )}
          <p className="text-white/50 text-xs">✅ ক্যাশ অন ডেলিভারি &nbsp;|&nbsp; ✅ ৩ দিনে রিটার্ন &nbsp;|&nbsp; ✅ ১০০% অরিজিনাল</p>
        </div>
      </div>
    </section>
  );
}
