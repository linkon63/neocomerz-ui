'use client';
import React from 'react';
import SectionHeader from '../SectionHeader';
import { TestimonialsUIProps } from './Testimonials';

export default function TestimonialsV3({
  title = "গ্রাহকের মতামত",
  description = "আমাদের গ্রাহকরা সবসময়ই আমাদের অভিজ্ঞতা নিয়ে সন্তুষ্ট!",
  images = [],
  colors = {}
}: TestimonialsUIProps) {
  const textColor = colors.text || '#1e293b';
  const backgroundColor = colors.background || '#f8fafc';
  const primaryColor = colors.primary || '#1d4ed8';

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor }}>
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        {/* Trust stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { value: "১০,০০০+", label: "সন্তুষ্ট গ্রাহক" },
            { value: "৯৮%", label: "পজিটিভ রিভিউ" },
            { value: "৩ দিন", label: "রিটার্ন পলিসি" },
            { value: "১০০%", label: "অরিজিনাল পণ্য" },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-4 rounded-2xl bg-white border-2 shadow-sm" style={{ borderColor: primaryColor }}>
              <p className="text-2xl md:text-3xl font-extrabold" style={{ color: primaryColor }}>{stat.value}</p>
              <p className="text-xs md:text-sm text-gray-600 mt-1 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
        <SectionHeader
          className="text-center mb-12"
          titleClassName="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
          descriptionClassName="mt-4 max-w-3xl mx-auto text-base md:text-xl leading-relaxed"
          title={<span style={{ color: textColor }}>{title}</span>}
          description={<span style={{ color: textColor }}>{description}</span>}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((testimonial, index) => (
            <div key={`${testimonial.src}-${index}`} className="rounded-2xl overflow-hidden border-2 border-gray-200 hover:border-blue-300 transition-colors shadow-sm">
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
