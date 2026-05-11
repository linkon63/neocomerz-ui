import React from 'react';
import SectionHeader from './SectionHeader';
import CheckListItem from './CheckListItem';
import { PrimaryButton } from './Button';
import Helpline from './Helpline';
import { DesignAndFitProps } from './types';

export default function DesignAndFitV2({
  title, subtitle, imageCards = [], detailCards = [],
  ctaButton = { text: "এখনই অর্ডার করুন", href: "#order-form" },
  colors = { primary: '#dc2626', text: '#1a1a1a', background: '#fff7ed' }
}: DesignAndFitProps) {
  const { primary = '#dc2626', text = '#1a1a1a', background = '#fff7ed' } = colors;
  return (
    <main>
      <div className="text-center py-3 text-white font-bold text-sm" style={{ backgroundColor: primary }}>
        ⚡ সীমিত স্টক! এখনই অর্ডার করুন!
      </div>
      <section className="pt-16 md:pt-20" style={{ backgroundColor: background }}>
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
          <SectionHeader title={title} description={subtitle} className="text-center mb-10" />
          <div className="grid md:grid-cols-3 gap-4">
            {imageCards.map((card, index) => (
              <div key={index} className="relative h-[560px] rounded-2xl overflow-hidden group shadow-lg hover:shadow-2xl transition-all">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105" style={{ backgroundImage: card.image ? `url(${card.image})` : undefined }} />
                <div className="absolute bottom-0 left-0 p-5 rounded-tr-2xl" style={{ backgroundColor: primary }}>
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
              <div key={index} className="rounded-2xl p-6 border-2" style={{ borderColor: primary, backgroundColor: `${primary}08` }}>
                <h3 className="text-2xl font-bold mb-3" style={{ color: primary }}>{card.title}</h3>
                <ul className="space-y-2">
                  {card.items?.map((item, i) => <CheckListItem key={i}>{item.text}</CheckListItem>)}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 flex justify-center gap-4 flex-wrap">
            <a href={ctaButton.href} className="px-10 py-4 rounded-2xl text-white text-xl font-extrabold shadow-xl hover:scale-105 active:scale-95 transition-all" style={{ backgroundColor: primary }}>
              🛒 {ctaButton.text}
            </a>
            <Helpline />
          </div>
        </div>
      </section>
    </main>
  );
}
