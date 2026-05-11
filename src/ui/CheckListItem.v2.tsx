import React from 'react';
import { CheckListItemProps } from './types';

export default function CheckListItemV2({
  children,
  iconClassName = "w-5 h-5 flex-shrink-0 mt-0.5",
  textClassName = "text-gray-800 text-base font-semibold leading-snug"
}: CheckListItemProps) {
  return (
    <li className="flex items-start gap-3 p-3 rounded-xl bg-green-50 border border-green-100">
      <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
        <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="none">
          <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <span className={textClassName}>{children}</span>
    </li>
  );
}
