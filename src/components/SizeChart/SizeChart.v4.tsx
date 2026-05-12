import React from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import { SizeChartUIProps } from './SizeChart';

// v4 — Dark Premium: dark background, glowing accents
export default function SizeChartV4({
  title, description, sizeData = [], chartImage, chartImageAlt,
  whatsappText, whatsappNumber, contactText, returnPolicy, colors = {}
}: SizeChartUIProps) {
  const primary = colors.primary || '#FBBF24';
  const bg = colors.background || '#0f172a';
  const sizes = ['M', 'L', 'XL', 'XXL'];

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: bg }}>
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-3" style={{ color: primary }}>{title || "সাইজ চার্ট"}</h2>
          {description && <p className="text-gray-400 text-base md:text-lg">{description}</p>}
        </div>

        {/* Size columns — each size as a vertical column */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {sizes.map((size, si) => (
            <div key={size} className="rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm">
              {/* Size header */}
              <div className="py-5 text-center" style={{ backgroundColor: primary }}>
                <span className="text-3xl font-black text-black">{size}</span>
              </div>
              {/* Measurements */}
              <div className="divide-y divide-white/10">
                {sizeData.map((row, ri) => {
                  const val = [row.m, row.l, row.xl, row.xxl][si];
                  return (
                    <div key={ri} className="px-4 py-3 flex flex-col items-center gap-0.5">
                      <span className="text-[10px] text-gray-500 uppercase tracking-wider">{row.measurement}</span>
                      <span className="text-xl font-bold text-white">{val || '—'}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="grid lg:grid-cols-2 gap-6">
          {chartImage && (
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 flex items-center justify-center min-h-[200px]">
              <img src={chartImage} alt={chartImageAlt || "Size chart"} className="max-h-[280px] object-contain" />
            </div>
          )}
          <div className="rounded-3xl p-8 border border-white/10 flex flex-col justify-between gap-6" style={{ background: `linear-gradient(135deg, ${primary}22, ${primary}11)` }}>
            <p className="text-gray-300 text-base md:text-lg font-medium leading-relaxed">
              {returnPolicy || "সাইজে সমস্যা হলে ৩ দিনের মধ্যে রিটার্ন বা এক্সচেঞ্জ করুন।"}
            </p>
            <a href={`https://wa.me/${(whatsappNumber || '01712508063').replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl font-bold hover:opacity-90 transition-all self-start"
              style={{ backgroundColor: primary, color: '#0f172a' }}>
              <BsWhatsapp className="w-5 h-5" />
              <div className="flex flex-col leading-tight">
                <span className="text-xs opacity-70">{whatsappText || "যেকোন প্রয়োজনে"}</span>
                <span className="text-sm font-bold">{whatsappNumber || "01712508063"}</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
