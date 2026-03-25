import React from 'react';
import { CheckListItemProps } from '../types';

function CheckListItem({ children, iconClassName = "", textClassName = "" }: CheckListItemProps) {
  return (
    <div className="flex items-start gap-3">
      <div className={`mt-1.5 flex-shrink-0 w-5 h-5 rounded-full bg-green-500 flex items-center justify-center ${iconClassName}`}>
        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <span className={`text-gray-700 text-lg sm:text-xl font-['Hind_Siliguri'] ${textClassName}`}>{children}</span>
    </div>
  );
}

export default CheckListItem;
