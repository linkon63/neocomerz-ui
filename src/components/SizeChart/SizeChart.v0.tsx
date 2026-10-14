import React from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import defaultChartImage from '../../images/panjabi-chart.png';

interface SizeChartV0Props {
  title?: string;
  description?: string;
  sizeData?: { measurement?: string; description?: string; m?: string; l?: string; xl?: string; xxl?: string }[];
  chartImage?: string;
  chartImageAlt?: string;
  whatsappText?: string;
  whatsappNumber?: string;
  contactText?: string;
  returnPolicy?: string;
  colors?: { primary?: string; text?: string; background?: string };
}

export default function SizeChartV0({
  title, description, sizeData = [], chartImage, chartImageAlt,
  whatsappText, whatsappNumber, contactText, returnPolicy, colors = {}
}: SizeChartV0Props) {
  const primaryColor = colors.primary || '#10b981';
  const textColor = colors.text || '#27272a';
  const backgroundColor = colors.background || '#ffffff';

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor }}>
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold" style={{ color: textColor }}>{title || "সাইজ চার্ট"}</h2>
          {description && <p className="mt-3 text-base md:text-lg text-gray-500 max-w-xl mx-auto">{description}</p>}
        </div>
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
            <table className="w-full min-w-[500px] text-sm md:text-base">
              <thead>
                <tr style={{ backgroundColor: primaryColor }}>
                  <th className="text-left px-4 py-3 text-white font-semibold">মাপ</th>
                  {['M', 'L', 'XL', 'XXL'].map(s => (
                    <th key={s} className="px-4 py-3 text-white font-semibold text-center">{s}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {sizeData.map((row: { measurement?: string; description?: string; m?: string; l?: string; xl?: string; xxl?: string }, i: number) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 border-b border-gray-100">
                      <p className="font-semibold text-gray-800">{row.measurement}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{row.description}</p>
                    </td>
                    {[row.m, row.l, row.xl, row.xxl].map((val, j) => (
                      <td key={j} className="px-4 py-3 text-center border-b border-gray-100 font-medium text-gray-700">{val}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center p-6 min-h-[280px]">
            {chartImage || defaultChartImage ? (
              <img src={chartImage || defaultChartImage.src} alt={chartImageAlt || "Size chart"} className="max-w-full h-auto max-h-[360px] object-contain" />
            ) : (
              <p className="text-gray-400 text-sm text-center">Chart image placeholder</p>
            )}
          </div>
        </div>
        <div className="mt-8 p-6 rounded-2xl flex flex-col md:flex-row justify-between items-center gap-4" style={{ backgroundColor: primaryColor }}>
          <p className="text-white text-base md:text-xl font-semibold leading-relaxed text-center md:text-left flex-1">
            {returnPolicy || "সাইজে সমস্যা হলে ৩ দিনের মধ্যে রিটার্ন বা এক্সচেঞ্জ করুন।"}
          </p>
          <a href={`https://wa.me/${(whatsappNumber || '01712508063').replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white font-bold hover:opacity-90 transition-all flex-shrink-0" style={{ color: primaryColor }}>
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
