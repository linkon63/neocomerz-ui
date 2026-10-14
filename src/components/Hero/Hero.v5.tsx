import React from "react";
import Image from "next/image";
import { HeroProps } from '../../types/components';
import { PrimaryButton } from '../Button';
import logoDefault from '../../images/neoComerz-logo.svg';
import bgDefault from '../../images/heroBg.jpg';

export default function HeroV5({
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
  settings = { overlayOpacity: 20, overlayColor: "#000000", textAlignment: "center", contentAlignment: "center" },
  theme = { primaryColor: "#7c3aed", textColor: "#1a1a1a" },
}: HeroProps) {
  const { overlayOpacity = 20, overlayColor = "#000000" } = settings;
  const { primaryColor = "#7c3aed", textColor = "#1a1a1a" } = theme;
  const { src: finalLogoSrc = logoDefault.src, alt: finalLogoAlt = "Logo", width: finalLogoWidth = 150, height: finalLogoHeight = 50 } = logo || {};
  const displayTitle = typeof title === "object" ? (title as any).main : title;
  const displaySubtitle = typeof subtitle === "object" ? (subtitle as any).subtitle : subtitle;
  const displayDiscount = typeof discountTag === "object" ? (discountTag as any).discount : discountTag;

  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden flex items-end justify-center pb-0"
      style={backgroundImage ? { backgroundImage: `url('${backgroundImage}')` } : { backgroundColor: "#f3f4f6" }}
    >
      <div className="absolute inset-0" style={{ backgroundColor: overlayColor, opacity: (overlayOpacity || 0) / 100 }} />

      {/* Floating logo top-center */}
      {finalLogoSrc && (
        <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20">
          <Image src={finalLogoSrc} alt={finalLogoAlt} width={finalLogoWidth} height={finalLogoHeight} style={{ width: "auto", height: "auto" }} priority />
        </div>
      )}

      {/* Blob card rising from bottom */}
      <div className="relative z-10 w-full max-w-2xl mx-auto">
        <div
          className="rounded-t-[60px] px-8 pt-12 pb-10 md:px-14 md:pt-16 md:pb-14 flex flex-col items-center gap-6 text-center shadow-2xl"
          style={{ background: `linear-gradient(135deg, ${primaryColor}ee 0%, ${primaryColor}cc 100%)` }}
        >
          {displayDiscount && (
            <span className="px-5 py-1.5 rounded-full bg-white/20 text-white text-sm font-bold tracking-widest uppercase" style={{ fontSize: discountTagSize || undefined }}>
              🔥 {displayDiscount}
            </span>
          )}
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight" style={{ fontSize: titleSize || undefined }}>
            {displayTitle}
          </h1>
          <p className="text-lg md:text-2xl text-white/80 font-medium" style={{ fontSize: subtitleSize || undefined }}>
            {displaySubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-2">
            {cta && (
              <a href={cta.href} className="px-10 py-4 rounded-3xl bg-white text-lg font-extrabold shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 text-center" style={{ color: primaryColor }}>
                {cta.text}
              </a>
            )}
            {secondaryCta?.text && (
              <a href={secondaryCta.href} className="px-10 py-4 rounded-3xl border-2 border-white text-white text-lg font-bold hover:bg-white/10 transition-all duration-200 text-center">
                {secondaryCta.text}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
