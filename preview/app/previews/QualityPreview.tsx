'use client';
import React from 'react';
import VariantWrapper from './_VariantWrapper';

import QualityDefault from '../../../src/ui/Quality';
import QualityV1      from '../../../src/ui/Quality.v1';
import QualityV2      from '../../../src/ui/Quality.v2';
import QualityV3      from '../../../src/ui/Quality.v3';
import QualityV4      from '../../../src/ui/Quality.v4';
import QualityV5      from '../../../src/ui/Quality.v5';

const IMG1 = "https://images.unsplash.com/photo-1558171813-4c088753af8f?auto=format&fit=crop&w=600&q=80";
const IMG2 = "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80";
const IMG3 = "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=600&q=80";

const SHARED_PROPS = {
  title: "আমাদের কোয়ালিটি গ্যারান্টি",
  subtitle: "প্রতিটি পণ্যে আমরা যা নিশ্চিত করি",
  imageCards: [
    { image: IMG1, title: "ফ্যাব্রিক টেস্ট", description: "প্রতিটি কাপড় ৫ ধাপে টেস্ট করা হয়", alt: "Fabric Testing" },
    { image: IMG2, title: "স্টিচিং", description: "ডাবল স্টিচ দিয়ে দীর্ঘস্থায়ী করা হয়", alt: "Stitching Quality" },
    { image: IMG3, title: "কালার ফাস্টনেস", description: "ধোয়ার পরেও রং থাকে অক্ষুণ্ণ", alt: "Color Fastness" },
  ],
  detailCards: [
    {
      title: "Raw Material",
      items: [
        { text: "100% Premium Cotton ব্যবহার করা হয়" },
        { text: "Indian Embroidery Thread — ওয়াশেবল এবং টেকসই" },
        { text: "Eco-friendly Dyes — ত্বকে নিরাপদ" },
      ],
    },
    {
      title: "Manufacturing",
      items: [
        { text: "দক্ষ কারিগর দ্বারা হাতে তৈরি" },
        { text: "প্রতিটি সেলাই মেশিন + হ্যান্ড ফিনিশিং" },
        { text: "QC পাস না হলে প্রোডাক্ট রিজেক্ট" },
      ],
    },
    {
      title: "Packaging",
      items: [
        { text: "প্রিমিয়াম বক্স প্যাকেজিং" },
        { text: "গিফট-ready presentation" },
      ],
    },
  ],
  ctaButton: { text: "এখনই অর্ডার করুন", href: "#" },
};

export default function QualityPreview() {
  return (
    <div>
      <VariantWrapper label="Quality — Default" index={0}>
        <QualityDefault {...SHARED_PROPS} colors={{ primary: '#F36621', text: '#27272a', background: '#f3f4f6' }} />
      </VariantWrapper>
      <VariantWrapper label="Quality.v1" index={1}>
        <QualityV1 {...SHARED_PROPS} colors={{ primary: '#F36621', text: '#27272a', background: '#f3f4f6' }} />
      </VariantWrapper>
      <VariantWrapper label="Quality.v2" index={2}>
        <QualityV2 {...SHARED_PROPS} colors={{ primary: '#0ea5e9', text: '#0f172a', background: '#f0f9ff' }} />
      </VariantWrapper>
      <VariantWrapper label="Quality.v3" index={3}>
        <QualityV3 {...SHARED_PROPS} colors={{ primary: '#10b981', text: '#064e3b', background: '#f0fdf4' }} />
      </VariantWrapper>
      <VariantWrapper label="Quality.v4" index={4}>
        <QualityV4 {...SHARED_PROPS} colors={{ primary: '#f59e0b', text: '#78350f', background: '#fffbeb' }} />
      </VariantWrapper>
      <VariantWrapper label="Quality.v5" index={5}>
        <QualityV5 {...SHARED_PROPS} colors={{ primary: '#7c3aed', text: '#1a1a1a', background: '#faf5ff' }} />
      </VariantWrapper>
    </div>
  );
}
