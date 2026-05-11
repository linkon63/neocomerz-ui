import React from "react";
import Image from "next/image";
import { HeroProps } from "./types";
import { PrimaryButton } from "./Button";
import logoDefault from "./images/neoComerz-logo.svg";
import bgDefault from "./images/heroBg.jpg";

export default function HeroV3({
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
  settings = { overlayOpacity: 10, overlayColor: "#000000", textAlignment: "left", contentAlignment: "left" },
  theme = { primaryColor: "#16a34a", textColor: "#1a1a1a" },
}: HeroProps) {
  const { overlayOpacity = 10, overlayColor = "#000000", textAlignment = "left" } = settings;
  const { primaryColor = "#16a34a", textColor = "#1a1a1a" } = theme;
  const { src: finalLogoSrc = logoDefault.src, alt: finalLogoAlt = "Logo", width: finalLogoWidth = 150, height: finalLogoHeight = 50 } = logo || {};
  const displayTitle = typeof title === "object" ? (title as any).main : title;
  const displaySubtitle = typeof subtitle === "object" ? (subtitle as any).subtitle : subtitle;
  const displayDiscount = typeof discountTag === "object" ? (discountTag as any).discount : discountTag;

  return (
    <section className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden flex items-stretch"
      style={backgroundImage ? { backgroundImage: `url('${backgroundImage}')` } : { backgroundColor: "#f3f4f6" }}>
      <div className="absolute inset-0" style={{ backgroundColor: overlayColor, opacity: (overlayOpacity || 0) / 100 }} />

      {/* Left trust panel */}
      <div className="relative z-10 w-full max-w-xl bg-white/95 backdrop-blur-sm flex flex-col justify-between p-8 md:p-12 border-r border-gray-100">
        <div className="flex flex-col gap-8">
          {finalLogoSrc && (
            <Image src={finalLogoSrc} alt={finalLogoAlt} width={finalLogoWidth} height={finalLogoHeight} style={{ width: "auto", height: "auto" }} priority />
          )}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight" style={{ color: primaryColor, fontSize: titleSize || undefined }}>
              {displayTitle}
            </h1>
            <p className="text-xl md:text-2xl font-normal mt-3" style={{ color: textColor, fontSize: subtitleSize || undefined }}>
              {displaySubtitle}
            </p>
          </div>
          {displayDiscount && (
            <div className="flex items-center gap-3">
              <div className="w-1 h-12 rounded-full" style={{ backgroundColor: primaryColor }} />
              <span className="text-3xl md:text-4xl font-extrabold" style={{ color: primaryColor, fontSize: discountTagSize || undefined }}>
                {displayDiscount}
              </span>
            </div>
          )}
          {/* Trust badges */}
          <div className="grid grid-cols-3 gap-3">
            {["✅ অরিজিনাল", "🚚 দ্রুত ডেলিভারি", "🔄 রিটার্ন পলিসি"].map((badge) => (
              <div key={badge} className="text-center py-3 px-2 rounded-xl border border-gray-200 bg-gray-50 text-xs font-semibold text-gray-700">
                {badge}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 mt-8">
          {cta && <PrimaryButton href={cta.href} icon={cta.icon} style={{ background: primaryColor }}>{cta.text}</PrimaryButton>}
          {secondaryCta?.text && (
            <PrimaryButton href={secondaryCta.href} icon={secondaryCta.icon} variant="secondary" style={{ borderColor: primaryColor, color: primaryColor }}>
              {secondaryCta.text}
            </PrimaryButton>
          )}
        </div>
      </div>
    </section>
  );
}
