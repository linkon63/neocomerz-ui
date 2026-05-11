'use client';
import React from 'react';
import SectionHeader from './SectionHeader';
import { TestimonialsUIProps } from './Testimonials';

export default function TestimonialsV2({
  title = "গ্রাহকের মতামত",
  description = "আমাদের গ্রাহকরা সবসময়ই আমাদের অভিজ্ঞতা নিয়ে সন্তুষ্ট!",
  images = [],
  colors = {}
}: TestimonialsUIProps) {
  const textColor = colors.text || '#1a1a1a';
  const backgroundColor = colors.background || '#fff7ed';
  const primaryColor = colors.primary || '#F36621';

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor }}>
      {/* Urgency header */}
      <div className="text-center py-3 mb-10 text-white font-bold text-sm" style={{ backgroundColor: primaryColor }}>
        ⭐ ১০,০০০+ সন্তুষ্ট গ্রাহক — আপনিও যোগ দিন!
      </div>
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        <SectionHeader
          className="text-center mb-12"
          titleClassName="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight"
          descriptionClassName="mt-4 max-w-3xl mx-auto text-base md:text-xl leading-relaxed"
          title={<span style={{ color: textColor }}>{title}</span>}
          description={<span style={{ color: textColor }}>{description}</span>}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((testimonial, index) => (
            <div key={`${testimonial.src}-${index}`} className="relative group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <img
                src={testimonial.src}
                alt={testimonial.alt || `Testimonial ${index + 1}`}
                className="w-full h-[480px] object-cover object-bottom group-hover:scale-105 transition-transform duration-300"
                loading={index < 4 ? 'eager' : 'lazy'}
              />
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => <span key={i} className="text-yellow-400 text-sm">★</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a href="#order-form" className="inline-block px-10 py-4 rounded-2xl text-white text-lg font-extrabold shadow-xl hover:scale-105 active:scale-95 transition-all" style={{ backgroundColor: primaryColor }}>
            🛒 আমিও অর্ডার করতে চাই
          </a>
        </div>
      </div>
    </section>
  );
}
