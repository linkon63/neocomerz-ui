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

export default function FeaturesV3({
  title,
  description,
  features = [],
  images = defaultImages,
  ctaButton = { text: "এখনই অর্ডার করুন", href: "#order-form" },
  tagline = "এটা শুধু একটা ড্রেস না—এটা এখনকার ফ্যাশন ট্রেন্ডের অংশ।",
  colors = { primary: '#1d4ed8', text: '#1e293b', background: '#f8fafc' },
  whatsappNumber = "+880 1712-508063"
}: FeaturesProps) {
  const { primary = '#1d4ed8', text = '#1e293b', background = '#f8fafc' } = colors;

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: background }}>
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        <SectionHeader
          className="text-center mb-12"
          titleClassName="text-3xl md:text-5xl font-bold leading-tight"
          descriptionClassName="mt-4 text-base md:text-xl leading-relaxed max-w-3xl mx-auto"
          title={title}
          description={description}
        />
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Feature cards */}
          <div className="lg:col-span-1 flex flex-col gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-bold" style={{ backgroundColor: primary }}>
                  {index + 1}
                </div>
                <p className="text-sm md:text-base font-medium leading-relaxed" style={{ color: text }}>{feature.text}</p>
              </div>
            ))}
            <div className="mt-4 p-5 rounded-xl border-2" style={{ borderColor: primary, backgroundColor: `${primary}08` }}>
              <p className="text-sm font-semibold mb-3" style={{ color: primary }}>⭐ ১০,০০০+ সন্তুষ্ট গ্রাহক</p>
              <p className="text-xs text-gray-600 leading-relaxed">{tagline}</p>
            </div>
          </div>
          {/* Image grid */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-3">
            {(images || defaultImages).map((image, index) => (
              <div key={index} className="relative overflow-hidden rounded-2xl aspect-square group border border-gray-100 shadow-sm">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={image.src} alt={image.alt || `Feature ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
        {/* CTA row */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href={ctaButton.href} className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white text-lg font-bold shadow-lg hover:opacity-90 transition-all" style={{ backgroundColor: primary }}>
            <LuShoppingBag className="w-5 h-5" />
            {ctaButton.text}
          </a>
          <Helpline whatsappNumber={whatsappNumber} />
        </div>
      </div>
    </section>
  );
}
