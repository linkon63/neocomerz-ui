import React from "react";
import Image from "next/image";
import Link from "next/link";
import { LayeredHeroProps } from '../../types/components';
import layeredHeroMainDefault from '../../images/hero-2/hero-main.webp';
import layeredHeroLogoDefault from '../../images/hero-3/Logo.svg';

export default function LayeredHeroV0({
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
  settings = { showWatermark: false, showShadow: false, showPolaroid: false, showCtaIcon: true },
  theme = { primaryColor: "#F36621", textColor: "#222F28", descriptionColor: "#6B6B6B" },
}: LayeredHeroProps) {
  const { primaryColor = "#F36621", textColor = "#222F28", descriptionColor = "#6B6B6B" } = theme;
  const { src: finalLogoSrc = layeredHeroLogoDefault.src, alt: finalLogoAlt = "Logo", width: finalLogoWidth = 230, height: finalLogoHeight = 60 } = logo || {};

  return (
    <section className="relative w-full flex flex-col lg:flex-row bg-white min-h-[600px]">
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-16 gap-6">
        {finalLogoSrc && (
          <Image src={finalLogoSrc} alt={finalLogoAlt} width={finalLogoWidth} height={finalLogoHeight} style={{ width: "auto", height: "auto", maxWidth: 180 }} />
        )}
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight" style={{ color: primaryColor }}>{titlePrimary}</h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mt-1" style={{ color: textColor }}>{titleSecondary}</h2>
        </div>
        <p className="text-base md:text-lg leading-relaxed" style={{ color: descriptionColor }}>{description}</p>
        <p className="font-bold text-lg" style={{ color: textColor }}>
          {productName} — <span className="line-through text-red-400 text-base">{originalPrice}</span>{" "}
          <span className="text-xl" style={{ color: primaryColor }}>{discountPrice}</span> {priceSuffix}
        </p>
        <Link href={cta?.href || "#order"} className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-bold text-lg w-fit hover:opacity-90 transition-all shadow-lg" style={{ backgroundColor: primaryColor }}>
          {cta?.text}
        </Link>
      </div>
      <div className="w-full lg:w-1/2 h-[400px] lg:h-auto relative">
        {mainImage && <Image src={mainImage} alt={mainImageAlt} fill className="object-cover" />}
      </div>
    </section>
  );
}
