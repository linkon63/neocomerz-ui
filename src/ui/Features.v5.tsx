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

export default function FeaturesV5({
  title,
  description,
  features = [],
  images = defaultImages,
  ctaButton = { text: "এখনই অর্ডার করুন", href: "#order-form" },
  tagline = "এটা শুধু একটা ড্রেস না—এটা এখনকার ফ্যাশন ট্রেন্ডের অংশ।",
  colors = { primary: '#7c3aed', text: '#1a1a1a', background: '#faf5ff' },
  whatsappNumber = "+880 1712-508063"
}: FeaturesProps) {
  const { primary = '#7c3aed', text = '#1a1a1a', background = '#faf5ff' } = colors;
  const imgs = images || defaultImages;

  return (
    <section className="py-16 md:py-24 overflow-hidden" style={{ backgroundColor: background }}>
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        <SectionHeader
          className="text-center mb-12"
          titleClassName="text-3xl md:text-5xl font-bold leading-tight"
          descriptionClassName="mt-4 text-base md:text-xl leading-relaxed max-w-3xl mx-auto"
          title={title}
          description={description}
        />
        {/* Overlapping layout */}
        <div className="relative flex flex-col lg:flex-row gap-0 items-stretch">
          {/* Image collage */}
          <div className="w-full lg:w-1/2 relative h-[400px] md:h-[560px]">
            {imgs[0] && (
              <div className="absolute top-0 left-0 w-[65%] h-[65%] rounded-3xl overflow-hidden shadow-xl z-10">
                <img className="w-full h-full object-cover" src={imgs[0].src} alt={imgs[0].alt || 'Feature 1'} />
              </div>
            )}
            {imgs[1] && (
              <div className="absolute bottom-0 right-0 w-[60%] h-[60%] rounded-3xl overflow-hidden shadow-xl z-20">
                <img className="w-full h-full object-cover" src={imgs[1].src} alt={imgs[1].alt || 'Feature 2'} />
              </div>
            )}
            {imgs[2] && (
              <div className="absolute top-[30%] right-[5%] w-[40%] h-[40%] rounded-3xl overflow-hidden shadow-lg z-30 border-4 border-white">
                <img className="w-full h-full object-cover" src={imgs[2].src} alt={imgs[2].alt || 'Feature 3'} />
              </div>
            )}
          </div>
          {/* Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center gap-6 lg:pl-12 pt-8 lg:pt-0">
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <CheckListItem key={index} iconClassName="w-6 h-6 flex-shrink-0" textClassName="text-base md:text-lg font-semibold">
                  {feature.text}
                </CheckListItem>
              ))}
            </ul>
            <div className="rounded-3xl p-6 relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${primary} 0%, ${primary}cc 100%)` }}>
              <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/10" />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-white/10" />
              <p className="relative text-white text-base font-semibold mb-4">{tagline}</p>
              <a href={ctaButton.href} className="relative w-full py-4 rounded-2xl bg-white text-center text-lg font-extrabold flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all shadow-lg" style={{ color: primary }}>
                <LuShoppingBag className="w-5 h-5" />
                {ctaButton.text}
              </a>
            </div>
            <div className="flex justify-start">
              <Helpline whatsappNumber={whatsappNumber} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
