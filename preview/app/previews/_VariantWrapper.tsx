'use client';
import React, { useState } from 'react';

interface VariantWrapperProps {
  label: string;
  children: React.ReactNode;
  index?: number;
}

export default function VariantWrapper({ label, children, index }: VariantWrapperProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(label).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  return (
    <div className="border-b border-gray-100 last:border-0 group">
      {/* Variant Label Bar */}
      <div className="sticky top-0 z-40 bg-gray-950/98 backdrop-blur-md px-5 py-2.5 flex items-center gap-3 border-b border-gray-800/60">
        {/* Index badge */}
        {index !== undefined && (
          <span className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-800 text-gray-400 text-[10px] font-bold flex items-center justify-center">
            {index + 1}
          </span>
        )}

        {/* Dot */}
        <span className="inline-block w-2 h-2 rounded-full bg-orange-400 flex-shrink-0 shadow-[0_0_6px_rgba(251,146,60,0.7)]" />

        {/* Label */}
        <span className="text-xs font-mono font-semibold text-gray-200 tracking-wide flex-1 truncate">
          {label}
        </span>

        {/* Copy button */}
        <button
          onClick={handleCopy}
          title="Copy variant name"
          className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5 text-[10px] font-mono text-gray-500 hover:text-orange-400 px-2 py-1 rounded hover:bg-gray-800"
        >
          {copied ? (
            <>
              <svg className="w-3 h-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-green-400">copied</span>
            </>
          ) : (
            <>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              copy
            </>
          )}
        </button>
      </div>

      {/* Component Render */}
      <div className="bg-white overflow-hidden">
        {children}
      </div>
    </div>
  );
}
