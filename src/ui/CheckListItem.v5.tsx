import React from 'react';
import { CheckListItemProps } from './types';

export default function CheckListItemV5({
  children,
  iconClassName = "w-5 h-5 flex-shrink-0 mt-0.5",
  textClassName = "text-gray-700 text-sm leading-relaxed"
}: CheckListItemProps) {
  return (
    <li className="flex items-start gap-3 p-3 rounded-2xl hover:bg-purple-50 transition-colors">
      <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm" style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)' }}>
        <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="none">
          <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <span className={textClassName}>{children}</span>
    </li>
  );
}
