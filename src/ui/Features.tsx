import React from 'react';
import { LuShoppingBag } from 'react-icons/lu';
import CheckListItem from './CheckListItem';
import SectionHeader from './SectionHeader';
import Helpline from './Helpline';
import { FeaturesProps } from '../types';

export default function Features({
  title,
  description,
  features = [],
  images = [],
  ctaButton = {
    text: "এখনই অর্ডার করুন",
    href: "#order-form"
  },
  tagline = "এটা শুধু একটা ড্রেস না—এটা এখনকার ফ্যাশন ট্রেনের অংশ।",
  colors = {
    primary: '#F36621',
    text: '#222F28',
    background: '#ffffff'
  },
  whatsappNumber = "+880 1712-508063"
}: FeaturesProps) {
  const { primary = '#F36621', text = '#222F28', background = '#ffffff' } = colors;

  return (
    <section className="bg-white py-12 md:py-24" style={{ backgroundColor: background }}>
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="flex flex-col gap-6 lg:gap-10">
            <SectionHeader
              className="text-left mb-0"
              titleClassName="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight lg:leading-[64px]"
              descriptionClassName="mt-4 text-base md:text-xl lg:text-2xl leading-relaxed lg:leading-7 max-w-none mx-0"
              title={title}
              description={description}
              style={{ color: text }}
            />

            <ul className="space-y-3">
              {features.map((feature, index) => (
                <CheckListItem
                  key={index}
                  iconClassName="w-6 h-6 md:w-7 md:h-7 text-green-500 flex-shrink-0"
                  textClassName="text-lg md:text-xl font-semibold leading-tight lg:leading-7"
                >
                  {feature.text}
                </CheckListItem>
              ))}
            </ul>

            <div className="rounded-2xl md:rounded-[32px] p-6 md:p-8 self-start w-full md:w-[376px]" style={{ backgroundColor: primary }}>
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-0 relative">
                <a
                  href={ctaButton.href}
                  className="px-4 py-2.5 sm:px-6 sm:py-3 md:px-7 md:py-3.5 bg-white rounded-xl sm:rounded-2xl inline-flex justify-center items-center gap-1.5 sm:gap-2 hover:bg-gray-50 active:scale-95 transition-all w-full md:w-auto z-10"
                >
                  <LuShoppingBag className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" style={{ color: primary }} />
                  <div className="justify-start text-lg sm:text-xl md:text-xl font-bold leading-tight sm:leading-8 md:leading-10" style={{ color: primary }}>
                    {ctaButton.text}
                  </div>
                </a>
                <div className="w-full md:w-auto flex justify-center md:block md:absolute md:left-[90%] md:ml-6">
                  <Helpline whatsappNumber={whatsappNumber} />
                </div>
              </div>
              <p className="mt-8 text-white text-xl md:text-3xl font-bold leading-tight md:leading-9 max-w-sm">
                {tagline}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {images.map((image, index) => (
              <div key={index} className="relative aspect-w-1 aspect-h-1 group overflow-hidden rounded-2xl">
                <img
                  className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300 ease-in-out"
                  src={image.src}
                  alt={image.alt || `Feature image ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
