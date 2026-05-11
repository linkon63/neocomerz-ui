import React from 'react';
import { LuShoppingBag } from 'react-icons/lu';
import SectionHeader from './SectionHeader';
import Helpline from './Helpline';
import { FeaturesProps } from './types';
import feature1Default from './images/feature-1/feature-1.webp';
import feature2Default from './images/feature-1/feature-2.webp';
import feature3Default from './images/feature-1/feature-3.webp';
import feature4Default from './images/feature-1/feature-4.webp';

const defaultImages = [
  { src: feature1Default.src, alt: 'Feature 1' },
  { src: feature2Default.src, alt: 'Feature 2' },
  { src: feature3Default.src, alt: 'Feature 3' },
  { src: feature4Default.src, alt: 'Feature 4' },
];

export default function FeaturesV4({
  title,
  description,
  features = [],
  images = defaultImages,
  ctaButton = { text: "এখনই অর্ডার করুন", href: "#order-form" },
  tagline = "এটা শুধু একটা ড্রেস না—এটা এখনকার ফ্যাশন ট্রেন্ডের অংশ।",
  colors = { primary: '#FBBF24', text: '#e5e7eb', background: '#0f172a' },
  whatsappNumber = "+880 1712-508063"
}: FeaturesProps) {
  const { primary = '#FBBF24', text = '#e5e7eb', background = '#0f172a' } = colors;

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: background }}>
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight" style={{ color: primary }}>
                {title as React.ReactNode}
              </h2>
              {description && (
                <p className="mt-4 text-base md:text-xl leading-relaxed" style={{ color: text }}>
                  {description as React.ReactNode}
                </p>
              )}
            </div>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 py-3 border-b border-white/10">
                  <span className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-black text-xs font-bold mt-0.5" style={{ backgroundColor: primary }}>✓</span>
                  <span className="text-base md:text-lg font-medium" style={{ color: text }}>{feature.text}</span>
                </li>
              ))}
            </ul>
            <div className="rounded-2xl p-6 border border-white/10" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
              <p className="text-base font-semibold mb-4" style={{ color: primary }}>{tagline}</p>
              <a href={ctaButton.href} className="w-full py-4 rounded-xl text-center text-xl font-extrabold flex items-center justify-center gap-2 hover:brightness-110 active:scale-95 transition-all" style={{ backgroundColor: primary, color: '#0f172a' }}>
                <LuShoppingBag className="w-6 h-6" />
                {ctaButton.text}
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {(images || defaultImages).map((image, index) => (
              <div key={index} className="relative overflow-hidden rounded-2xl aspect-square group border border-white/10">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90" src={image.src} alt={image.alt || `Feature ${index + 1}`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
