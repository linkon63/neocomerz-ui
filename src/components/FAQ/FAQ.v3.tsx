'use client';
import React, { useState } from 'react';
import { FaPlus, FaMinus, FaWhatsapp } from 'react-icons/fa';
import { FAQUIProps } from './FAQ';

export default function FAQV3({
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
  const primaryColor = colors.primary || '#16a34a';
  const backgroundColor = colors.background || '#f0fdf4';
  const faqBackgroundColor = colors.faqBackground || '#ffffff';

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor }}>
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold" style={{ color: primaryColor }}>{heading}</h2>
          <p className="mt-4 text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
            {descriptionPart1}<span className="font-semibold" style={{ color: primaryColor }}>{descriptionPart2}</span>{descriptionPart3}
          </p>
        </div>
        {/* Two-column FAQ grid */}
        <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="rounded-2xl border-2 overflow-hidden transition-all shadow-sm hover:shadow-md" style={{ borderColor: isOpen ? primaryColor : '#e5e7eb', backgroundColor: faqBackgroundColor }}>
                <button type="button" onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex justify-between items-start gap-3 px-5 py-4 text-left" aria-expanded={isOpen}>
                  <span className="text-sm md:text-base font-semibold leading-snug" style={{ color: isOpen ? primaryColor : '#1f2937' }}>{faq.question}</span>
                  <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: isOpen ? primaryColor : '#f3f4f6' }}>
                    {isOpen ? <FaMinus className="w-2.5 h-2.5 text-white" /> : <FaPlus className="w-2.5 h-2.5 text-gray-500" />}
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="px-5 pb-5 text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
        {/* Trust footer */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
          <div className="flex items-center gap-3 px-5 py-3 rounded-xl border-2 bg-white" style={{ borderColor: primaryColor }}>
            <span className="text-2xl">🛡️</span>
            <div>
              <p className="text-xs text-gray-500">গ্যারান্টি</p>
              <p className="text-sm font-bold" style={{ color: primaryColor }}>১০০% অরিজিনাল পণ্য</p>
            </div>
          </div>
          <a href={`https://wa.me/${contactNumber.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 rounded-xl text-white font-bold shadow-lg hover:opacity-90 transition-all bg-[#25D366]">
            <FaWhatsapp className="w-5 h-5" />
            <div className="flex flex-col items-start leading-tight">
              <span className="text-xs text-white/80">{contactLabel}</span>
              <span className="text-base font-bold">{contactNumber}</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
