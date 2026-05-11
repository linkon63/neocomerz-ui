import React from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import { SizeChartUIProps } from './types';

export default function SizeChartV3({
  title, description, sizeData = [], chartImage, chartImageAlt,
  whatsappText, whatsappNumber, contactText, returnPolicy, colors = {}
}: SizeChartUIProps) {
  const primaryColor = colors.primary || '#1d4ed8';
  const textColor = colors.text || '#1e293b';
  const backgroundColor = colors.background || '#f8fafc';

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor }}>
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold" style={{ color: textColor }}>{title || "সাইজ চার্ট"}</h2>
          {description && <p className="mt-3 text-base md:text-lg text-gray-500 max-w-xl mx-auto">{description}</p>}
        </div>
        {/* Size cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {['M', 'L', 'XL', 'XXL'].map((size) => (
            <div key={size} className="rounded-2xl border-2 p-4 text-center bg-white shadow-sm" style={{ borderColor: primaryColor }}>
              <p className="text-3xl font-extrabold mb-2" style={{ color: primaryColor }}>{size}</p>
              {sizeData.map((row, i) => (
                <div key={i} className="flex justify-between text-xs text-gray-600 py-1 border-b border-gray-100 last:border-0">
                  <span className="font-medium">{row.measurement}</span>
                  <span className="font-bold">{size === 'M' ? row.m : size === 'L' ? row.l : size === 'XL' ? row.xl : row.xxl}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="rounded-2xl bg-white border border-gray-200 flex items-center justify-center p-8 min-h-[280px] shadow-sm">
            {chartImage ? (
              <img src={chartImage} alt={chartImageAlt || "Size chart"} className="max-w-full h-auto max-h-[360px] object-contain" />
            ) : (
              <p className="text-gray-400 text-sm text-center">Chart image placeholder</p>
            )}
          </div>
          <div className="flex flex-col gap-4">
            <div className="p-6 rounded-2xl border-2 bg-white" style={{ borderColor: primaryColor }}>
              <p className="text-base md:text-lg font-semibold leading-relaxed" style={{ color: textColor }}>
                {returnPolicy || "সাইজে সমস্যা হলে ৩ দিনের মধ্যে রিটার্ন বা এক্সচেঞ্জ করুন।"}
              </p>
            </div>
            <a href={`https://wa.me/${(whatsappNumber || '01712508063').replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-4 rounded-2xl text-white font-bold shadow-lg hover:opacity-90 transition-all bg-[#25D366]">
              <BsWhatsapp className="w-6 h-6" />
              <div className="flex flex-col items-start leading-tight">
                <span className="text-xs text-white/80">{whatsappText || "যেকোন প্রয়োজনে"}</span>
                <span className="text-lg font-extrabold">{whatsappNumber || "01712508063"}</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
