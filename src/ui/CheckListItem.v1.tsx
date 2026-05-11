import React from 'react';
import { CheckListItemProps } from './types';

export default function CheckListItemV1({
  children,
  iconClassName = "w-5 h-5 text-green-500 flex-shrink-0 mt-0.5",
  textClassName = "text-gray-700 text-sm leading-relaxed"
}: CheckListItemProps) {
  return (
    <li className="flex items-start gap-2 py-1">
      <svg className={iconClassName} viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
      <span className={textClassName}>{children}</span>
    </li>
  );
}
