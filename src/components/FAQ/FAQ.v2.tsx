'use client';
import React, { useState } from 'react';
import { FaPlus, FaMinus, FaWhatsapp } from 'react-icons/fa';
import { FAQUIProps } from './FAQ';

export default function FAQV2({
  heading = 'সাধারণ প্রশ্ন',
  descriptionPart1 = 'আমাদের গ্রাহকরা সবসময়ই আমাদের অভিজ্ঞতা নিয়ে সন্তুষ্ট! ',
  descriptionPart2 = 'আমরা সর্বোচ্চ মানের সেবা ও পণ্য দেওয়ার চেষ্টা করি,',
  descriptionPart3 = ' যা প্রত্যাশার থেকেও বেশি আনন্দ দেয়।',
  contactLabel = 'যেকোনো প্রয়োজনে',
  contactNumber = '01712508063',
  faqs = [],
  colors = {}
}: FAQUIProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const primaryColor = colors.primary || '#dc2626';
  const backgroundColor = colors.background || '#fff1f2';
  const faqBackgroundColor = colors.faqBackground || '#ffffff';

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor }}>
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left: CTA + urgency */}
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl p-8 text-white" style={{ backgroundColor: primaryColor }}>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-3">{heading}</h2>
              <p className="text-base md:text-lg text-white/90 leading-relaxed">
                {descriptionPart1}<span className="font-bold text-yellow-200">{descriptionPart2}</span>{descriptionPart3}
              </p>
              <div className="mt-6 p-4 rounded-xl bg-white/10 border border-white/20">
                <p className="text-sm font-semibold text-yellow-200 mb-1">⚡ এখনই সিদ্ধান্ত নিন!</p>
                <p className="text-white text-sm">স্টক সীমিত। দেরি করলে পণ্য পাওয়া নাও যেতে পারে।</p>
              </div>
            </div>
            <a href={`https://wa.me/${contactNumber.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-4 rounded-2xl text-white font-bold shadow-xl hover:scale-[1.02] transition-all bg-[#25D366]">
              <FaWhatsapp className="w-7 h-7" />
              <div className="flex flex-col items-start leading-tight">
                <span className="text-xs text-white/80">{contactLabel}</span>
                <span className="text-xl font-extrabold">{contactNumber}</span>
              </div>
            </a>
          </div>
          {/* Right: FAQs */}
          <div className="flex flex-col gap-2">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="rounded-xl overflow-hidden border-l-4 transition-all" style={{ borderColor: isOpen ? primaryColor : 'transparent', backgroundColor: faqBackgroundColor }}>
                  <button type="button" onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex justify-between items-center gap-4 px-5 py-4 text-left" aria-expanded={isOpen}>
                    <span className="text-base md:text-lg font-semibold" style={{ color: isOpen ? primaryColor : '#1f2937' }}>{faq.question}</span>
                    <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: isOpen ? primaryColor : '#f3f4f6' }}>
                      {isOpen ? <FaMinus className="w-3 h-3 text-white" /> : <FaPlus className="w-3 h-3 text-gray-500" />}
                    </div>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="px-5 pb-5 text-sm md:text-base text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
