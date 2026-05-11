import React from "react";
import Image from "next/image";
import { HeroProps } from "./types";
import { PrimaryButton } from "./Button";
import logoDefault from "./images/neoComerz-logo.svg";
import bgDefault from "./images/heroBg.jpg";

export default function HeroV1({
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
  settings = { overlayOpacity: 10, overlayColor: "#000000", textAlignment: "center", contentAlignment: "right" },
  theme = { primaryColor: "#F36621", textColor: "#222F28" },
}: HeroProps) {
  const { overlayOpacity = 10, overlayColor = "#000000", textAlignment = "center", contentAlignment = "right" } = settings;
  const { primaryColor = "#F36621", textColor = "#222F28" } = theme;
  const { src: finalLogoSrc = logoDefault.src, alt: finalLogoAlt = "Logo", width: finalLogoWidth = 150, height: finalLogoHeight = 50 } = logo || {};
  const displayTitle = typeof title === "object" ? (title as any).main : title;
  const displaySubtitle = typeof subtitle === "object" ? (subtitle as any).subtitle : subtitle;
  const displayDiscount = typeof discountTag === "object" ? (discountTag as any).discount : discountTag;

  const textAlignClass = textAlignment === "left" ? "text-left items-start" : textAlignment === "right" ? "text-right items-end" : "text-center items-center";

  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden flex items-end justify-center"
      style={backgroundImage ? { backgroundImage: `url('${backgroundImage}')` } : { backgroundColor: "#f3f4f6" }}
    >
      <div className="absolute inset-0" style={{ backgroundColor: overlayColor, opacity: (overlayOpacity || 0) / 100 }} />
      <div className="relative z-10 w-full max-w-lg mx-auto px-6 pb-12 md:pb-20">
        <div className={`bg-white/95 backdrop-blur-md rounded-2xl border border-white/60 shadow-sm p-8 md:p-10 flex flex-col gap-6 ${textAlignClass}`}>
          {finalLogoSrc && (
            <Image src={finalLogoSrc} alt={finalLogoAlt} width={finalLogoWidth} height={finalLogoHeight} style={{ width: "auto", height: "auto" }} priority />
          )}
          <div className={`flex flex-col gap-1 ${textAlignClass}`}>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight" style={{ color: primaryColor, fontSize: titleSize || undefined }}>
              {displayTitle}
            </h1>
            <p className="text-xl md:text-2xl font-light mt-1" style={{ color: textColor, fontSize: subtitleSize || undefined }}>
              {displaySubtitle}
            </p>
          </div>
          {displayDiscount && (
            <div className="inline-block px-4 py-1.5 rounded-full border" style={{ borderColor: primaryColor }}>
              <span className="text-lg font-semibold tracking-wide" style={{ color: primaryColor, fontSize: discountTagSize || undefined }}>
                {displayDiscount}
              </span>
            </div>
          )}
          <div className="flex flex-col sm:flex-row gap-3 w-full">
            {cta && <PrimaryButton href={cta.href} icon={cta.icon} style={{ background: primaryColor }}>{cta.text}</PrimaryButton>}
            {secondaryCta?.text && (
              <PrimaryButton href={secondaryCta.href} icon={secondaryCta.icon} variant="secondary" style={{ borderColor: primaryColor, color: primaryColor }}>
                {secondaryCta.text}
              </PrimaryButton>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
