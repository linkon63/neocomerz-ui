'use client';
import React from 'react';
import VariantWrapper from './_VariantWrapper';

import SizeChartDefault from '../../../src/ui/SizeChart';
import SizeChartV1      from '../../../src/ui/SizeChart.v1';
import SizeChartV2      from '../../../src/ui/SizeChart.v2';
import SizeChartV3      from '../../../src/ui/SizeChart.v3';
import SizeChartV4      from '../../../src/ui/SizeChart.v4';
import SizeChartV5      from '../../../src/ui/SizeChart.v5';

const SHARED_PROPS = {
  title: "সাইজ চার্ট",
  description: "আপনার সঠিক সাইজ বেছে নিন",
  sizeData: [
    { measurement: "Chest",    description: "বুকের মাপ (ফ্ল্যাট করে)",    m: "43", l: "46", xl: "48", xxl: "50" },
    { measurement: "Length",   description: "কাঁধ থেকে নিচ পর্যন্ত",      m: "44", l: "44", xl: "45", xxl: "46" },
    { measurement: "Shoulder", description: "কাঁধের প্রস্থ",               m: "18", l: "19", xl: "20", xxl: "21" },
    { measurement: "Sleeve",   description: "হাতার দৈর্ঘ্য",               m: "25", l: "25.5", xl: "26", xxl: "26.5" },
  ],
  whatsappText: "যেকোন প্রয়োজনে",
  whatsappNumber: "01712508063",
  contactText: "যোগাযোগ করুন",
  returnPolicy: "অবশ্যই 100% কনফার্ম হয়ে অর্ডারটি করবেন। সাইজে প্রবলেম হলে রিটার্ন বা এক্সচেঞ্জ করে নিতে পারবেন ৩ দিনের ভেতরে।",
};

export default function SizeChartPreview() {
  return (
    <div>
      <VariantWrapper label="SizeChart — Default" index={0}>
        <SizeChartDefault {...SHARED_PROPS} colors={{ primary: '#10b981', text: '#27272a', background: '#ffffff' }} />
      </VariantWrapper>
      <VariantWrapper label="SizeChart.v1" index={1}>
        <SizeChartV1 {...SHARED_PROPS} colors={{ primary: '#10b981', text: '#27272a', background: '#ffffff' }} />
      </VariantWrapper>
      <VariantWrapper label="SizeChart.v2" index={2}>
        <SizeChartV2 {...SHARED_PROPS} colors={{ primary: '#F36621', text: '#27272a', background: '#fff7ed' }} />
      </VariantWrapper>
      <VariantWrapper label="SizeChart.v3" index={3}>
        <SizeChartV3 {...SHARED_PROPS} colors={{ primary: '#0ea5e9', text: '#0f172a', background: '#f0f9ff' }} />
      </VariantWrapper>
      <VariantWrapper label="SizeChart.v4" index={4}>
        <SizeChartV4 {...SHARED_PROPS} colors={{ primary: '#f59e0b', text: '#78350f', background: '#fffbeb' }} />
      </VariantWrapper>
      <VariantWrapper label="SizeChart.v5" index={5}>
        <SizeChartV5 {...SHARED_PROPS} colors={{ primary: '#7c3aed', text: '#1a1a1a', background: '#faf5ff' }} />
      </VariantWrapper>
    </div>
  );
}
