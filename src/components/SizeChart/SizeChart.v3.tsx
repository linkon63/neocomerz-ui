'use client';
import React, { useState } from 'react';
import { BsWhatsapp, BsChevronDown } from 'react-icons/bs';
import { SizeChartUIProps } from './SizeChart';
import defaultChartImage from '../../images/panjabi-chart.png';

// v3 — Accordion style: click measurement to expand details
export default function SizeChartV3({
  title, description, sizeData = [], chartImage, chartImageAlt,
  whatsappText, whatsappNumber, contactText, returnPolicy, colors = {}
}: SizeChartUIProps) {
  const primary = colors.primary || '#10b981';
  const text = colors.text || '#064e3b';
  const bg = colors.background || '#f0fdf4';
  const sizes = ['M', 'L', 'XL', 'XXL'];
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: bg }}>
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: accordion */}
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-2" style={{ color: text }}>{title || "সাইজ চার্ট"}</h2>
            {description && <p className="text-gray-500 mb-8">{description}</p>}

            <div className="space-y-3">
              {sizeData.map((row, i) => {
                const isOpen = open === i;
                return (
                  <div key={i} className={`rounded-2xl border-2 overflow-hidden transition-all duration-300 ${isOpen ? 'shadow-md' : 'shadow-sm'}`}
                    style={{ borderColor: isOpen ? primary : '#e5e7eb' }}>
                    <button type="button" onClick={() => setOpen(isOpen ? null : i)}
                      className="w-full flex items-center justify-between px-5 py-4 text-left"
                      style={{ backgroundColor: isOpen ? `${primary}10` : '#fff' }}>
                      <div>
                        <p className="font-bold text-base" style={{ color: isOpen ? primary : text }}>{row.measurement}</p>
                        <p className="text-xs text-gray-400">{row.description}</p>
                      </div>
                      <BsChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} style={{ color: primary }} />
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-40' : 'max-h-0'}`}>
                      <div className="grid grid-cols-4 divide-x divide-gray-100 bg-white px-2 pb-4 pt-2">
                        {[row.m, row.l, row.xl, row.xxl].map((val, j) => (
                          <div key={j} className="flex flex-col items-center gap-1 py-2">
                            <span className="text-xs font-bold uppercase" style={{ color: primary }}>{sizes[j]}</span>
                            <span className="text-2xl font-extrabold" style={{ color: text }}>{val || '—'}</span>
                            <span className="text-[10px] text-gray-400">inch</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: chart image + policy */}
          <div className="flex flex-col gap-6">
            {chartImage || defaultChartImage ? (
              <div className="bg-white rounded-3xl border border-gray-100 p-8 flex items-center justify-center shadow-sm">
                <img src={chartImage || defaultChartImage.src} alt={chartImageAlt || "Size chart"} className="max-h-[320px] object-contain" />
              </div>
            ) : null}
            <div className="rounded-3xl p-6 flex flex-col gap-4" style={{ backgroundColor: primary }}>
              <p className="text-white font-semibold leading-relaxed text-base">
                {returnPolicy || "সাইজে সমস্যা হলে ৩ দিনের মধ্যে রিটার্ন বা এক্সচেঞ্জ করুন।"}
              </p>
              <a href={`https://wa.me/${(whatsappNumber || '01712508063').replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-white font-bold hover:opacity-90 transition-all self-start" style={{ color: primary }}>
                <BsWhatsapp className="w-5 h-5" />
                <div className="flex flex-col leading-tight">
                  <span className="text-xs opacity-60">{whatsappText || "যেকোন প্রয়োজনে"}</span>
                  <span className="text-sm font-bold">{whatsappNumber || "01712508063"}</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
