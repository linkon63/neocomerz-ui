import React from "react";
import Image from "next/image";
import Link from "next/link";
import { LayeredHeroProps } from '../../types/components';
import layeredHeroMainDefault from '../../images/hero-2/hero-main.webp';
import layeredHeroLogoDefault from '../../images/hero-3/Logo.svg';

export default function LayeredHeroV5({
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
  theme = { primaryColor: "#7c3aed", textColor: "#1a1a1a", descriptionColor: "#6B6B6B" },
}: LayeredHeroProps) {
  const { primaryColor = "#7c3aed", textColor = "#1a1a1a", descriptionColor = "#6B6B6B" } = theme;
  const { src: finalLogoSrc = layeredHeroLogoDefault.src, alt: finalLogoAlt = "Logo", width: finalLogoWidth = 230, height: finalLogoHeight = 60 } = logo || {};

  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center">
      {/* Full background image */}
      {mainImage && <Image src={mainImage} alt={mainImageAlt} fill className="object-cover" priority />}
      <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${primaryColor}dd 0%, ${primaryColor}88 50%, transparent 100%)` }} />
      {/* Floating card */}
      <div className="relative z-10 w-full max-w-lg mx-4 sm:mx-auto">
        <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl flex flex-col gap-6">
          {finalLogoSrc && (
            <Image src={finalLogoSrc} alt={finalLogoAlt} width={finalLogoWidth} height={finalLogoHeight} style={{ width: "auto", height: "auto", maxWidth: 160 }} />
          )}
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight" style={{ color: primaryColor }}>{titlePrimary}</h1>
            <h2 className="text-2xl md:text-3xl font-bold leading-tight mt-1" style={{ color: textColor }}>{titleSecondary}</h2>
          </div>
          <p className="text-sm md:text-base leading-relaxed" style={{ color: descriptionColor }}>{description}</p>
          <div className="flex items-center gap-3">
            <span className="text-gray-400 line-through">{originalPrice}</span>
            <span className="text-2xl font-extrabold" style={{ color: primaryColor }}>{discountPrice}</span>
            <span className="text-gray-500 text-sm">{priceSuffix}</span>
          </div>
          <Link href={cta?.href || "#order"} className="w-full py-4 rounded-2xl text-white font-extrabold text-lg text-center hover:scale-[1.02] active:scale-95 transition-all shadow-xl" style={{ background: `linear-gradient(135deg, ${primaryColor}, ${primaryColor}cc)` }}>
            {cta?.text}
          </Link>
        </div>
      </div>
    </section>
  );
}
