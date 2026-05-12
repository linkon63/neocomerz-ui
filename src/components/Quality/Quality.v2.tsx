import React from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';

interface QualityUIProps {
  title?: string; subtitle?: string;
  imageCards?: Array<{ image?: string; title?: string; description?: string; alt?: string }>;
  detailCards?: Array<{ title?: string; items?: Array<{ text?: string }> }>;
  ctaButton?: { text?: string; href?: string };
  colors?: { primary?: string; text?: string; background?: string };
}

export default function QualityV2({ title, subtitle, imageCards = [], detailCards = [], ctaButton, colors = {} }: QualityUIProps) {
  const primaryColor = colors.primary || '#dc2626';
  const textColor = colors.text || '#1a1a1a';
  const backgroundColor = colors.background || '#fff7ed';

  return (
    <main>
      <div className="text-center py-3 text-white font-bold text-sm" style={{ backgroundColor: primaryColor }}>
        🔥 সীমিত স্টক! এখনই অর্ডার করুন!
      </div>
      <section className="pt-16 md:pt-20" style={{ backgroundColor }}>
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center mb-10">
            {title && <h2 className="text-3xl md:text-5xl font-extrabold" style={{ color: textColor }}>{title}</h2>}
            {subtitle && <p className="mt-3 text-base md:text-xl font-semibold" style={{ color: primaryColor }}>{subtitle}</p>}
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {imageCards.map((card, index) => (
              <div key={index} className="relative h-[560px] rounded-2xl overflow-hidden group shadow-lg hover:shadow-2xl transition-all">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105" style={{ backgroundImage: card.image ? `url(${card.image})` : undefined }} />
                <div className="absolute bottom-0 left-0 p-5 rounded-tr-2xl" style={{ backgroundColor: primaryColor }}>
                  <h3 className="text-white text-xl font-bold">{card.title}</h3>
                  <p className="text-white/90 text-base mt-1">{card.description}</p>
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
              <div key={index} className="rounded-2xl p-6 border-2" style={{ borderColor: primaryColor, backgroundColor: `${primaryColor}08` }}>
                <h3 className="text-2xl font-bold mb-3" style={{ color: primaryColor }}>{card.title}</h3>
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
              <a href={ctaButton.href || '#'} className="px-10 py-4 rounded-2xl text-white font-extrabold text-xl hover:scale-105 active:scale-95 transition-all shadow-xl" style={{ backgroundColor: primaryColor }}>
                🛒 {ctaButton.text}
              </a>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
