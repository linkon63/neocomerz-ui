import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { InlineHeroProps } from './types';
import inlineHeroBgDefault from './images/hero-3/hero-bg.webp';
import inlineHeroLogoDefault from './images/hero-3/Logo.svg';

export default function InlineHeroV3({
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
  theme = { primaryColor: '#1d4ed8', secondaryColor: '#1d4ed8', textColor: '#1e293b' }
}: InlineHeroProps) {
  const { primaryColor, secondaryColor, textColor } = theme;
  return (
    <section className="relative w-full flex flex-col lg:flex-row min-h-[600px]">
      <div className="w-full lg:w-1/2 h-[400px] lg:h-auto relative">
        {backgroundImage && <Image src={backgroundImage} alt={backgroundImageAlt} fill className="object-cover" priority quality={90} />}
      </div>
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-16 gap-6 bg-white">
        {logoSrc && <Image src={logoSrc} alt={logoAlt} width={logoWidth} height={logoHeight} className="h-12 w-auto" priority />}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight" style={{ color: primaryColor }}>{titlePrimary}</h1>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mt-1" style={{ color: textColor }}>{titleSecondary}</h2>
        </div>
        <p className="text-base md:text-lg font-medium leading-relaxed text-gray-600">{description}</p>
        <div className="grid grid-cols-3 gap-2">
          {["✅ অরিজিনাল", "🚚 দ্রুত ডেলিভারি", "🔄 রিটার্ন পলিসি"].map((b) => (
            <div key={b} className="text-center py-2 px-1 rounded-xl border border-gray-200 bg-gray-50 text-xs font-semibold text-gray-700">{b}</div>
          ))}
        </div>
        {ctaText && ctaHref && (
          <Link href={ctaHref} className="inline-block px-8 py-4 rounded-xl text-white font-bold text-lg w-fit hover:opacity-90 transition-all shadow-lg" style={{ backgroundColor: primaryColor }}>
            {ctaText}
          </Link>
        )}
      </div>
    </section>
  );
}
