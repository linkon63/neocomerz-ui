import React from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import { SizeChartUIProps } from './SizeChart';

// v1 — Card Grid: each measurement as a visual card with size columns
export default function SizeChartV1({
  title, description, sizeData = [], chartImage, chartImageAlt,
  whatsappText, whatsappNumber, contactText, returnPolicy, colors = {}
}: SizeChartUIProps) {
  const primary = colors.primary || '#F36621';
  const text = colors.text || '#27272a';
  const bg = colors.background || '#fff7ed';
  const sizes = ['M', 'L', 'XL', 'XXL'];

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: bg }}>
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold" style={{ color: text }}>{title || "সাইজ চার্ট"}</h2>
            {description && <p className="mt-2 text-base md:text-lg text-gray-500">{description}</p>}
          </div>
          {/* Size legend pills */}
          <div className="flex gap-2">
            {sizes.map(s => (
              <span key={s} className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-md" style={{ backgroundColor: primary }}>{s}</span>
            ))}
          </div>
        </div>

        {/* Measurement Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {sizeData.map((row, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
              {/* Card header */}
              <div className="px-5 py-4 border-b border-gray-100" style={{ backgroundColor: `${primary}12` }}>
                <p className="font-bold text-base" style={{ color: primary }}>{row.measurement}</p>
                <p className="text-xs text-gray-500 mt-0.5">{row.description}</p>
              </div>
              {/* Size values */}
              <div className="grid grid-cols-4 divide-x divide-gray-100">
                {[row.m, row.l, row.xl, row.xxl].map((val, j) => (
                  <div key={j} className="flex flex-col items-center py-4 gap-1">
                    <span className="text-[10px] font-bold text-gray-400 uppercase">{sizes[j]}</span>
                    <span className="text-lg font-bold" style={{ color: text }}>{val || '—'}</span>
                    <span className="text-[10px] text-gray-400">inch</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom row: chart image + policy */}
        <div className="grid lg:grid-cols-2 gap-6">
          {chartImage && (
            <div className="bg-white rounded-2xl border border-gray-100 p-6 flex items-center justify-center min-h-[200px]">
              <img src={chartImage} alt={chartImageAlt || "Size chart"} className="max-h-[300px] object-contain" />
            </div>
          )}
          <div className="rounded-2xl p-6 flex flex-col justify-between gap-4" style={{ backgroundColor: primary }}>
            <p className="text-white text-base md:text-lg font-semibold leading-relaxed">
              {returnPolicy || "সাইজে সমস্যা হলে ৩ দিনের মধ্যে রিটার্ন বা এক্সচেঞ্জ করুন।"}
            </p>
            <a href={`https://wa.me/${(whatsappNumber || '01712508063').replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-white font-bold hover:opacity-90 transition-all self-start" style={{ color: primary }}>
              <BsWhatsapp className="w-5 h-5" />
              <div className="flex flex-col leading-tight">
                <span className="text-xs opacity-60">{whatsappText || "যেকোন প্রয়োজনে"}</span>
                <span className="text-sm font-bold">{whatsappNumber || "01712508063"}</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
