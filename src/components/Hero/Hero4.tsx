import React from "react";
import Image from "next/image";

export interface Hero4Props {
  leftLeafImage?: string;
  rightLeafImage?: string;
  titleLine1?: string;
  titleLine2?: string;
  titleLine3?: string;
  mangoBannerImage?: string;
  mangoCircleImage?: string;
  badgeTextLine1?: string;
  badgeTextLine2?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  phoneNumber?: string;
}

export default function Hero4({
  leftLeafImage = "/hero-images/left-leap.png",
  rightLeafImage = "/hero-images/dubble-leap.png",
  titleLine1 = "খাঁটি, রসালো ও",
  titleLine2 = "ফরমালিনমুক্ত ",
  titleLine3 = "আমের\nনিশ্চয়তা",
  mangoBannerImage = "/hero-images/mango-banner.webp",
  mangoCircleImage = "/hero-images/mango-circle.webp",
  badgeTextLine1 = "100%",
  badgeTextLine2 = "ফরমালিনমুক্ত",
  description = "আমাদের বাগান থেকে সরাসরি সংগ্রহ করা টাটকা, রসালো ও কেমিক্যালমুক্ত দেশি আম এখন পাচ্ছেন অনলাইনে। প্রথম কামড়েই টের পাবেন খাঁটি দেশি আমের পার্থক্য। স্বাদের টান আপনাকে বারবার ফিরিয়ে আনবে",
  ctaText = "অর্ডার করুন",
  ctaHref = "#",
  phoneNumber = "01738552161",
}: Hero4Props) {
  return (
    <section className="relative w-full max-w-[1920px] mx-auto min-h-[1400px] bg-[#F8F9FA] overflow-hidden flex flex-col font-sans">
      {leftLeafImage && (
        <div className="absolute top-0 left-0 w-48 h-64 md:w-80 md:h-96 z-0 pointer-events-none opacity-90">
          <Image
            src={leftLeafImage}
            alt=""
            fill
            className="object-contain object-top-left"
          />
        </div>
      )}
      {rightLeafImage && (
        <div className="absolute top-[20%] right-[-50px] w-40 h-40 md:w-64 md:h-64 z-0 pointer-events-none opacity-80 rotate-[15deg]">
          <Image
            src={rightLeafImage}
            alt=""
            fill
            className="object-contain object-top-right"
          />
        </div>
      )}

      <div className="relative z-10 w-full flex flex-col items-center pt-24 md:pt-32 pb-16 px-4">
        <h1 className="text-5xl md:text-7xl lg:text-[100px] font-bold text-center leading-[1.1] tracking-tight">
          <span className="text-[#3A7D22]">
            {titleLine1}
            <br />
          </span>
          <span className="text-[#F17816]">{titleLine2}</span>
          <span className="text-[#3A7D22]">
            {titleLine3.split("\n").map((line, i) => (
              <React.Fragment key={i}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </span>
        </h1>
      </div>

      <div className="relative w-full h-[400px] md:h-[600px] flex items-center justify-center mt-12 mb-24">
        <div className="absolute inset-0 w-full h-[250px] md:h-[400px] top-1/2 -translate-y-1/2 z-0">
          {mangoBannerImage && (
            <Image
              src={mangoBannerImage}
              alt="Mango Tree Background"
              fill
              className="object-cover"
            />
          )}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 w-full text-center z-10 select-none pointer-events-none flex justify-center">
          <span className="text-[140px] sm:text-[220px] md:text-[300px] lg:text-[400px] font-bold text-white leading-none tracking-widest">
            MANGO
          </span>
        </div>
        <div className="relative z-20 w-[350px] h-[350px] md:w-[550px] md:h-[550px] lg:w-[700px] lg:h-[700px] rounded-full shadow-[0px_0px_90px_0px_rgba(0,0,0,0.4)]">
          {mangoCircleImage && (
            <Image
              src={mangoCircleImage}
              alt="Basket full of mangoes"
              fill
              className="object-cover rounded-full"
              priority
            />
          )}
        </div>

        <div className="absolute top-1/2 -translate-y-1/2 w-full text-center z-30 select-none pointer-events-none flex justify-center">
          <span
            className="text-[140px] sm:text-[220px] md:text-[300px] lg:text-[400px] font-bold leading-none tracking-widest"
            style={{
              WebkitTextFillColor: "transparent",
              WebkitTextStroke: "4px white",
            }}
          >
            MANGO
          </span>
        </div>
      </div>
      <div className="relative z-40 w-full max-w-[1400px] mx-auto px-6 lg:px-12 pb-32 mt-12 md:mt-24">
        <div className="absolute -top-16 md:-top-20 left-2 md:left-4 z-50 w-36 h-36 md:w-48 md:h-48 transform -rotate-[15deg]">
          <svg
            viewBox="0 0 100 100"
            className="absolute inset-0 w-full h-full text-[#F17816] fill-current drop-shadow-xl"
          >
            <polygon points="50,0 61,15 78,11 82,28 98,35 87,49 98,64 82,71 78,88 61,84 50,100 39,84 22,88 18,71 2,64 13,49 2,35 18,28 22,11 39,15" />
          </svg>
          <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-white pb-2">
            <span className="text-3xl md:text-5xl font-bold leading-none">
              {badgeTextLine1}
            </span>
            <span className="text-sm md:text-lg font-bold mt-1 tracking-wide">
              {badgeTextLine2}
            </span>
          </div>
        </div>

        <div className="bg-[#213713] rounded-[40px] px-8 py-16 md:px-24 md:py-20 flex flex-col items-center gap-12 shadow-2xl">
          <p className="text-white text-center text-xl md:text-3xl leading-[1.6] md:leading-[48px] max-w-5xl font-medium">
            {description}
          </p>

          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 w-full">
            <a href={ctaHref}>
              <button className="group bg-[#F17816] hover:bg-[#d66a13] text-white px-12 py-5 rounded-3xl text-2xl md:text-3xl font-bold flex items-center gap-4 transition-all duration-300 hover:scale-[1.03] shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:-translate-y-1 transition-transform"
                >
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                  <path d="M3 6h18" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
                {ctaText}
              </button>
            </a>
            <div className="flex flex-col items-center md:items-start gap-1 text-white">
              <span className="text-xl md:text-2xl font-light">
                অথবা কল করুনঃ
              </span>
              <a
                href={`tel:${phoneNumber}`}
                className="text-[#F17816] text-3xl md:text-4xl font-bold hover:text-white transition-colors"
              >
                {phoneNumber}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}