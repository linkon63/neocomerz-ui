import React from 'react';
import InlineHeroV0  from './InlineHero.v0';
import InlineHeroV1  from './InlineHero.v1';
import InlineHeroV2  from './InlineHero.v2';
import InlineHeroV3  from './InlineHero.v3';
import InlineHeroV4  from './InlineHero.v4';
import InlineHeroV5  from './InlineHero.v5';
import { InlineHeroProps } from '../../types/components';

interface InlineHeroUIProps extends InlineHeroProps {
  version?: 'default' | 'v1' | 'v2' | 'v3' | 'v4' | 'v5';
}

const versionMap = {
  default: InlineHeroV0,
  v1: InlineHeroV1,
  v2: InlineHeroV2,
  v3: InlineHeroV3,
  v4: InlineHeroV4,
  v5: InlineHeroV5,
};

export default function InlineHeroUI({ version = 'default', ...rest }: InlineHeroUIProps) {
  const Component = versionMap[version] ?? InlineHeroV0;
  return <Component {...rest} />;
}
