import React from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import { SizeChartUIProps } from './types';

export default function SizeChartV4({
  title, description, sizeData = [], chartImage, chartImageAlt,
  whatsappText, whatsappNumber, contactText, returnPolicy, colors = {}
}: SizeChartUIProps) {
  const primaryColor = colors.primary || '#FBBF24';
  const textColor = colors.text || '#e2e8f0';
  const backgroundColor = colors.background || '#0f172a';

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor }}>
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold" style={{ color: primaryColor }}>{title || "সাইজ চার্ট"}</h2>
          {description && <p className="mt-3 text-base md:text-lg text-gray-400 max-w-xl mx-auto">{description}</p>}
        </div>
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full min-w-[500px] text-sm md:text-base">
              <thead>
                <tr style={{ backgroundColor: primaryColor }}>
                  <th className="text-left px-5 py-4 text-black font-bold">মাপ</th>
                  {['M', 'L', 'XL', 'XXL'].map(s => (
                    <th key={s} className="px-5 py-4 text-black font-bold text-center">{s}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {sizeData.map((row, i) => (
                  <tr key={i} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                    <td className="px-5 py-4">
                      <p className="font-semibold" style={{ color: textColor }}>{row.measurement}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{row.description}</p>
                    </td>
                    {[row.m, row.l, row.xl, row.xxl].map((val, j) => (
                      <td key={j} className="px-5 py-4 text-center font-medium text-gray-300">{val}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="rounded-2xl border border-white/10 flex items-center justify-center p-6 min-h-[280px]" style={{ backgroundColor: '#1e293b' }}>
            {chartImage ? (
              <img src={chartImage} alt={chartImageAlt || "Size chart"} className="max-w-full h-auto max-h-[360px] object-contain" />
            ) : (
              <p className="text-gray-500 text-sm text-center">Chart image placeholder</p>
            )}
          </div>
        </div>
        <div className="mt-8 p-6 rounded-2xl border border-white/10 flex flex-col md:flex-row justify-between items-center gap-4" style={{ backgroundColor: '#1e293b' }}>
          <p className="text-base md:text-xl font-semibold leading-relaxed text-center md:text-left flex-1 text-gray-300">
            {returnPolicy || "সাইজে সমস্যা হলে ৩ দিনের মধ্যে রিটার্ন বা এক্সচেঞ্জ করুন।"}
          </p>
          <a href={`https://wa.me/${(whatsappNumber || '01712508063').replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-xl font-bold hover:opacity-90 transition-all flex-shrink-0 bg-[#25D366] text-white">
            <BsWhatsapp className="w-5 h-5" />
            <div className="flex flex-col items-start leading-tight">
              <span className="text-xs text-white/70">{whatsappText || "যেকোন প্রয়োজনে"}</span>
              <span className="text-base font-bold">{whatsappNumber || "01712508063"}</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
