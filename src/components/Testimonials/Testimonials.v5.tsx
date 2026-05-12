'use client';
import React from 'react';
import SectionHeader from '../SectionHeader';
import { TestimonialsUIProps } from './Testimonials';

export default function TestimonialsV5({
  title = "গ্রাহকের মতামত",
  description = "আমাদের গ্রাহকরা সবসময়ই আমাদের অভিজ্ঞতা নিয়ে সন্তুষ্ট!",
  images = [],
  colors = {}
}: TestimonialsUIProps) {
  const textColor = colors.text || '#1a1a1a';
  const backgroundColor = colors.background || '#faf5ff';
  const primaryColor = colors.primary || '#7c3aed';

  return (
    <section className="py-16 md:py-24 overflow-hidden" style={{ backgroundColor }}>
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight" style={{ color: primaryColor }}>{title}</h2>
            <p className="mt-3 text-base md:text-xl text-gray-600 max-w-xl">{description}</p>
          </div>
          <div className="flex-shrink-0 flex flex-col items-center gap-2 px-8 py-5 rounded-3xl text-white shadow-xl" style={{ background: `linear-gradient(135deg, ${primaryColor}, ${primaryColor}cc)` }}>
            <span className="text-4xl font-extrabold">৯৮%</span>
            <span className="text-sm font-semibold text-white/80">গ্রাহক সন্তুষ্টি</span>
          </div>
        </div>
        {/* Horizontal scroll on mobile, grid on desktop */}
        <div className="flex gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-3 lg:grid-cols-4 md:overflow-visible snap-x snap-mandatory md:snap-none">
          {images.map((testimonial, index) => (
            <div key={`${testimonial.src}-${index}`} className="flex-shrink-0 w-64 md:w-auto snap-start rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border-2 border-transparent hover:border-purple-300">
              <img
                src={testimonial.src}
                alt={testimonial.alt || `Testimonial ${index + 1}`}
                className="w-full h-[500px] object-cover object-bottom"
                loading={index < 4 ? 'eager' : 'lazy'}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
