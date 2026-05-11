'use client';
import React from 'react';
import SectionHeader from './SectionHeader';
import { TestimonialsUIProps } from './Testimonials';

export default function TestimonialsV4({
  title = "গ্রাহকের মতামত",
  description = "আমাদের গ্রাহকরা সবসময়ই আমাদের অভিজ্ঞতা নিয়ে সন্তুষ্ট!",
  images = [],
  colors = {}
}: TestimonialsUIProps) {
  const textColor = colors.text || '#e2e8f0';
  const backgroundColor = colors.background || '#0f172a';
  const primaryColor = colors.primary || '#FBBF24';

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor }}>
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        <SectionHeader
          className="text-center mb-12"
          titleClassName="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
          descriptionClassName="mt-4 max-w-3xl mx-auto text-base md:text-xl leading-relaxed"
          title={<span style={{ color: primaryColor }}>{title}</span>}
          description={<span style={{ color: textColor }}>{description}</span>}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((testimonial, index) => (
            <div key={`${testimonial.src}-${index}`} className="group rounded-2xl overflow-hidden border border-white/10 hover:border-yellow-400/50 transition-colors">
              <img
                src={testimonial.src}
                alt={testimonial.alt || `Testimonial ${index + 1}`}
                className="w-full h-[500px] object-cover object-bottom group-hover:scale-105 transition-transform duration-300 brightness-90 group-hover:brightness-100"
                loading={index < 4 ? 'eager' : 'lazy'}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
