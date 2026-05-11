import React from 'react';
import { SectionHeaderProps } from './types';

export default function SectionHeaderV5({
  title, description,
  className = "text-center mb-12",
  titleClassName = "text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight",
  descriptionClassName = "max-w-3xl mx-auto mt-4 text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed"
}: SectionHeaderProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Decorative background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="text-[80px] md:text-[120px] font-extrabold text-gray-100 leading-none tracking-widest uppercase">
          PREMIUM
        </span>
      </div>
      <div className="relative">
        <h2 className={titleClassName}>{title}</h2>
        {description && <p className={descriptionClassName}>{description}</p>}
      </div>
    </div>
  );
}
