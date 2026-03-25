"use client";

import React from "react";

export function ImageUpload({ value }: { value?: string; onChange: (value: string) => void }) {
  return (
    <div className="space-y-2">
      {value ? (
        <div className="relative group rounded-lg overflow-hidden border bg-muted/50 aspect-video">
          <img src={value} alt="Preview" className="w-full h-full object-cover" />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center w-full aspect-video border-2 border-dashed rounded-lg bg-muted/20">
          <p className="text-sm text-neutral-500">No image available</p>
        </div>
      )}
    </div>
  );
}
