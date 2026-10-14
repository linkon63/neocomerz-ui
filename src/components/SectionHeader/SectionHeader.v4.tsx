import React from 'react';
import { SectionHeaderProps } from '../../types/components';

export default function SectionHeaderV4({
  title, description,
  className = "text-center mb-12",
  titleClassName = "text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-yellow-400",
  descriptionClassName = "max-w-3xl mx-auto mt-4 text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed"
}: SectionHeaderProps) {
  return (
    <div className={className}>
      <h2 className={titleClassName}>{title}</h2>
      {description && <p className={descriptionClassName}>{description}</p>}
      <div className="mt-4 flex justify-center gap-1">
        {[...Array(3)].map((_, i) => (
          <div key={i} className={`h-1 rounded-full bg-yellow-400 ${i === 1 ? 'w-8' : 'w-3'}`} />
        ))}
      </div>
    </div>
  );
}
