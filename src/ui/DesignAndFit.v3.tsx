import React from 'react';
import SectionHeader from './SectionHeader';
import CheckListItem from './CheckListItem';
import { PrimaryButton } from './Button';
import Helpline from './Helpline';
import { DesignAndFitProps } from './types';

export default function DesignAndFitV3({
  title, subtitle, imageCards = [], detailCards = [],
  ctaButton = { text: "এখনই অর্ডার করুন", href: "#order-form" },
  colors = { primary: '#1d4ed8', text: '#1e293b', background: '#f8fafc' }
}: DesignAndFitProps) {
  const { primary = '#1d4ed8', text = '#1e293b', background = '#f8fafc' } = colors;
  return (
    <main>
      <section className="pt-16 md:pt-24" style={{ backgroundColor: background }}>
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
          <SectionHeader title={title} description={subtitle} className="text-center mb-10" />
          {/* Horizontal scroll cards on mobile */}
          <div className="flex gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:overflow-visible snap-x snap-mandatory md:snap-none">
            {imageCards.map((card, index) => (
              <div key={index} className="flex-shrink-0 w-72 md:w-auto relative h-[500px] rounded-2xl overflow-hidden group border-2 border-gray-200 hover:border-blue-400 transition-colors snap-start">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105" style={{ backgroundImage: card.image ? `url(${card.image})` : undefined }} />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/95 backdrop-blur-sm">
                  <h3 className="text-base font-bold" style={{ color: primary }}>{card.title}</h3>
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
                <div className="w-8 h-1 rounded-full mb-3" style={{ backgroundColor: primary }} />
                <h3 className="text-xl font-bold mb-3" style={{ color: text }}>{card.title}</h3>
                <ul className="space-y-2">
                  {card.items?.map((item, i) => <CheckListItem key={i}>{item.text}</CheckListItem>)}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 flex justify-center gap-4 flex-wrap">
            <PrimaryButton href={ctaButton.href} style={{ background: primary }}>{ctaButton.text}</PrimaryButton>
            <Helpline />
          </div>
        </div>
      </section>
    </main>
  );
}
