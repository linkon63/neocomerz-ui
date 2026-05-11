import React from "react";
import Image from "next/image";
import Link from "next/link";
import { LayeredHeroProps } from "./types";
import layeredHeroMainDefault from './images/hero-2/hero-main.webp';
import layeredHeroLogoDefault from './images/hero-3/Logo.svg';

export default function LayeredHeroV2({
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
  cta = { text: "অর্ডার করুন (৩০% ছাড়ে)", href: "#order" },
  settings = { showWatermark: false, showShadow: false, showPolaroid: false, showCtaIcon: true },
  theme = { primaryColor: "#dc2626", textColor: "#1a1a1a", descriptionColor: "#6B6B6B" },
}: LayeredHeroProps) {
  const { primaryColor = "#dc2626", textColor = "#1a1a1a", descriptionColor = "#6B6B6B" } = theme;
  const { src: finalLogoSrc = layeredHeroLogoDefault.src, alt: finalLogoAlt = "Logo", width: finalLogoWidth = 230, height: finalLogoHeight = 60 } = logo || {};

  return (
    <section className="relative w-full min-h-screen bg-cover bg-center overflow-hidden flex items-end" style={mainImage ? { backgroundImage: `url('${mainImage}')` } : {}}>
      <div className="absolute inset-0 bg-black/50" />
      {/* Urgency ticker */}
      <div className="absolute top-0 left-0 right-0 z-20 py-2 text-center text-sm font-bold text-white" style={{ backgroundColor: primaryColor }}>
        🔥 সীমিত স্টক! আজই অর্ডার করুন!
      </div>
      <div className="relative z-10 w-full max-w-2xl mx-auto px-6 pb-12 pt-20">
        {finalLogoSrc && (
          <div className="mb-6">
            <Image src={finalLogoSrc} alt={finalLogoAlt} width={finalLogoWidth} height={finalLogoHeight} style={{ width: "auto", height: "auto", maxWidth: 160, filter: "brightness(0) invert(1)" }} />
          </div>
        )}
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">{titlePrimary} {titleSecondary}</h1>
        <p className="mt-4 text-base md:text-lg text-white/80 leading-relaxed">{description}</p>
        <div className="mt-4 flex items-center gap-3">
          <span className="text-white/60 line-through text-lg">{originalPrice}</span>
          <span className="text-3xl font-extrabold" style={{ color: primaryColor }}>{discountPrice}</span>
          <span className="text-white/70 text-sm">{priceSuffix}</span>
        </div>
        <Link href={cta?.href || "#order"} className="mt-6 inline-flex items-center gap-2 px-10 py-4 rounded-2xl text-white font-extrabold text-xl w-full sm:w-auto justify-center hover:scale-105 active:scale-95 transition-all shadow-2xl" style={{ backgroundColor: primaryColor }}>
          🛒 {cta?.text}
        </Link>
        <p className="mt-4 text-white/50 text-xs text-center">✅ ক্যাশ অন ডেলিভারি &nbsp;|&nbsp; ✅ ৩ দিনে রিটার্ন</p>
      </div>
    </section>
  );
}
