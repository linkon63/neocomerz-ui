'use client';
import React from 'react';
import SectionHeader from '../SectionHeader';
import { TestimonialsUIProps } from './Testimonials';

export default function TestimonialsV0({
  title = "গ্রাহকের মতামত",
  description = "আমাদের গ্রাহকরা সবসময়ই আমাদের অভিজ্ঞতা নিয়ে সন্তুষ্ট!",
  images = [],
  colors = {}
}: TestimonialsUIProps) {
  const textColor = colors.text || '#27272a';
  const backgroundColor = colors.background || '#ffffff';

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor }}>
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        <SectionHeader
          className="text-center mb-12"
          titleClassName="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
          descriptionClassName="mt-4 max-w-3xl mx-auto text-base md:text-xl leading-relaxed"
          title={<span style={{ color: textColor }}>{title}</span>}
          description={<span style={{ color: textColor }}>{description}</span>}
        />
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {images.map((testimonial, index) => (
            <div key={`${testimonial.src}-${index}`} className="break-inside-avoid rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <img
                src={testimonial.src}
                alt={testimonial.alt || `Testimonial ${index + 1}`}
                className="w-full h-auto object-cover"
                loading={index < 4 ? 'eager' : 'lazy'}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
