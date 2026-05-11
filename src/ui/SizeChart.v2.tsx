import React from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import { SizeChartUIProps } from './types';

export default function SizeChartV2({
  title, description, sizeData = [], chartImage, chartImageAlt,
  whatsappText, whatsappNumber, contactText, returnPolicy, colors = {}
}: SizeChartUIProps) {
  const primaryColor = colors.primary || '#dc2626';
  const textColor = colors.text || '#1a1a1a';
  const backgroundColor = colors.background || '#fff7ed';

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor }}>
      <div className="text-center py-3 mb-10 text-white font-bold text-sm" style={{ backgroundColor: primaryColor }}>
        📏 সঠিক সাইজ বেছে নিন — ভুল সাইজে অর্ডার করবেন না!
      </div>
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-extrabold" style={{ color: textColor }}>{title || "সাইজ চার্ট"}</h2>
          {description && <p className="mt-3 text-base md:text-lg text-gray-600 max-w-xl mx-auto">{description}</p>}
        </div>
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 overflow-x-auto rounded-2xl border-2 shadow-md" style={{ borderColor: primaryColor }}>
            <table className="w-full min-w-[500px] text-sm md:text-base">
              <thead>
                <tr style={{ backgroundColor: primaryColor }}>
                  <th className="text-left px-5 py-4 text-white font-bold text-base">মাপ</th>
                  {['M', 'L', 'XL', 'XXL'].map(s => (
                    <th key={s} className="px-5 py-4 text-white font-bold text-center text-base">{s}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {sizeData.map((row, i) => (
                  <tr key={i} className="border-b border-gray-100 hover:bg-red-50 transition-colors">
                    <td className="px-5 py-4">
                      <p className="font-bold text-gray-800">{row.measurement}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{row.description}</p>
                    </td>
                    {[row.m, row.l, row.xl, row.xxl].map((val, j) => (
                      <td key={j} className="px-5 py-4 text-center font-semibold text-gray-700">{val}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="rounded-2xl bg-white border-2 flex items-center justify-center p-6 min-h-[280px] shadow-md" style={{ borderColor: primaryColor }}>
            {chartImage ? (
              <img src={chartImage} alt={chartImageAlt || "Size chart"} className="max-w-full h-auto max-h-[360px] object-contain" />
            ) : (
              <p className="text-gray-400 text-sm text-center">Chart image placeholder</p>
            )}
          </div>
        </div>
        <div className="mt-8 p-6 rounded-2xl flex flex-col md:flex-row justify-between items-center gap-4" style={{ backgroundColor: primaryColor }}>
          <p className="text-white text-base md:text-xl font-bold leading-relaxed text-center md:text-left flex-1">
            {returnPolicy || "সাইজে সমস্যা হলে ৩ দিনের মধ্যে রিটার্ন বা এক্সচেঞ্জ করুন।"}
          </p>
          <a href={`https://wa.me/${(whatsappNumber || '01712508063').replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white font-bold hover:scale-105 transition-all flex-shrink-0" style={{ color: primaryColor }}>
            <BsWhatsapp className="w-5 h-5" />
            <div className="flex flex-col items-start leading-tight">
              <span className="text-xs opacity-70">{whatsappText || "যেকোন প্রয়োজনে"}</span>
              <span className="text-base font-bold">{whatsappNumber || "01712508063"}</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
