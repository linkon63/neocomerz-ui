import React from 'react';
import { SectionHeaderProps } from './types';

export default function SectionHeaderV1({
  title, description,
  className = "text-center mb-12",
  titleClassName = "text-3xl sm:text-4xl md:text-5xl font-bold leading-tight",
  descriptionClassName = "max-w-3xl mx-auto mt-4 text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed"
}: SectionHeaderProps) {
  return (
    <div className={className}>
      <h2 className={titleClassName}>{title}</h2>
      {description && <p className={descriptionClassName}>{description}</p>}
    </div>
  );
}
