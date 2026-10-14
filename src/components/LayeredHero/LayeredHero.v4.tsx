import React from "react";
import Image from "next/image";
import Link from "next/link";
import { LayeredHeroProps } from '../../types/components';
import layeredHeroMainDefault from '../../images/hero-2/hero-main.webp';
import layeredHeroLogoDefault from '../../images/hero-3/Logo.svg';

export default function LayeredHeroV4({
  logo = { src: layeredHeroLogoDefault.src, alt: "Logo", width: 230, height: 60 },
  mainImage = layeredHeroMainDefault.src,
  mainImageAlt = "Collection Models",
  titlePrimary = "🌟 এই শীতের",
  titleSecondary = "স্টাইল গেমে আনুন নতুনত্ব",
  description = "বাজেট ফ্রেন্ডলি প্রাইসে পাচ্ছেন আমাদের এক্সক্লুসিভ প্রিমিয়াম Collection।",
  productName = "Sweat Shirt Set",
  originalPrice = "৳1427",
  discountPrice = "৳999",
  priceSuffix = "only",
  cta = { text: "অর্ডার করুন", href: "#order" },
  settings = {},
  theme = { primaryColor: "#FBBF24", textColor: "#ffffff", descriptionColor: "#d1d5db" },
}: LayeredHeroProps) {
  const { primaryColor = "#FBBF24", textColor = "#ffffff", descriptionColor = "#d1d5db" } = theme;
  const { src: finalLogoSrc = layeredHeroLogoDefault.src, alt: finalLogoAlt = "Logo", width: finalLogoWidth = 230, height: finalLogoHeight = 60 } = logo || {};

  return (
    <section className="relative w-full flex flex-col lg:flex-row bg-gray-950 min-h-screen overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      <div className="relative z-10 w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-16 gap-6">
        {finalLogoSrc && (
          <Image src={finalLogoSrc} alt={finalLogoAlt} width={finalLogoWidth} height={finalLogoHeight} style={{ width: "auto", height: "auto", maxWidth: 180, filter: "brightness(0) invert(1)" }} />
        )}
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight" style={{ color: primaryColor }}>{titlePrimary}</h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mt-1" style={{ color: textColor }}>{titleSecondary}</h2>
        </div>
        <p className="text-base md:text-lg leading-relaxed" style={{ color: descriptionColor }}>{description}</p>
        <div className="flex items-center gap-3">
          <span className="text-gray-500 line-through text-lg">{originalPrice}</span>
          <span className="text-3xl font-extrabold" style={{ color: primaryColor }}>{discountPrice}</span>
          <span className="text-gray-400 text-sm">{priceSuffix}</span>
        </div>
        <Link href={cta?.href || "#order"} className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-black font-extrabold text-lg w-fit hover:brightness-110 active:scale-95 transition-all shadow-2xl" style={{ backgroundColor: primaryColor }}>
          {cta?.text}
        </Link>
        <div className="flex items-center gap-4 text-gray-500 text-xs tracking-widest uppercase">
          <span>Premium</span><span className="w-px h-3 bg-gray-700" /><span>Authentic</span><span className="w-px h-3 bg-gray-700" /><span>Exclusive</span>
        </div>
      </div>
      <div className="w-full lg:w-1/2 h-[400px] lg:h-auto relative">
        {mainImage && <Image src={mainImage} alt={mainImageAlt} fill className="object-cover brightness-75" />}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-transparent to-transparent" />
      </div>
    </section>
  );
}
