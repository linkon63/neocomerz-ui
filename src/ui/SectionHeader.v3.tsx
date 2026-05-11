import React from 'react';
import { SectionHeaderProps } from './types';

export default function SectionHeaderV3({
  title, description,
  className = "mb-12",
  titleClassName = "text-3xl sm:text-4xl md:text-5xl font-bold leading-tight",
  descriptionClassName = "mt-4 text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl"
}: SectionHeaderProps) {
  return (
    <div className={className}>
      <div className="flex items-center gap-3 mb-3">
        <div className="w-8 h-1 rounded-full bg-blue-600" />
        <div className="w-4 h-1 rounded-full bg-blue-300" />
      </div>
      <h2 className={titleClassName}>{title}</h2>
      {description && <p className={descriptionClassName}>{description}</p>}
    </div>
  );
}
