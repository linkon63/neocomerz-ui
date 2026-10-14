import React from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';

interface QualityUIProps {
  title?: string; subtitle?: string;
  imageCards?: Array<{ image?: string; title?: string; description?: string; alt?: string }>;
  detailCards?: Array<{ title?: string; items?: Array<{ text?: string }> }>;
  ctaButton?: { text?: string; href?: string };
  colors?: { primary?: string; text?: string; background?: string };
}

export default function QualityV3({ title, subtitle, imageCards = [], detailCards = [], ctaButton, colors = {} }: QualityUIProps) {
  const primaryColor = colors.primary || '#1d4ed8';
  const textColor = colors.text || '#1e293b';
  const backgroundColor = colors.background || '#f8fafc';

  return (
    <main>
      <section className="pt-16 md:pt-24" style={{ backgroundColor }}>
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              {title && <h2 className="text-3xl md:text-5xl font-bold" style={{ color: textColor }}>{title}</h2>}
              {subtitle && <p className="mt-2 text-base md:text-xl" style={{ color: primaryColor }}>{subtitle}</p>}
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              <span>১০,০০০+ সন্তুষ্ট গ্রাহক</span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {imageCards.map((card, index) => (
              <div key={index} className="relative h-[500px] rounded-2xl overflow-hidden group border-2 border-gray-200 hover:border-blue-400 transition-colors shadow-sm">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105" style={{ backgroundImage: card.image ? `url(${card.image})` : undefined }} />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/95 backdrop-blur-sm">
                  <h3 className="text-base font-bold" style={{ color: primaryColor }}>{card.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid md:grid-cols-3 gap-4">
            {detailCards.map((card, index) => (
              <div key={index} className="rounded-2xl p-6 bg-white border border-gray-200 shadow-sm">
                <div className="w-8 h-1 rounded-full mb-3" style={{ backgroundColor: primaryColor }} />
                <h3 className="text-xl font-bold mb-3" style={{ color: textColor }}>{card.title}</h3>
                <ul className="space-y-2">
                  {card.items?.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <BsCheckCircleFill className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm leading-relaxed">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {ctaButton && (
            <div className="mt-12 flex justify-center">
              <a href={ctaButton.href || '#'} className="px-8 py-4 rounded-xl text-white font-bold text-lg hover:opacity-90 transition-all shadow-lg" style={{ backgroundColor: primaryColor }}>
                {ctaButton.text}
              </a>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
