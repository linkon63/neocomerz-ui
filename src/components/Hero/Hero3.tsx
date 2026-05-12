import React from "react";
import Image from "next/image";
import logoDefault from '../../images/neoComerz-logo.svg';
import productImg1 from '../../images/products/product1.webp';
import productImg2 from '../../images/products/product2.webp';

export interface Hero3Props {
  leftLeafImage?: string;
  logoSrc?: string;
  logoAlt?: string;
  titleLine1?: string;
  titleLine2?: string;
  description?: string;
  priceLabel?: string;
  price?: string;
  ctaText?: string;
  ctaHref?: string;
  phoneNumber?: string;
  centerImage?: string;
  centerImageAlt?: string;
  badgeImage?: string;
  badgeImageAlt?: string;
  rightLeafImage?: string;
}

export default function Hero3({
  leftLeafImage,
  logoSrc = logoDefault.src,
  logoAlt = "Logo",
  titleLine1 = "নওগাঁর ঐতিহ্যবাহী ফরমালিনমুক্ত",
  titleLine2 = "নাকফজলি আম",
  description = "নাক ফজলি আম বাংলাদেশের জনপ্রিয় একটি সুস্বাদু জাত, যা আকারে বড়, লম্বাটে ও হালকা বাঁকানো। পাকার পর এর শাঁস নরম, রসালো ও মিষ্টি, সাথে থাকে হালকা টক স্বাদের মিশ্রণ। আঁশ কম হওয়ায় খেতে খুবই মসৃণ লাগে।",
  priceLabel = "প্রতিকোজি আম এখন পাচ্ছেন",
  price = "মাত্র ২০০ টাকায়",
  ctaText = "অর্ডার করুন",
  ctaHref = "#",
  phoneNumber = "01712508063",
  centerImage = productImg1.src,
  centerImageAlt = "Product",
  badgeImage,
  badgeImageAlt = "Badge",
  rightLeafImage,
}: Hero3Props) {
  return (
    <section className="relative w-full max-w-[1920px] mx-auto min-h-[800px] flex flex-col bg-[#F6F6F6] overflow-hidden">
      {leftLeafImage && (
        <div className="absolute top-[-20px] left-[-20px] w-64 h-64 z-0 pointer-events-none">
          <Image
            src={leftLeafImage}
            alt="Decorative leaves"
            fill
            className="object-contain object-top-left"
          />
        </div>
      )}

      <div className="relative z-10 w-full px-4 md:px-8 flex flex-col items-center pt-12 pb-32">
        <div className="relative w-32 h-20 mb-8">
          {logoSrc && (
            <Image
              src={logoSrc}
              alt={logoAlt}
              fill
              className="object-contain"
            />
          )}
        </div>
        <div className="text-center max-w-4xl mx-auto mb-6">
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold leading-tight mb-4">
            <span className="text-[#207019]">
              {titleLine1}
              <br />
            </span>
            <span className="text-[#F17816] mt-2 block">{titleLine2}</span>
          </h1>
          <p className="text-gray-500 text-sm md:text-base max-w-[700px] mx-auto leading-relaxed">
            {description}
          </p>
        </div>
        <div className="relative w-full max-w-[1200px] mt-24">
          <div className="w-full bg-[#1A3414] rounded-[24px] h-[180px] flex items-center justify-between px-10 md:px-20 relative z-10 shadow-lg">
            <div className="flex flex-col gap-3 w-1/3">
              <h3 className="text-white text-xl md:text-2xl font-semibold">
                {priceLabel}
              </h3>
              <div className="w-fit border-[1.5px] border-white/40 rounded-lg px-6 py-2 transform -rotate-[3deg]">
                <span className="text-[#F17816] font-bold text-xl md:text-2xl">
                  {price}
                </span>
              </div>
            </div>

            <div className="flex flex-col items-end gap-3 w-1/3 text-right">
              <a href={ctaHref}>
                <button className="bg-[#F17816] hover:bg-[#d66a13] transition-colors rounded-full px-8 py-3 flex items-center gap-2 shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                    <path d="M3 6h18" />
                    <path d="M16 10a4 4 0 0 1-8 0" />
                  </svg>
                  <span className="text-white font-bold text-lg">
                    {ctaText}
                  </span>
                </button>
              </a>

              <div className="flex flex-col items-end leading-tight">
                <span className="text-white/80 text-sm">অথবা কল করুনঃ</span>
                <a
                  href={`tel:${phoneNumber}`}
                  className="text-[#F17816] font-bold text-xl hover:underline"
                >
                  {phoneNumber}
                </a>
              </div>
            </div>
          </div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] z-20 pointer-events-none">
            <div className="w-full h-full rounded-full border-[6px] border-white overflow-hidden relative bg-white shadow-xl">
              {centerImage && (
                <Image
                  src={centerImage}
                  alt={centerImageAlt || ""}
                  fill
                  className="object-cover"
                />
              )}
            </div>

            {badgeImage && (
              <div className="absolute top-[-20px] left-1/2 -translate-x-1/2 w-28 h-28 z-30 drop-shadow-md">
                <Image
                  src={badgeImage}
                  alt={badgeImageAlt || ""}
                  fill
                  className="object-contain"
                />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 w-full h-[180px] bg-black z-0"></div>

      {rightLeafImage && (
        <div className="absolute bottom-[140px] right-[-20px] w-48 h-32 z-10 pointer-events-none">
          <Image
            src={rightLeafImage}
            alt="Decorative leaves"
            fill
            className="object-cover object-bottom-right"
          />
        </div>
      )}
    </section>
  );
}