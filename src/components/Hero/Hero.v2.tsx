import React from "react";
import Image from "next/image";
import { HeroProps } from '../../types/components';
import { PrimaryButton } from '../Button';
import logoDefault from '../../images/neoComerz-logo.svg';
import bgDefault from '../../images/heroBg.jpg';

export default function HeroV2({
  backgroundImage = bgDefault.src,
  logo = { src: logoDefault.src, alt: "Logo", width: 150, height: 50 },
  title = "👑 STYLISH & COMFORTABLE",
  titleSize,
  subtitle = "✨ LUXURY SUMMER COLLECTION",
  subtitleSize,
  discountTag = "UP TO 50% OFF",
  discountTagSize,
  cta = { text: "SHOP NOW", href: "#" },
  secondaryCta,
  settings = { overlayOpacity: 40, overlayColor: "#000000", textAlignment: "center", contentAlignment: "center" },
  theme = { primaryColor: "#F36621", textColor: "#ffffff" },
}: HeroProps) {
  const { overlayOpacity = 40, overlayColor = "#000000", textAlignment = "center" } = settings;
  const { primaryColor = "#F36621", textColor = "#ffffff" } = theme;
  const { src: finalLogoSrc = logoDefault.src, alt: finalLogoAlt = "Logo", width: finalLogoWidth = 150, height: finalLogoHeight = 50 } = logo || {};
  const displayTitle = typeof title === "object" ? (title as any).main : title;
  const displaySubtitle = typeof subtitle === "object" ? (subtitle as any).subtitle : subtitle;
  const displayDiscount = typeof discountTag === "object" ? (discountTag as any).discount : discountTag;

  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden flex flex-col items-center justify-center"
      style={backgroundImage ? { backgroundImage: `url('${backgroundImage}')` } : { backgroundColor: "#111" }}
    >
      <div className="absolute inset-0" style={{ backgroundColor: overlayColor, opacity: (overlayOpacity || 0) / 100 }} />

      {/* Urgency ticker */}
      <div className="absolute top-0 left-0 right-0 z-20 py-2 text-center text-sm font-bold tracking-widest text-white" style={{ backgroundColor: primaryColor }}>
        🔥 সীমিত স্টক! আজই অর্ডার করুন — অফার শেষ হওয়ার আগেই!
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-4 pt-16 gap-6 max-w-3xl mx-auto">
        {finalLogoSrc && (
          <Image src={finalLogoSrc} alt={finalLogoAlt} width={finalLogoWidth} height={finalLogoHeight} style={{ width: "auto", height: "auto" }} priority />
        )}
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight drop-shadow-lg" style={{ color: textColor, fontSize: titleSize || undefined }}>
          {displayTitle}
        </h1>
        <p className="text-2xl md:text-3xl font-medium" style={{ color: textColor, fontSize: subtitleSize || undefined }}>
          {displaySubtitle}
        </p>
        {displayDiscount && (
          <div className="px-6 py-3 rounded-xl text-white text-3xl md:text-4xl font-extrabold shadow-2xl animate-pulse" style={{ backgroundColor: primaryColor, fontSize: discountTagSize || undefined }}>
            {displayDiscount}
          </div>
        )}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-2">
          {cta && (
            <a href={cta.href} className="w-full sm:w-auto px-10 py-4 rounded-2xl text-white text-xl font-extrabold shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 text-center" style={{ backgroundColor: primaryColor }}>
              🛒 {cta.text}
            </a>
          )}
          {secondaryCta?.text && (
            <a href={secondaryCta.href} className="w-full sm:w-auto px-10 py-4 rounded-2xl text-xl font-bold border-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-200 text-center" style={{ borderColor: primaryColor, color: primaryColor }}>
              {secondaryCta.text}
            </a>
          )}
        </div>
        <p className="text-white/70 text-sm mt-2">✅ ক্যাশ অন ডেলিভারি &nbsp;|&nbsp; ✅ ৩ দিনে রিটার্ন &nbsp;|&nbsp; ✅ ১০০% অরিজিনাল</p>
      </div>
    </section>
  );
}
