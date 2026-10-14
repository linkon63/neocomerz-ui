import React from "react";
import Image from "next/image";
import Link from "next/link";
import { LayeredHeroProps } from '../../types/components';
import layeredHeroMainDefault from '../../images/hero-2/hero-main.webp';
import layeredHeroLogoDefault from '../../images/hero-3/Logo.svg';

export default function LayeredHeroV3({
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
  theme = { primaryColor: "#16a34a", textColor: "#1a1a1a", descriptionColor: "#6B6B6B" },
}: LayeredHeroProps) {
  const { primaryColor = "#16a34a", textColor = "#1a1a1a", descriptionColor = "#6B6B6B" } = theme;
  const { src: finalLogoSrc = layeredHeroLogoDefault.src, alt: finalLogoAlt = "Logo", width: finalLogoWidth = 230, height: finalLogoHeight = 60 } = logo || {};

  return (
    <section className="relative w-full flex flex-col lg:flex-row bg-gray-50 min-h-[600px]">
      <div className="w-full lg:w-1/2 h-[400px] lg:h-auto relative order-first lg:order-last">
        {mainImage && <Image src={mainImage} alt={mainImageAlt} fill className="object-cover" />}
      </div>
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-16 gap-6 bg-white border-r border-gray-100">
        {finalLogoSrc && (
          <Image src={finalLogoSrc} alt={finalLogoAlt} width={finalLogoWidth} height={finalLogoHeight} style={{ width: "auto", height: "auto", maxWidth: 180 }} />
        )}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight" style={{ color: primaryColor }}>{titlePrimary}</h1>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mt-1" style={{ color: textColor }}>{titleSecondary}</h2>
        </div>
        <p className="text-base md:text-lg leading-relaxed" style={{ color: descriptionColor }}>{description}</p>
        {/* Trust badges */}
        <div className="grid grid-cols-3 gap-2">
          {["✅ অরিজিনাল", "🚚 দ্রুত ডেলিভারি", "🔄 রিটার্ন পলিসি"].map((b) => (
            <div key={b} className="text-center py-2 px-1 rounded-xl border border-gray-200 bg-gray-50 text-xs font-semibold text-gray-700">{b}</div>
          ))}
        </div>
        <p className="font-bold text-lg" style={{ color: textColor }}>
          {productName} — <span className="line-through text-red-400 text-base">{originalPrice}</span>{" "}
          <span className="text-xl" style={{ color: primaryColor }}>{discountPrice}</span> {priceSuffix}
        </p>
        <Link href={cta?.href || "#order"} className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-bold text-lg w-fit hover:opacity-90 transition-all shadow-lg" style={{ backgroundColor: primaryColor }}>
          {cta?.text}
        </Link>
      </div>
    </section>
  );
}
