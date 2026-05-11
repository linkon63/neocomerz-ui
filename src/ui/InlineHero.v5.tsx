import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { InlineHeroProps } from './types';
import inlineHeroBgDefault from './images/hero-3/hero-bg.webp';
import inlineHeroLogoDefault from './images/hero-3/Logo.svg';

export default function InlineHeroV5({
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
  theme = { primaryColor: '#7c3aed', secondaryColor: '#a855f7', textColor: '#1a1a1a' }
}: InlineHeroProps) {
  const { primaryColor, secondaryColor, textColor } = theme;
  return (
    <section className="relative w-full min-h-screen flex items-end overflow-hidden">
      <div className="absolute inset-0 z-0">
        {backgroundImage && <Image src={backgroundImage} alt={backgroundImageAlt} fill className="object-cover" priority quality={90} />}
      </div>
      {/* Gradient blob from bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-2/3 z-0" style={{ background: `linear-gradient(to top, ${primaryColor}f0 0%, ${primaryColor}80 40%, transparent 100%)` }} />
      <div className="relative z-10 w-full px-4 sm:px-8 pb-12">
        <div className="max-w-2xl flex flex-col gap-6">
          {logoSrc && <Image src={logoSrc} alt={logoAlt} width={logoWidth} height={logoHeight} className="h-12 w-auto" style={{ filter: "brightness(0) invert(1)" }} priority />}
          <div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-white">{titlePrimary}</h1>
            <h2 className="text-4xl md:text-6xl font-bold leading-tight mt-1 text-white/90">{titleSecondary}</h2>
          </div>
          <p className="text-base md:text-xl font-medium leading-relaxed text-white/80">{description}</p>
          {ctaText && ctaHref && (
            <Link href={ctaHref} className="inline-block px-10 py-4 rounded-3xl bg-white font-extrabold text-xl w-fit hover:scale-105 active:scale-95 transition-all shadow-2xl" style={{ color: primaryColor }}>
              {ctaText}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
