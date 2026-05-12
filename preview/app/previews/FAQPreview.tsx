'use client';
import React from 'react';
import VariantWrapper from './_VariantWrapper';

import FAQDefault from '../../../src/ui/FAQ';
import FAQV1      from '../../../src/ui/FAQ.v1';
import FAQV2      from '../../../src/ui/FAQ.v2';
import FAQV3      from '../../../src/ui/FAQ.v3';
import FAQV4      from '../../../src/ui/FAQ.v4';
import FAQV5      from '../../../src/ui/FAQ.v5';

const SHARED_PROPS = {
  heading: "সচরাচর জিজ্ঞাসা",
  descriptionPart1: "যেকোন প্রয়োজনে ",
  descriptionPart2: "আমাদের সাথে যোগাযোগ করুন",
  descriptionPart3: " — আমরা সবসময় আপনাদের সেবায় প্রস্তুত",
  contactLabel: "WhatsApp",
  contactNumber: "+880 1712-508063",
  faqs: [
    { question: "প্রোডাক্ট কি অরিজিনাল?", answer: "হ্যাঁ, আমাদের সকল প্রোডাক্ট ১০০% অরিজিন্যাল এবং প্রিমিয়াম কোয়ালিটির।" },
    { question: "ডেলিভারি কত দিনে হয়?", answer: "ঢাকার ভেতরে ১-২ দিন, ঢাকার বাইরে ২-৪ দিনের মধ্যে ডেলিভারি দেওয়া হয়।" },
    { question: "রিটার্ন পলিসি কী?", answer: "ডেলিভারির ৩ দিনের মধ্যে রিটার্ন বা এক্সচেঞ্জ করা যায়।" },
    { question: "পেমেন্ট কিভাবে করবো?", answer: "ক্যাশ অন ডেলিভারি, বিকাশ, নগদ, এবং রকেটে পেমেন্ট করা যায়।" },
    { question: "সাইজ কিভাবে বুঝব?", answer: "প্রতিটি প্রোডাক্টের সাথে বিস্তারিত সাইজ চার্ট দেওয়া থাকে।" },
  ],
};

export default function FAQPreview() {
  return (
    <div>
      <VariantWrapper label="FAQ — Default" index={0}>
        <FAQDefault {...SHARED_PROPS} colors={{ primary: '#F36621', background: '#fff7ed', faqBackground: '#ffffff' }} />
      </VariantWrapper>
      <VariantWrapper label="FAQ.v1" index={1}>
        <FAQV1 {...SHARED_PROPS} colors={{ primary: '#5b21b6', background: '#ffffff', faqBackground: '#f9fafb' }} />
      </VariantWrapper>
      <VariantWrapper label="FAQ.v2" index={2}>
        <FAQV2 {...SHARED_PROPS} colors={{ primary: '#0ea5e9', background: '#f0f9ff', faqBackground: '#ffffff' }} />
      </VariantWrapper>
      <VariantWrapper label="FAQ.v3" index={3}>
        <FAQV3 {...SHARED_PROPS} colors={{ primary: '#10b981', background: '#f0fdf4', faqBackground: '#ffffff' }} />
      </VariantWrapper>
      <VariantWrapper label="FAQ.v4" index={4}>
        <FAQV4 {...SHARED_PROPS} colors={{ primary: '#f59e0b', background: '#fffbeb', faqBackground: '#ffffff' }} />
      </VariantWrapper>
      <VariantWrapper label="FAQ.v5" index={5}>
        <FAQV5 {...SHARED_PROPS} colors={{ primary: '#e11d48', background: '#fff1f2', faqBackground: '#ffffff' }} />
      </VariantWrapper>
    </div>
  );
}
