import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { InlineHeroProps } from './types';
import inlineHeroBgDefault from './images/hero-3/hero-bg.webp';
import inlineHeroLogoDefault from './images/hero-3/Logo.svg';

export default function InlineHeroV4({
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
  theme = { primaryColor: '#FBBF24', secondaryColor: '#FBBF24', textColor: '#ffffff' }
}: InlineHeroProps) {
  const { primaryColor, secondaryColor, textColor } = theme;
  return (
    <section className="relative w-full min-h-screen flex items-center bg-gray-950 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-40">
        {backgroundImage && <Image src={backgroundImage} alt={backgroundImageAlt} fill className="object-cover" priority quality={90} />}
      </div>
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      <div className="relative z-10 max-w-[1440px] mx-auto w-full px-4 sm:px-8 py-16">
        <div className="max-w-xl flex flex-col gap-6">
          {logoSrc && <Image src={logoSrc} alt={logoAlt} width={logoWidth} height={logoHeight} className="h-12 w-auto" style={{ filter: "brightness(0) invert(1)" }} priority />}
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight" style={{ color: primaryColor }}>{titlePrimary}</h1>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mt-1 text-white">{titleSecondary}</h2>
          </div>
          <p className="text-base md:text-lg font-medium leading-relaxed text-gray-400">{description}</p>
          {ctaText && ctaHref && (
            <Link href={ctaHref} className="inline-block px-8 py-4 rounded-xl text-black font-extrabold text-lg w-fit hover:brightness-110 active:scale-95 transition-all shadow-2xl" style={{ backgroundColor: primaryColor }}>
              {ctaText}
            </Link>
          )}
          <div className="flex items-center gap-4 text-gray-500 text-xs tracking-widest uppercase">
            <span>Premium</span><span className="w-px h-3 bg-gray-700" /><span>Authentic</span><span className="w-px h-3 bg-gray-700" /><span>Exclusive</span>
          </div>
        </div>
      </div>
    </section>
  );
}
