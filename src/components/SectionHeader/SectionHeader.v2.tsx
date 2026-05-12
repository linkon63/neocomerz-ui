import React from 'react';
import { SectionHeaderProps } from '../../types/components';

export default function SectionHeaderV2({
  title, description,
  className = "text-center mb-12",
  titleClassName = "text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight",
  descriptionClassName = "max-w-3xl mx-auto mt-4 text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed"
}: SectionHeaderProps) {
  return (
    <div className={className}>
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 text-orange-600 text-sm font-bold mb-4">
        🔥 সীমিত সময়ের অফার
      </div>
      <h2 className={titleClassName}>{title}</h2>
      {description && <p className={descriptionClassName}>{description}</p>}
    </div>
  );
}
