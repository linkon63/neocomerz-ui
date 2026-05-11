import React from 'react';
import SectionHeader from './SectionHeader';
import CheckListItem from './CheckListItem';
import { PrimaryButton } from './Button';
import Helpline from './Helpline';
import { DesignAndFitProps } from './types';

export default function DesignAndFitV5({
  title, subtitle, imageCards = [], detailCards = [],
  ctaButton = { text: "এখনই অর্ডার করুন", href: "#order-form" },
  colors = { primary: '#7c3aed', text: '#1a1a1a', background: '#faf5ff' }
}: DesignAndFitProps) {
  const { primary = '#7c3aed', text = '#1a1a1a', background = '#faf5ff' } = colors;
  return (
    <main>
      <section className="pt-16 md:pt-24 overflow-hidden" style={{ backgroundColor: background }}>
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
          <SectionHeader title={title} description={subtitle} className="text-center mb-10" />
          {/* Overlapping image cards */}
          <div className="relative flex flex-col md:flex-row gap-4 md:gap-0 items-stretch">
            {imageCards.map((card, index) => (
              <div
                key={index}
                className={`relative h-[500px] rounded-3xl overflow-hidden group shadow-xl flex-1 ${index > 0 ? 'md:-ml-8' : ''}`}
                style={{ zIndex: imageCards.length - index }}
              >
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: card.image ? `url(${card.image})` : undefined }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 p-5 rounded-tr-3xl" style={{ background: `linear-gradient(135deg, ${primary}ee, ${primary}aa)` }}>
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
              <div key={index} className="rounded-3xl p-6 relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${primary}15, ${primary}05)`, border: `2px solid ${primary}20` }}>
                <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full opacity-20" style={{ backgroundColor: primary }} />
                <h3 className="text-xl font-bold mb-3" style={{ color: primary }}>{card.title}</h3>
                <ul className="space-y-2">
                  {card.items?.map((item, i) => <CheckListItem key={i}>{item.text}</CheckListItem>)}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 flex justify-center gap-4 flex-wrap">
            <a href={ctaButton.href} className="px-10 py-4 rounded-3xl text-white text-xl font-extrabold shadow-xl hover:scale-105 active:scale-95 transition-all" style={{ background: `linear-gradient(135deg, ${primary}, ${primary}cc)` }}>
              {ctaButton.text}
            </a>
            <Helpline />
          </div>
        </div>
      </section>
    </main>
  );
}
