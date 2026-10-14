import * as React from 'react';
import { HelplineProps } from '../Helpline';

export default function HelplineV4({ whatsappNumber = "+880 1712-508063" }: HelplineProps) {
  const formattedNumber = whatsappNumber.replace(/[^0-9+]/g, '');
  return (
    <a href={`https://wa.me/${formattedNumber}`} target="_blank" rel="noopener noreferrer"
      aria-label={`WhatsApp: ${whatsappNumber}`}
      className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-gray-900 border border-green-500/30 hover:border-green-400 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500">
      <svg width="22" height="22" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M42 24C42 33.9411 33.9411 42 24 42C20.2082 42 16.6903 40.8276 13.789 38.8255L7.63636 40.3636L9.24864 34.3176C7.20139 31.396 6 27.8383 6 24C6 14.0589 14.0589 6 24 6C33.9411 6 42 14.0589 42 24Z" fill="#25D366"/>
        <path d="M18.75 14.25C18.25 13.25 17.48 13.34 16.71 13.34C15.33 13.34 13.17 14.99 13.17 18.08C13.17 20.6 14.29 23.37 18.04 27.5C21.66 31.5 26.41 33.56 30.36 33.49C34.31 33.42 35.13 30.02 35.13 28.88C35.13 28.37 34.81 28.11 34.59 28.04C33.25 27.4 30.76 26.2 30.2 25.97C29.63 25.74 29.34 26.05 29.16 26.21C28.64 26.7 27.63 28.14 27.28 28.46C26.93 28.79 26.42 28.62 26.2 28.5C25.41 28.18 23.25 27.23 21.54 25.56C19.42 23.51 19.29 22.8 18.89 22.17C18.57 21.67 18.81 21.36 18.93 21.22C19.38 20.7 20.01 19.88 20.3 19.48C20.58 19.07 20.36 18.46 20.22 18.08C19.64 16.43 19.15 15.05 18.75 14.25Z" fill="white"/>
      </svg>
      <div className="flex flex-col items-start leading-tight">
        <span className="text-xs text-gray-400">যেকোন প্রয়োজনে</span>
        <span className="text-sm font-bold text-green-400">{whatsappNumber}</span>
      </div>
    </a>
  );
}
