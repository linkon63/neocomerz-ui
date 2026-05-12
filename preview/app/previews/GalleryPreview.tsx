'use client';
import React from 'react';
import VariantWrapper from './_VariantWrapper';

import GalleryGridDefault  from '../../../src/ui/GalleryGrid';
import GalleryGridV1       from '../../../src/ui/GalleryGrid.v1';
import GalleryGridV2       from '../../../src/ui/GalleryGrid.v2';
import GalleryGridV3       from '../../../src/ui/GalleryGrid.v3';
import GalleryGridV4       from '../../../src/ui/GalleryGrid.v4';
import GalleryGridV5       from '../../../src/ui/GalleryGrid.v5';

import GalleryGrid6Default from '../../../src/ui/GalleryGrid6';
import GalleryGrid6V1      from '../../../src/ui/GalleryGrid6.v1';
import GalleryGrid6V2      from '../../../src/ui/GalleryGrid6.v2';
import GalleryGrid6V3      from '../../../src/ui/GalleryGrid6.v3';
import GalleryGrid6V4      from '../../../src/ui/GalleryGrid6.v4';
import GalleryGrid6V5      from '../../../src/ui/GalleryGrid6.v5';

import GalleryColDefault   from '../../../src/ui/GalleryCol';
import GalleryColV1        from '../../../src/ui/GalleryCol.v1';
import GalleryColV2        from '../../../src/ui/GalleryCol.v2';
import GalleryColV3        from '../../../src/ui/GalleryCol.v3';
import GalleryColV4        from '../../../src/ui/GalleryCol.v4';
import GalleryColV5        from '../../../src/ui/GalleryCol.v5';

export default function GalleryPreview() {
  return (
    <div>
      {/* ── GalleryGrid ─────────────────────────────────────────────── */}
      <VariantWrapper label="GalleryGrid — Default" index={0}>
        <GalleryGridDefault title="Curated Collection" description="Explore our visually stunning grid of premium products." />
      </VariantWrapper>
      <VariantWrapper label="GalleryGrid.v1" index={1}>
        <GalleryGridV1 title="GalleryGrid v1" description="Variant 1 layout." />
      </VariantWrapper>
      <VariantWrapper label="GalleryGrid.v2" index={2}>
        <GalleryGridV2 title="GalleryGrid v2" description="Variant 2 layout." />
      </VariantWrapper>
      <VariantWrapper label="GalleryGrid.v3" index={3}>
        <GalleryGridV3 title="GalleryGrid v3" description="Variant 3 layout." />
      </VariantWrapper>
      <VariantWrapper label="GalleryGrid.v4" index={4}>
        <GalleryGridV4 title="GalleryGrid v4" description="Variant 4 layout." />
      </VariantWrapper>
      <VariantWrapper label="GalleryGrid.v5" index={5}>
        <GalleryGridV5 title="GalleryGrid v5" description="Variant 5 layout." />
      </VariantWrapper>

      {/* ── GalleryGrid6 ────────────────────────────────────────────── */}
      <VariantWrapper label="GalleryGrid6 — Default" index={6}>
        <GalleryGrid6Default title="Premium Collection" description="A specialized 6-pack grid for your finest products." />
      </VariantWrapper>
      <VariantWrapper label="GalleryGrid6.v1" index={7}>
        <GalleryGrid6V1 title="GalleryGrid6 v1" description="Variant 1 layout." />
      </VariantWrapper>
      <VariantWrapper label="GalleryGrid6.v2" index={8}>
        <GalleryGrid6V2 title="GalleryGrid6 v2" description="Variant 2 layout." />
      </VariantWrapper>
      <VariantWrapper label="GalleryGrid6.v3" index={9}>
        <GalleryGrid6V3 title="GalleryGrid6 v3" description="Variant 3 layout." />
      </VariantWrapper>
      <VariantWrapper label="GalleryGrid6.v4" index={10}>
        <GalleryGrid6V4 title="GalleryGrid6 v4" description="Variant 4 layout." />
      </VariantWrapper>
      <VariantWrapper label="GalleryGrid6.v5" index={11}>
        <GalleryGrid6V5 title="GalleryGrid6 v5" description="Variant 5 layout." />
      </VariantWrapper>

      {/* ── GalleryCol ──────────────────────────────────────────────── */}
      <VariantWrapper label="GalleryCol — Default" index={12}>
        <GalleryColDefault title="Our Product Gallery" description="Check out our latest collection." />
      </VariantWrapper>
      <VariantWrapper label="GalleryCol.v1" index={13}>
        <GalleryColV1 title="GalleryCol v1" description="Variant 1 layout." />
      </VariantWrapper>
      <VariantWrapper label="GalleryCol.v2" index={14}>
        <GalleryColV2 title="GalleryCol v2" description="Variant 2 layout." />
      </VariantWrapper>
      <VariantWrapper label="GalleryCol.v3" index={15}>
        <GalleryColV3 title="GalleryCol v3" description="Variant 3 layout." />
      </VariantWrapper>
      <VariantWrapper label="GalleryCol.v4" index={16}>
        <GalleryColV4 title="GalleryCol v4" description="Variant 4 layout." />
      </VariantWrapper>
      <VariantWrapper label="GalleryCol.v5" index={17}>
        <GalleryColV5 title="GalleryCol v5" description="Variant 5 layout." />
      </VariantWrapper>
    </div>
  );
}
