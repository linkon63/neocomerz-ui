'use client';
import React, { useState } from 'react';
import { FaPlus, FaMinus, FaWhatsapp } from 'react-icons/fa';
import { FAQUIProps } from './FAQ';

export default function FAQV1({
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
  const primaryColor = colors.primary || '#5b21b6';
  const backgroundColor = colors.background || '#ffffff';
  const faqBackgroundColor = colors.faqBackground || '#f9fafb';

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor }}>
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold" style={{ color: primaryColor }}>{heading}</h2>
          <p className="mt-4 text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
            {descriptionPart1}<span className="font-semibold text-gray-800">{descriptionPart2}</span>{descriptionPart3}
          </p>
        </div>
        <div className="max-w-3xl mx-auto flex flex-col gap-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="rounded-xl border overflow-hidden transition-all" style={{ borderColor: isOpen ? primaryColor : '#e5e7eb', backgroundColor: faqBackgroundColor }}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex justify-between items-center gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-base md:text-lg font-semibold" style={{ color: isOpen ? primaryColor : '#1f2937' }}>{faq.question}</span>
                  <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: isOpen ? primaryColor : '#e5e7eb' }}>
                    {isOpen ? <FaMinus className="w-3 h-3 text-white" /> : <FaPlus className="w-3 h-3 text-gray-600" />}
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="px-5 pb-5 text-sm md:text-base text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-10 flex justify-center">
          <a href={`https://wa.me/${contactNumber.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-xl text-white font-bold shadow-lg hover:opacity-90 transition-all bg-[#25D366]">
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
