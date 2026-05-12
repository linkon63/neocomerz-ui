import React from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import { SizeChartUIProps } from './SizeChart';
import defaultChartImage from '../../images/panjabi-chart.png';

// v2 — Horizontal Scroll Strip with size selector highlight
export default function SizeChartV2({
  title, description, sizeData = [], chartImage, chartImageAlt,
  whatsappText, whatsappNumber, contactText, returnPolicy, colors = {}
}: SizeChartUIProps) {
  const primary = colors.primary || '#0ea5e9';
  const text = colors.text || '#0f172a';
  const bg = colors.background || '#f0f9ff';
  const sizes = ['M', 'L', 'XL', 'XXL'];

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: bg }}>
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">

        {/* Header with accent line */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-1 h-10 rounded-full" style={{ backgroundColor: primary }} />
            <h2 className="text-3xl md:text-5xl font-extrabold" style={{ color: text }}>{title || "সাইজ চার্ট"}</h2>
          </div>
          {description && <p className="text-base md:text-lg text-gray-500 ml-4">{description}</p>}
        </div>

        {/* Horizontal scroll table */}
        <div className="overflow-x-auto rounded-3xl shadow-lg mb-8">
          <table className="w-full min-w-[600px] border-collapse">
            <thead>
              <tr>
                <th className="text-left px-6 py-5 text-white font-bold text-base rounded-tl-3xl" style={{ backgroundColor: text }}>
                  মাপ / Measurement
                </th>
                {sizes.map((s, i) => (
                  <th key={s} className={`px-6 py-5 text-center font-extrabold text-lg ${i === sizes.length - 1 ? 'rounded-tr-3xl' : ''}`}
                    style={{ backgroundColor: primary, color: '#fff' }}>
                    {s}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sizeData.map((row, i) => (
                <tr key={i} className={`border-b border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50'} hover:bg-blue-50 transition-colors`}>
                  <td className="px-6 py-4">
                    <p className="font-bold text-gray-800">{row.measurement}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{row.description}</p>
                  </td>
                  {[row.m, row.l, row.xl, row.xxl].map((val, j) => (
                    <td key={j} className="px-6 py-4 text-center">
                      <span className="text-xl font-bold" style={{ color: primary }}>{val || '—'}</span>
                      <span className="text-xs text-gray-400 block">inch</span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom: image + policy side by side */}
        <div className="flex flex-col md:flex-row gap-6 items-stretch">
          {chartImage || defaultChartImage ? (
            <div className="flex-1 bg-white rounded-3xl border border-gray-100 p-8 flex items-center justify-center">
              <img src={chartImage || defaultChartImage.src} alt={chartImageAlt || "Size chart"} className="max-h-[280px] object-contain" />
            </div>
          ) : null}
          <div className="flex-1 rounded-3xl p-8 flex flex-col justify-between gap-6" style={{ background: `linear-gradient(135deg, ${primary}, ${primary}cc)` }}>
            <div>
              <p className="text-white/80 text-sm font-semibold uppercase tracking-widest mb-3">Return Policy</p>
              <p className="text-white text-base md:text-lg font-medium leading-relaxed">
                {returnPolicy || "সাইজে সমস্যা হলে ৩ দিনের মধ্যে রিটার্ন বা এক্সচেঞ্জ করুন।"}
              </p>
            </div>
            <a href={`https://wa.me/${(whatsappNumber || '01712508063').replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-white font-bold hover:scale-105 transition-all self-start shadow-lg" style={{ color: primary }}>
              <BsWhatsapp className="w-5 h-5 text-green-500" />
              <div className="flex flex-col leading-tight">
                <span className="text-xs text-gray-400">{whatsappText || "যেকোন প্রয়োজনে"}</span>
                <span className="text-sm font-bold">{whatsappNumber || "01712508063"}</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
