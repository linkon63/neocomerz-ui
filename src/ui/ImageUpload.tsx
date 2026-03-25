"use client";

import React, { useRef } from "react";
import { Upload, X, Link as LinkIcon } from "lucide-react";

export function ImageUpload({ value, onChange }: { value?: string; onChange: (value: string) => void }) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onChange(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    onChange("");
  };

  return (
    <div className="space-y-3">
      {value ? (
        <div className="relative group rounded-lg overflow-hidden border bg-neutral-100 aspect-video">
          <img src={value} alt="Preview" className="w-full h-full object-cover" />
          <button
            onClick={handleRemove}
            className="absolute top-2 right-2 p-1.5 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-sm"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <div 
          onClick={() => fileInputRef.current?.click()}
          className="flex flex-col items-center justify-center w-full aspect-video border-2 border-dashed border-neutral-300 rounded-lg bg-neutral-50 hover:bg-neutral-100 transition-colors cursor-pointer group"
        >
          <div className="p-3 bg-white rounded-full shadow-sm mb-2 group-hover:scale-110 transition-transform">
            <Upload className="w-5 h-5 text-neutral-400 group-hover:text-primary-color" />
          </div>
          <p className="text-sm font-medium text-neutral-600">Click to upload image</p>
          <p className="text-xs text-neutral-400 mt-1">PNG, JPG or SVG up to 5MB</p>
        </div>
      )}
      
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <LinkIcon className="h-4 w-4 text-neutral-400" />
        </div>
        <input
          type="text"
          placeholder="Or paste image URL..."
          className="block w-full pl-10 pr-3 py-2 border border-neutral-200 rounded-md text-sm placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-primary-color focus:border-primary-color"
          value={value || ""}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>

      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
      />
    </div>
  );
}
