import React from 'react';
import { DesignAndFitProps } from './types';

export default function DesignAndFitV4({
  title, subtitle, imageCards = [], detailCards = [],
  ctaButton = { text: "এখনই অর্ডার করুন", href: "#order-form" },
  colors = { primary: '#FBBF24', text: '#e2e8f0', background: '#0f172a' }
}: DesignAndFitProps) {
  const { primary = '#FBBF24', text = '#e2e8f0', background = '#0f172a' } = colors;
  return (
    <main>
      <section className="pt-16 md:pt-24" style={{ backgroundColor: background }}>
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-bold" style={{ color: primary }}>{title as React.ReactNode}</h2>
            {subtitle && <p className="mt-4 text-base md:text-xl text-gray-400">{subtitle as React.ReactNode}</p>}
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {imageCards.map((card, index) => (
              <div key={index} className="relative h-[560px] rounded-2xl overflow-hidden group border border-white/10 hover:border-yellow-400/40 transition-colors">
                <div className="absolute inset-0 bg-cover bg-center brightness-90 group-hover:brightness-100 transition-all duration-300 group-hover:scale-105" style={{ backgroundImage: card.image ? `url(${card.image})` : undefined }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-5">
                  <h3 className="text-xl font-bold" style={{ color: primary }}>{card.title}</h3>
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
                <h3 className="text-xl font-bold mb-3" style={{ color: primary }}>{card.title}</h3>
                <ul className="space-y-2">
                  {card.items?.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold text-black" style={{ backgroundColor: primary }}>✓</span>
                      <span className="text-gray-300 text-sm leading-relaxed">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 flex justify-center gap-4 flex-wrap">
            <a href={ctaButton.href} className="px-10 py-4 rounded-xl text-black text-xl font-extrabold shadow-xl hover:brightness-110 active:scale-95 transition-all" style={{ backgroundColor: primary }}>
              {ctaButton.text}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
