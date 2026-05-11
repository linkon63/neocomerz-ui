import React from 'react';

interface QualityUIProps {
  title?: string; subtitle?: string;
  imageCards?: Array<{ image?: string; title?: string; description?: string; alt?: string }>;
  detailCards?: Array<{ title?: string; items?: Array<{ text?: string }> }>;
  ctaButton?: { text?: string; href?: string };
  colors?: { primary?: string; text?: string; background?: string };
}

export default function QualityV5({ title, subtitle, imageCards = [], detailCards = [], ctaButton, colors = {} }: QualityUIProps) {
  const primaryColor = colors.primary || '#7c3aed';
  const textColor = colors.text || '#1a1a1a';
  const backgroundColor = colors.background || '#faf5ff';

  return (
    <main>
      <section className="pt-16 md:pt-24 overflow-hidden" style={{ backgroundColor }}>
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 rounded-full text-white text-sm font-bold mb-4" style={{ backgroundColor: primaryColor }}>QUALITY</span>
            {title && <h2 className="text-3xl md:text-5xl font-extrabold" style={{ color: textColor }}>{title}</h2>}
            {subtitle && <p className="mt-3 text-base md:text-xl text-gray-500">{subtitle}</p>}
          </div>
          {/* Overlapping cards */}
          <div className="relative flex flex-col md:flex-row gap-4 md:gap-0 items-stretch">
            {imageCards.map((card, index) => (
              <div
                key={index}
                className={`relative h-[500px] rounded-3xl overflow-hidden group shadow-xl flex-1 ${index > 0 ? 'md:-ml-8' : ''}`}
                style={{ zIndex: imageCards.length - index }}
              >
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: card.image ? `url(${card.image})` : undefined }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 p-5 rounded-tr-3xl" style={{ background: `linear-gradient(135deg, ${primaryColor}ee, ${primaryColor}aa)` }}>
                  <h3 className="text-white text-lg font-bold">{card.title}</h3>
                  <p className="text-white/80 text-sm mt-1">{card.description}</p>
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
              <div key={index} className="rounded-3xl p-6 relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${primaryColor}15, ${primaryColor}05)`, border: `2px solid ${primaryColor}20` }}>
                <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full opacity-20" style={{ backgroundColor: primaryColor }} />
                <h3 className="text-xl font-bold mb-3" style={{ color: primaryColor }}>{card.title}</h3>
                <ul className="space-y-2">
                  {card.items?.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold text-white" style={{ backgroundColor: primaryColor }}>✓</span>
                      <span className="text-gray-700 text-sm leading-relaxed">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {ctaButton && (
            <div className="mt-12 flex justify-center">
              <a href={ctaButton.href || '#'} className="px-10 py-4 rounded-3xl text-white font-extrabold text-xl hover:scale-105 active:scale-95 transition-all shadow-xl" style={{ background: `linear-gradient(135deg, ${primaryColor}, ${primaryColor}cc)` }}>
                {ctaButton.text}
              </a>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
