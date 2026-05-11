import React from "react";
import Image from "next/image";

export interface Hero2Props {
  backgroundImage?: string;
  logoSrc?: string;
  logoAlt?: string;
  titlePart1?: string;
  titlePart2?: string;
  titlePart3?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
}

export default function Hero2({
  backgroundImage = "/hero-images/hero-mango.svg",
  logoSrc = "/logo/logo.svg",
  logoAlt = "Radi Natural Shop Logo",
  titlePart1 = "সম্পূর্ণ ফরমালিনমুক্ত নওগাঁর ",
  titlePart2 = "নাকফজলি",
  titlePart3 = " আমের মেলা ",
  description = "নাক ফজলি আম বাংলাদেশের জনপ্রিয় একটি সুস্বাদু জাত, যা আকারে বড়, লম্বাটে ও হালকা বাঁকানো। পাকার পর এর শাঁস নরম, রসালো ও মিষ্টি, সাথে থাকে হালকা টক স্বাদের মিশ্রণ। আঁশ কম হওয়ায় খেতে খুবই মসৃণ লাগে।",
  ctaText = "অর্ডার করুন",
  ctaHref = "#",
}: Hero2Props) {
  return (
    <section className="relative w-full max-w-[1920px] mx-auto min-h-[814px] overflow-hidden bg-white flex items-center">
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-full z-0">
        {backgroundImage && (
          <Image
            src={backgroundImage}
            alt="Background"
            fill
            priority
            className="object-cover"
          />
        )}
      </div>

      <div className="absolute w-[81%] h-[1769.93px] left-[-30%] md:left-[-550px] top-[-450px] origin-top-left rotate-[-14.39deg] bg-orange-500 rounded-full z-0" />
      <div className="absolute w-[80%] h-[1769.93px] left-[-30%] md:left-[-550px] top-[-460px] origin-top-left rotate-[-14.39deg] bg-slate-100 rounded-full z-10" />

      <div className="relative z-30 container mx-auto px-4 sm:px-8 md:px-[120px] pt-[36px] h-full">
        <div className="relative w-24 h-16 md:w-28 md:h-20 mb-12 md:mb-24">
          {logoSrc && (
            <Image
              src={logoSrc}
              alt={logoAlt}
              fill
              className="object-contain"
            />
          )}
        </div>

        <div className="flex flex-col justify-start items-start gap-8 md:gap-10 max-w-full md:max-w-[850px]">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold leading-tight md:leading-[93px] tracking-tight">
              <span className="text-lime-800">{titlePart1}</span>
              <span className="text-orange-500">{titlePart2}</span>
              <span className="text-lime-800">{titlePart3}</span>
            </h1>

            <p className="max-w-full md:max-w-[590px] text-neutral-500 text-base sm:text-lg font-medium leading-relaxed">
              {description}
            </p>
          </div>

          <a href={ctaHref}>
            <button className="group px-6 py-3 sm:px-8 sm:py-3.5 bg-orange-500 hover:bg-orange-600 transition-colors duration-300 rounded-full inline-flex justify-center items-center gap-3 shadow-md hover:shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white group-hover:scale-105 transition-transform duration-300"
              >
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                <path d="M3 6h18" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              <span className="text-white text-lg sm:text-xl font-bold leading-6">
                {ctaText}
              </span>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}