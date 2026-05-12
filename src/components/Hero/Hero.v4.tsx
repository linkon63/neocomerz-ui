import React from "react";
import Image from "next/image";
import { HeroProps } from '../../types/components';
import { PrimaryButton } from '../Button';
import logoDefault from '../../images/neoComerz-logo.svg';
import bgDefault from '../../images/heroBg.jpg';

export default function HeroV4({
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
  settings = { overlayOpacity: 70, overlayColor: "#0a0a0a", textAlignment: "center", contentAlignment: "center" },
  theme = { primaryColor: "#FBBF24", textColor: "#ffffff" },
}: HeroProps) {
  const { overlayOpacity = 70, overlayColor = "#0a0a0a", textAlignment = "center" } = settings;
  const { primaryColor = "#FBBF24", textColor = "#ffffff" } = theme;
  const { src: finalLogoSrc = logoDefault.src, alt: finalLogoAlt = "Logo", width: finalLogoWidth = 150, height: finalLogoHeight = 50 } = logo || {};
  const displayTitle = typeof title === "object" ? (title as any).main : title;
  const displaySubtitle = typeof subtitle === "object" ? (subtitle as any).subtitle : subtitle;
  const displayDiscount = typeof discountTag === "object" ? (discountTag as any).discount : discountTag;

  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden flex flex-col items-center justify-center"
      style={backgroundImage ? { backgroundImage: `url('${backgroundImage}')` } : { backgroundColor: "#0a0a0a" }}
    >
      <div className="absolute inset-0" style={{ backgroundColor: overlayColor, opacity: (overlayOpacity || 0) / 100 }} />
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

      <div className="relative z-10 flex flex-col items-center text-center px-4 gap-8 max-w-3xl mx-auto">
        {finalLogoSrc && (
          <div className="opacity-90">
            <Image src={finalLogoSrc} alt={finalLogoAlt} width={finalLogoWidth} height={finalLogoHeight} style={{ width: "auto", height: "auto", filter: "brightness(0) invert(1)" }} priority />
          </div>
        )}
        <div className="flex flex-col gap-2">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight" style={{ color: primaryColor, fontSize: titleSize || undefined }}>
            {displayTitle}
          </h1>
          <p className="text-xl md:text-2xl font-light tracking-wide" style={{ color: textColor, fontSize: subtitleSize || undefined }}>
            {displaySubtitle}
          </p>
        </div>
        {displayDiscount && (
          <div className="px-8 py-3 rounded-full border-2 text-2xl md:text-3xl font-bold tracking-widest" style={{ borderColor: primaryColor, color: primaryColor, fontSize: discountTagSize || undefined }}>
            {displayDiscount}
          </div>
        )}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          {cta && (
            <a href={cta.href} className="px-10 py-4 rounded-xl text-black text-xl font-extrabold shadow-2xl hover:brightness-110 active:scale-95 transition-all duration-200 text-center" style={{ backgroundColor: primaryColor }}>
              {cta.text}
            </a>
          )}
          {secondaryCta?.text && (
            <a href={secondaryCta.href} className="px-10 py-4 rounded-xl text-xl font-bold border-2 hover:bg-white/10 transition-all duration-200 text-center" style={{ borderColor: primaryColor, color: primaryColor }}>
              {secondaryCta.text}
            </a>
          )}
        </div>
        <div className="flex items-center gap-6 text-white/40 text-xs tracking-widest uppercase">
          <span>Premium</span><span className="w-px h-4 bg-white/20" /><span>Authentic</span><span className="w-px h-4 bg-white/20" /><span>Exclusive</span>
        </div>
      </div>
    </section>
  );
}
