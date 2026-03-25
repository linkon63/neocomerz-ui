import React from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';
import SectionHeader from './SectionHeader';
import CheckListItem from './CheckListItem';
import PrimaryButton from './Button';
import Helpline from './Helpline';
import { DesignAndFitProps } from '../types';

export default function DesignAndFit({
  title,
  subtitle,
  imageCards = [],
  detailCards = [],
  ctaButton = {
    text: "এখনই অর্ডার করুন",
    href: "#order-form"
  },
  colors = {
    primary: '#F36621',
    text: '#27272a',
    background: '#f3f4f6'
  }
}: DesignAndFitProps) {
  const { primary = '#F36621', text = '#27272a', background = '#f3f4f6' } = colors;

  return (
    <main>
      <section className="bg-gray-100 pt-24" style={{ backgroundColor: background }}>
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
          {title && (
            <SectionHeader
              title={title}
              description={subtitle}
            />
          )}
          <div className="grid md:grid-cols-3 gap-4">
            {imageCards.map((card, index) => (
              <div
                key={index}
                className="h-[680px] rounded-2xl bg-cover bg-center relative p-6 flex flex-col justify-end overflow-hidden group"
                style={{ backgroundImage: card.image ? `url(${card.image})` : undefined }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-in-out group-hover:scale-105"
                  style={{ backgroundImage: card.image ? `url(${card.image})` : undefined }}
                />
                <div className="w-60 rounded-2xl p-6 z-10 absolute left-0 bottom-0" style={{ backgroundColor: primary }}>
                  <div className="absolute -top-2 -right-2">
                    <BsCheckCircleFill className="w-7 h-7 text-green-500 bg-white rounded-full border-2 border-white" />
                  </div>
                  <h3 className="text-white text-2xl font-['Li_Ador_Noirrit'] font-semibold leading-10">{card.title}</h3>
                  <p className="text-white text-xl font-['Li_Ador_Noirrit'] font-semibold leading-7">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white pt-24 pb-16">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid md:grid-cols-3 gap-4">
            {detailCards.map((card, index) => (
              <div key={index} className="rounded-2xl p-6" style={{ backgroundColor: `${primary}1A` }}>
                <h3 className="text-zinc-800 text-3xl font-semibold leading-8 mb-3" style={{ color: text }}>{card.title}</h3>
                <ul className="space-y-2">
                  {card.items?.map((item, itemIndex) => (
                    <CheckListItem key={itemIndex}>{item.text}</CheckListItem>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-16 flex justify-center items-start flex-wrap gap-4">
            <PrimaryButton href={ctaButton.href}>{ctaButton.text}</PrimaryButton>
            <Helpline />
          </div>
        </div>
      </section>
    </main>
  );
}
