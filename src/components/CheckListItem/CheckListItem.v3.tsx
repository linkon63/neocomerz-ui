import React from 'react';
import { CheckListItemProps } from '../../types/components';

export default function CheckListItemV3({
  children,
  iconClassName = "w-5 h-5 flex-shrink-0 mt-0.5",
  textClassName = "text-gray-700 text-sm leading-relaxed",
  className = ""
}: CheckListItemProps) {
  return (
    <li className={`flex items-start gap-3 py-2 border-b border-gray-100 last:border-0 ${className}`}>
      <div className="w-5 h-5 rounded border-2 border-blue-500 flex items-center justify-center flex-shrink-0 mt-0.5 bg-blue-50">
        <svg className="w-3 h-3 text-blue-600" viewBox="0 0 12 12" fill="none">
          <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <span className={textClassName}>{children}</span>
    </li>
  );
}
