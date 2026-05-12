'use client';
import React, { useState } from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import { SizeChartUIProps } from './SizeChart';

// v5 — Size Selector: click a size to highlight all its measurements
export default function SizeChartV5({
  title, description, sizeData = [], chartImage, chartImageAlt,
  whatsappText, whatsappNumber, contactText, returnPolicy, colors = {}
}: SizeChartUIProps) {
  const primary = colors.primary || '#7c3aed';
  const text = colors.text || '#1a1a1a';
  const bg = colors.background || '#faf5ff';
  const sizes = ['M', 'L', 'XL', 'XXL'];
  const [selected, setSelected] = useState<number>(0);

  const selectedValues = [
    sizeData.map(r => r.m),
    sizeData.map(r => r.l),
    sizeData.map(r => r.xl),
    sizeData.map(r => r.xxl),
  ][selected] || [];

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: bg }}>
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">

        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-2" style={{ color: text }}>{title || "সাইজ চার্ট"}</h2>
          {description && <p className="text-gray-500">{description}</p>}
        </div>

        {/* Size selector tabs */}
        <div className="flex justify-center gap-3 mb-10">
          {sizes.map((s, i) => (
            <button key={s} type="button" onClick={() => setSelected(i)}
              className={`w-16 h-16 rounded-2xl text-xl font-extrabold transition-all duration-200 shadow-sm ${selected === i ? 'scale-110 shadow-lg text-white' : 'bg-white text-gray-400 border border-gray-200 hover:border-gray-300'}`}
              style={selected === i ? { backgroundColor: primary } : {}}>
              {s}
            </button>
          ))}
        </div>

        {/* Selected size measurements */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {sizeData.map((row, i) => (
            <div key={i} className="bg-white rounded-3xl p-6 shadow-sm border-2 transition-all duration-200 text-center"
              style={{ borderColor: `${primary}40` }}>
              <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: primary }}>{row.measurement}</p>
              <p className="text-4xl font-black mb-1" style={{ color: text }}>{selectedValues[i] || '—'}</p>
              <p className="text-xs text-gray-400">inch</p>
              <p className="text-xs text-gray-400 mt-2 leading-tight">{row.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="grid lg:grid-cols-2 gap-6">
          {chartImage && (
            <div className="bg-white rounded-3xl border-2 p-8 flex items-center justify-center" style={{ borderColor: `${primary}30` }}>
              <img src={chartImage} alt={chartImageAlt || "Size chart"} className="max-h-[280px] object-contain" />
            </div>
          )}
          <div className="rounded-3xl p-8 flex flex-col justify-between gap-6" style={{ background: `linear-gradient(135deg, ${primary}, ${primary}bb)` }}>
            <div>
              <p className="text-white/70 text-xs font-bold uppercase tracking-widest mb-3">Return & Exchange</p>
              <p className="text-white text-base md:text-lg font-medium leading-relaxed">
                {returnPolicy || "সাইজে সমস্যা হলে ৩ দিনের মধ্যে রিটার্ন বা এক্সচেঞ্জ করুন।"}
              </p>
            </div>
            <a href={`https://wa.me/${(whatsappNumber || '01712508063').replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-white font-bold hover:scale-105 transition-all self-start shadow-lg" style={{ color: primary }}>
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
