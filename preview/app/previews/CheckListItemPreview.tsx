'use client';
import React from 'react';
import VariantWrapper from './_VariantWrapper';

import CheckListItemDefault from '../../../src/ui/CheckListItem';
import CheckListItemV1      from '../../../src/ui/CheckListItem.v1';
import CheckListItemV2      from '../../../src/ui/CheckListItem.v2';
import CheckListItemV3      from '../../../src/ui/CheckListItem.v3';
import CheckListItemV4      from '../../../src/ui/CheckListItem.v4';
import CheckListItemV5      from '../../../src/ui/CheckListItem.v5';

const ITEMS = [
  "Premium Indian Embroidery কারুকাজ",
  "Soft, Skin-friendly ফ্যাব্রিক",
  "Perfect Fit — আরামদায়ক ও স্টাইলিশ",
  "ফ্রি পায়জামা সহ কমপ্লিট সেট",
  "৩ দিনের মধ্যে রিটার্ন/এক্সচেঞ্জ",
];

function ItemList({ Component }: { Component: React.ComponentType<any> }) {
  return (
    <div className="max-w-xl mx-auto px-8 py-10">
      <ul className="space-y-2">
        {ITEMS.map((item, i) => (
          <Component key={i}>{item}</Component>
        ))}
      </ul>
    </div>
  );
}

export default function CheckListItemPreview() {
  return (
    <div>
      <VariantWrapper label="CheckListItem — Default" index={0}>
        <ItemList Component={CheckListItemDefault} />
      </VariantWrapper>
      <VariantWrapper label="CheckListItem.v1" index={1}>
        <ItemList Component={CheckListItemV1} />
      </VariantWrapper>
      <VariantWrapper label="CheckListItem.v2" index={2}>
        <ItemList Component={CheckListItemV2} />
      </VariantWrapper>
      <VariantWrapper label="CheckListItem.v3" index={3}>
        <ItemList Component={CheckListItemV3} />
      </VariantWrapper>
      <VariantWrapper label="CheckListItem.v4" index={4}>
        <ItemList Component={CheckListItemV4} />
      </VariantWrapper>
      <VariantWrapper label="CheckListItem.v5" index={5}>
        <ItemList Component={CheckListItemV5} />
      </VariantWrapper>
    </div>
  );
}
