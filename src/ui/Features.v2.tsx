import React from 'react';
import { LuShoppingBag } from 'react-icons/lu';
import CheckListItem from './CheckListItem';
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

export default function FeaturesV2({
  title,
  description,
  features = [],
  images = defaultImages,
  ctaButton = { text: "এখনই অর্ডার করুন", href: "#order-form" },
  tagline = "এটা শুধু একটা ড্রেস না—এটা এখনকার ফ্যাশন ট্রেন্ডের অংশ।",
  colors = { primary: '#dc2626', text: '#1a1a1a', background: '#fff7ed' },
  whatsappNumber = "+880 1712-508063"
}: FeaturesProps) {
  const { primary = '#dc2626', text = '#1a1a1a', background = '#fff7ed' } = colors;

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: background }}>
      {/* Urgency banner */}
      <div className="text-center py-3 mb-10 text-white font-bold text-sm md:text-base tracking-wide" style={{ backgroundColor: primary }}>
        ⚡ সীমিত সময়ের অফার! স্টক শেষ হওয়ার আগেই অর্ডার করুন!
      </div>
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="flex flex-col gap-6">
            <SectionHeader
              className="text-left mb-0"
              titleClassName="text-3xl md:text-5xl font-extrabold leading-tight"
              descriptionClassName="mt-3 text-base md:text-xl leading-relaxed max-w-none mx-0"
              title={title}
              description={description}
            />
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <CheckListItem key={index} iconClassName="w-6 h-6 text-green-500 flex-shrink-0" textClassName="text-base md:text-lg font-semibold">
                  {feature.text}
                </CheckListItem>
              ))}
            </ul>
            {/* High-conversion CTA block */}
            <div className="rounded-2xl p-6 flex flex-col gap-4" style={{ backgroundColor: primary }}>
              <p className="text-white text-xl md:text-2xl font-bold">{tagline}</p>
              <a href={ctaButton.href} className="w-full py-4 rounded-xl bg-white text-center text-xl font-extrabold shadow-lg hover:scale-[1.02] active:scale-95 transition-all duration-200 flex items-center justify-center gap-2" style={{ color: primary }}>
                <LuShoppingBag className="w-6 h-6" />
                🛒 {ctaButton.text}
              </a>
              <div className="flex justify-center">
                <Helpline whatsappNumber={whatsappNumber} />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {(images || defaultImages).map((image, index) => (
              <div key={index} className="relative overflow-hidden rounded-2xl aspect-square group shadow-md">
                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src={image.src} alt={image.alt || `Feature ${index + 1}`} />
                {index === 0 && (
                  <div className="absolute top-2 left-2 px-3 py-1 rounded-full text-white text-xs font-bold" style={{ backgroundColor: primary }}>
                    BESTSELLER
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
  