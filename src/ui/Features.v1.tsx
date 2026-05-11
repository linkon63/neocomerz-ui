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

export default function FeaturesV1({
  title,
  description,
  features = [],
  images = defaultImages,
  ctaButton = { text: "এখনই অর্ডার করুন", href: "#order-form" },
  tagline = "এটা শুধু একটা ড্রেস না—এটা এখনকার ফ্যাশন ট্রেন্ডের অংশ।",
  colors = { primary: '#F36621', text: '#222F28', background: '#ffffff' },
  whatsappNumber = "+880 1712-508063"
}: FeaturesProps) {
  const { primary = '#F36621', text = '#222F28', background = '#ffffff' } = colors;

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: background }}>
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex flex-col gap-10">
          <SectionHeader
            className="text-center mb-0"
            titleClassName="text-3xl md:text-5xl font-bold leading-tight"
            descriptionClassName="mt-4 text-base md:text-xl leading-relaxed max-w-3xl mx-auto"
            title={title}
            description={description}
          />
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            {/* Image grid */}
            <div className="grid grid-cols-2 gap-3">
              {(images || defaultImages).map((image, index) => (
                <div key={index} className="relative overflow-hidden rounded-xl aspect-square group">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src={image.src} alt={image.alt || `Feature ${index + 1}`} />
                </div>
              ))}
            </div>
            {/* Features list */}
            <div className="flex flex-col gap-6">
              <ul className="space-y-3 divide-y divide-gray-100">
                {features.map((feature, index) => (
                  <li key={index} className="pt-3 first:pt-0">
                    <CheckListItem
                      iconClassName="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
                      textClassName="text-base md:text-lg font-medium leading-relaxed"
                    >
                      {feature.text}
                    </CheckListItem>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-4 items-start mt-4">
                <a href={ctaButton.href} className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white text-lg hover:opacity-90 transition-all" style={{ backgroundColor: primary }}>
                  <LuShoppingBag className="w-5 h-5" />
                  {ctaButton.text}
                </a>
                <Helpline whatsappNumber={whatsappNumber} />
              </div>
              {tagline && (
                <p className="text-sm md:text-base font-medium italic border-l-4 pl-4" style={{ borderColor: primary, color: text }}>
                  {tagline}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
