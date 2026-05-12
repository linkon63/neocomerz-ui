'use client';
import React from 'react';
import VariantWrapper from './_VariantWrapper';

import HelplineDefault from '../../../src/ui/Helpline';
import HelplineV1      from '../../../src/ui/Helpline.v1';
import HelplineV2      from '../../../src/ui/Helpline.v2';
import HelplineV3      from '../../../src/ui/Helpline.v3';
import HelplineV4      from '../../../src/ui/Helpline.v4';
import HelplineV5      from '../../../src/ui/Helpline.v5';

function Padded({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-8 py-10 flex flex-wrap gap-6 items-center">
      {children}
    </div>
  );
}

export default function HelplinePreview() {
  return (
    <div>
      <VariantWrapper label="Helpline — Default" index={0}>
        <Padded>
          <HelplineDefault />
          <HelplineDefault whatsappNumber="+880 1912-345678" />
        </Padded>
      </VariantWrapper>
      <VariantWrapper label="Helpline.v1" index={1}>
        <Padded>
          <HelplineV1 />
          <HelplineV1 whatsappNumber="+880 1912-345678" />
        </Padded>
      </VariantWrapper>
      <VariantWrapper label="Helpline.v2" index={2}>
        <Padded>
          <HelplineV2 />
          <HelplineV2 whatsappNumber="+880 1912-345678" />
        </Padded>
      </VariantWrapper>
      <VariantWrapper label="Helpline.v3" index={3}>
        <Padded>
          <HelplineV3 />
          <HelplineV3 whatsappNumber="+880 1912-345678" />
        </Padded>
      </VariantWrapper>
      <VariantWrapper label="Helpline.v4" index={4}>
        <Padded>
          <HelplineV4 />
          <HelplineV4 whatsappNumber="+880 1912-345678" />
        </Padded>
      </VariantWrapper>
      <VariantWrapper label="Helpline.v5" index={5}>
        <Padded>
          <HelplineV5 />
          <HelplineV5 whatsappNumber="+880 1912-345678" />
        </Padded>
      </VariantWrapper>
    </div>
  );
}
