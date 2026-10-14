import React from 'react';
import { CheckListItemProps } from '../../types/components';

export default function CheckListItemV4({
  children,
  iconClassName = "w-5 h-5 flex-shrink-0 mt-0.5",
  textClassName = "text-gray-300 text-sm leading-relaxed",
  className = ""
}: CheckListItemProps) {
  return (
    <li className={`flex items-start gap-3 py-2 ${className}`}>
      <div className="w-5 h-5 rounded-full border border-yellow-400 flex items-center justify-center flex-shrink-0 mt-0.5">
        <svg className="w-3 h-3 text-yellow-400" viewBox="0 0 12 12" fill="none">
          <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <span className={textClassName}>{children}</span>
    </li>
  );
}
