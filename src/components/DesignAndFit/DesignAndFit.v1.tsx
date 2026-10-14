import React from 'react';
import SectionHeader from '../SectionHeader';
import CheckListItem from '../CheckListItem';
import { PrimaryButton } from '../Button';
import Helpline from '../Helpline';
import { DesignAndFitProps } from '../../types/components';

// v1 — Classic Grid: tall image cards on top, detail cards below in a clean white section
export default function DesignAndFitV1({
  title,
  subtitle,
  imageCards = [],
  detailCards = [],
  ctaButton = { text: 'এখনই অর্ডার করুন', href: '#order-form' },
  colors = { primary: '#F36621', text: '#27272a', background: '#f9fafb' },
}: DesignAndFitProps) {
  const { primary = '#F36621', text = '#27272a', background = '#f9fafb' } = colors;

  return (
    <main>
      <section className="pt-16 md:pt-24" style={{ backgroundColor: background }}>
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
          <SectionHeader title={title} description={subtitle} className="text-center mb-10" />
          <div className="grid md:grid-cols-3 gap-4">
            {imageCards.map((card, index) => (
              <div
                key={index}
                className="relative h-[500px] rounded-xl overflow-hidden group shadow-sm hover:shadow-md transition-shadow"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                  style={{ backgroundImage: card.image ? `url(${card.image})` : undefined }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
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
              <div
                key={index}
                className="rounded-xl p-5 border border-gray-200 bg-white shadow-sm"
              >
                <div
                  className="w-10 h-1 rounded-full mb-4"
                  style={{ backgroundColor: primary }}
                />
                <h3 className="text-xl font-bold mb-3" style={{ color: text }}>
                  {card.title}
                </h3>
                <ul className="space-y-2">
                  {card.items?.map((item, i) => (
                    <CheckListItem key={i}>{item.text}</CheckListItem>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 flex justify-center gap-4 flex-wrap">
            <PrimaryButton href={ctaButton.href} style={{ background: primary }}>
              {ctaButton.text}
            </PrimaryButton>
            <Helpline />
          </div>
        </div>
      </section>
    </main>
  );
}
