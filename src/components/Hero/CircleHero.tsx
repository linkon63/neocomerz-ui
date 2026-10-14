'use client';
import React from 'react';
import Image from 'next/image';
import logoDefault from '../../images/neoComerz-logo.svg';
import productImg1 from '../../images/products/product1.webp';

export interface CircleHeroProps {
  /** Logo displayed at the top */
  logoSrc?: string;
  logoAlt?: string;
  logoWidth?: number;
  logoHeight?: number;
  /** Circular center product image */
  productImage?: string;
  productImageAlt?: string;
  /** Headline texts */
  badge?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  /** Pricing */
  originalPrice?: string;
  discountPrice?: string;
  /** CTA button */
  ctaText?: string;
  ctaHref?: string;
  /** Trust badges below CTA */
  trustBadges?: string[];
  /** Background colour of the section */
  backgroundColor?: string;
  /** Primary accent colour */
  primaryColor?: string;
  /** Text colour */
  textColor?: string;
  /** Ring colour around the circle image */
  ringColor?: string;
}

export default function CircleHero({
  logoSrc = logoDefault.src,
  logoAlt = 'Logo',
  logoWidth = 160,
  logoHeight = 48,
  productImage = productImg1.src,
  productImageAlt = 'Product',
  badge = '🌟 নতুন কালেকশন',
  title = 'প্রিমিয়াম কোয়ালিটি',
  subtitle = 'পোশাকে আনুন নতুনত্ব',
  description = 'আমাদের এক্সক্লুসিভ ডিজাইন আপনাকে দেবে অনন্য স্টাইল। সেরা মানের ফেব্রিক ও নিখুঁত কারুকাজ।',
  originalPrice = '৳1499',
  discountPrice = '৳999',
  ctaText = 'এখনই অর্ডার করুন',
  ctaHref = '#order-form',
  trustBadges = ['✅ ক্যাশ অন ডেলিভারি', '🔄 ৩ দিন রিটার্ন', '🚚 দ্রুত ডেলিভারি'],
  backgroundColor = '#fdf4ff',
  primaryColor = '#9333ea',
  textColor = '#1a1a1a',
  ringColor,
}: CircleHeroProps) {
  const ring = ringColor ?? primaryColor;

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ backgroundColor }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full opacity-20 pointer-events-none"
        style={{ backgroundColor: primaryColor, filter: 'blur(80px)' }}
      />
      <div
        className="absolute -bottom-32 -right-32 w-[380px] h-[380px] rounded-full opacity-15 pointer-events-none"
        style={{ backgroundColor: primaryColor, filter: 'blur(60px)' }}
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 py-16 md:py-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

        {/* ── LEFT: Text content ── */}
        <div className="flex-1 flex flex-col gap-6 items-start order-2 lg:order-1">
          {/* Logo */}
          {logoSrc && (
            <div className="relative" style={{ width: logoWidth, height: logoHeight }}>
              <Image src={logoSrc} alt={logoAlt} fill style={{ objectFit: 'contain' }} priority />
            </div>
          )}

          {/* Badge */}
          {badge && (
            <span
              className="inline-block px-4 py-1.5 rounded-full text-sm font-bold tracking-wide text-white shadow-md"
              style={{ backgroundColor: primaryColor }}
            >
              {badge}
            </span>
          )}

          {/* Headline */}
          <div>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
              style={{ color: primaryColor }}
            >
              {title}
            </h1>
            {subtitle && (
              <h2
                className="text-2xl md:text-3xl lg:text-4xl font-bold mt-2 leading-snug"
                style={{ color: textColor }}
              >
                {subtitle}
              </h2>
            )}
          </div>

          {/* Description */}
          {description && (
            <p className="text-base md:text-lg leading-relaxed text-gray-600 max-w-lg">
              {description}
            </p>
          )}

          {/* Pricing */}
          <div className="flex items-baseline gap-3">
            {originalPrice && (
              <span className="text-xl text-gray-400 line-through">{originalPrice}</span>
            )}
            {discountPrice && (
              <span className="text-4xl md:text-5xl font-extrabold" style={{ color: primaryColor }}>
                {discountPrice}
              </span>
            )}
          </div>

          {/* CTA */}
          <a
            href={ctaHref}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-white text-lg font-extrabold shadow-xl hover:scale-105 active:scale-95 transition-all duration-200"
            style={{ backgroundColor: primaryColor, boxShadow: `0 8px 30px ${primaryColor}50` }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            {ctaText}
          </a>

          {/* Trust badges */}
          {trustBadges && trustBadges.length > 0 && (
            <div className="flex flex-wrap gap-3">
              {trustBadges.map((badge, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-full text-xs font-semibold border"
                  style={{ borderColor: `${primaryColor}60`, color: textColor, backgroundColor: `${primaryColor}10` }}
                >
                  {badge}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* ── RIGHT: Circle image ── */}
        <div className="flex-shrink-0 order-1 lg:order-2 flex items-center justify-center">
          {/* Outer glowing ring */}
          <div
            className="relative rounded-full p-2 md:p-3 shadow-2xl"
            style={{
              background: `conic-gradient(from 0deg, ${ring}, ${ring}80, ${ring}, ${ring}40, ${ring})`,
              padding: '4px',
            }}
          >
            {/* White gap ring */}
            <div className="rounded-full bg-white p-2">
              {/* Image circle */}
              <div
                className="relative rounded-full overflow-hidden w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] md:w-[420px] md:h-[420px]"
              >
                {productImage && (
                  <Image
                    src={productImage}
                    alt={productImageAlt}
                    fill
                    className="object-cover"
                    priority
                  />
                )}
              </div>
            </div>
          </div>

          {/* Floating price badge on the circle */}
          {discountPrice && (
            <div
              className="absolute flex flex-col items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full text-white shadow-xl translate-x-24 sm:translate-x-32 md:translate-x-40 -translate-y-16 md:-translate-y-20"
              style={{ backgroundColor: primaryColor }}
            >
              <span className="text-xs font-bold leading-tight opacity-80">মাত্র</span>
              <span className="text-base md:text-lg font-extrabold leading-tight">{discountPrice}</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
