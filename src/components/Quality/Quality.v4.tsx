import React from 'react';

interface QualityUIProps {
  title?: string; subtitle?: string;
  imageCards?: Array<{ image?: string; title?: string; description?: string; alt?: string }>;
  detailCards?: Array<{ title?: string; items?: Array<{ text?: string }> }>;
  ctaButton?: { text?: string; href?: string };
  colors?: { primary?: string; text?: string; background?: string };
}

export default function QualityV4({ title, subtitle, imageCards = [], detailCards = [], ctaButton, colors = {} }: QualityUIProps) {
  const primaryColor = colors.primary || '#FBBF24';
  const textColor = colors.text || '#e2e8f0';
  const backgroundColor = colors.background || '#0f172a';

  return (
    <main>
      <section className="pt-16 md:pt-24" style={{ backgroundColor }}>
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center mb-10">
            {title && <h2 className="text-3xl md:text-5xl font-bold" style={{ color: primaryColor }}>{title}</h2>}
            {subtitle && <p className="mt-3 text-base md:text-xl text-gray-400">{subtitle}</p>}
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {imageCards.map((card, index) => (
              <div key={index} className="relative h-[560px] rounded-2xl overflow-hidden group border border-white/10 hover:border-yellow-400/40 transition-colors">
                <div className="absolute inset-0 bg-cover bg-center brightness-90 group-hover:brightness-100 transition-all duration-300 group-hover:scale-105" style={{ backgroundImage: card.image ? `url(${card.image})` : undefined }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-5">
                  <h3 className="text-xl font-bold" style={{ color: primaryColor }}>{card.title}</h3>
                  <p className="text-gray-300 text-sm mt-1">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16" style={{ backgroundColor: '#1e293b' }}>
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid md:grid-cols-3 gap-4">
            {detailCards.map((card, index) => (
              <div key={index} className="rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-bold mb-3" style={{ color: primaryColor }}>{card.title}</h3>
                <ul className="space-y-2">
                  {card.items?.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold text-black" style={{ backgroundColor: primaryColor }}>✓</span>
                      <span className="text-gray-300 text-sm leading-relaxed">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {ctaButton && (
            <div className="mt-12 flex justify-center">
              <a href={ctaButton.href || '#'} className="px-10 py-4 rounded-xl text-black font-extrabold text-xl hover:brightness-110 active:scale-95 transition-all shadow-xl" style={{ backgroundColor: primaryColor }}>
                {ctaButton.text}
              </a>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
