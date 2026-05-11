import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { InlineHeroProps } from './types';
import inlineHeroBgDefault from './images/hero-3/hero-bg.webp';
import inlineHeroLogoDefault from './images/hero-3/Logo.svg';

export default function InlineHeroV1({
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
  theme = { primaryColor: '#27272a', secondaryColor: '#5b21b6', textColor: '#27272a' }
}: InlineHeroProps) {
  const { primaryColor, secondaryColor, textColor } = theme;
  return (
    <section className="relative w-full min-h-[600px] flex items-center">
      <div className="absolute inset-0 z-0">
        {backgroundImage && <Image src={backgroundImage} alt={backgroundImageAlt} fill className="object-cover object-center" priority quality={90} />}
      </div>
      <div className="relative z-10 max-w-[1440px] mx-auto w-full px-4 sm:px-8 py-16">
        <div className="max-w-xl flex flex-col gap-6">
          {logoSrc && <Image src={logoSrc} alt={logoAlt} width={logoWidth} height={logoHeight} className="h-12 w-auto" priority />}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight" style={{ color: primaryColor }}>{titlePrimary}</h1>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mt-1" style={{ color: secondaryColor }}>{titleSecondary}</h2>
          </div>
          <p className="text-base md:text-lg font-medium leading-relaxed" style={{ color: textColor }}>{description}</p>
          {ctaText && ctaHref && (
            <Link href={ctaHref} className="inline-block px-8 py-4 rounded-xl text-white font-bold text-lg w-fit hover:opacity-90 transition-all shadow-lg" style={{ backgroundColor: secondaryColor }}>
              {ctaText}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
