'use client';
import React from 'react';
import VariantWrapper from './_VariantWrapper';

import SectionHeaderDefault from '../../../src/ui/SectionHeader';
import SectionHeaderV1      from '../../../src/ui/SectionHeader.v1';
import SectionHeaderV2      from '../../../src/ui/SectionHeader.v2';
import SectionHeaderV3      from '../../../src/ui/SectionHeader.v3';
import SectionHeaderV4      from '../../../src/ui/SectionHeader.v4';
import SectionHeaderV5      from '../../../src/ui/SectionHeader.v5';

const SHARED_PROPS = {
  title: "এটা একটা সেকশন হেডার",
  description: "এখানে সেকশনের বিবরণ থাকবে — আপনার পণ্য বা সেবার সংক্ষিপ্ত পরিচয় দিন।",
};

function Padded({ children }: { children: React.ReactNode }) {
  return <div className="max-w-3xl mx-auto px-8 py-12">{children}</div>;
}

export default function SectionHeaderPreview() {
  return (
    <div>
      <VariantWrapper label="SectionHeader — Default" index={0}>
        <Padded><SectionHeaderDefault {...SHARED_PROPS} /></Padded>
      </VariantWrapper>
      <VariantWrapper label="SectionHeader.v1" index={1}>
        <Padded><SectionHeaderV1 {...SHARED_PROPS} /></Padded>
      </VariantWrapper>
      <VariantWrapper label="SectionHeader.v2" index={2}>
        <Padded><SectionHeaderV2 {...SHARED_PROPS} /></Padded>
      </VariantWrapper>
      <VariantWrapper label="SectionHeader.v3" index={3}>
        <Padded><SectionHeaderV3 {...SHARED_PROPS} /></Padded>
      </VariantWrapper>
      <VariantWrapper label="SectionHeader.v4" index={4}>
        <Padded><SectionHeaderV4 {...SHARED_PROPS} /></Padded>
      </VariantWrapper>
      <VariantWrapper label="SectionHeader.v5" index={5}>
        <Padded><SectionHeaderV5 {...SHARED_PROPS} /></Padded>
      </VariantWrapper>
    </div>
  );
}
