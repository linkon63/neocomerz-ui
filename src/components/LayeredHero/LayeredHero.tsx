import React from 'react';
import LayeredHeroV0  from './LayeredHero.v0';
import LayeredHeroV1  from './LayeredHero.v1';
import LayeredHeroV2  from './LayeredHero.v2';
import LayeredHeroV3  from './LayeredHero.v3';
import LayeredHeroV4  from './LayeredHero.v4';
import LayeredHeroV5  from './LayeredHero.v5';
import { LayeredHeroProps } from '../../types/components';

interface LayeredHeroUIProps extends LayeredHeroProps {
  version?: 'default' | 'v1' | 'v2' | 'v3' | 'v4' | 'v5';
}

const versionMap = {
  default: LayeredHeroV0,
  v1: LayeredHeroV1,
  v2: LayeredHeroV2,
  v3: LayeredHeroV3,
  v4: LayeredHeroV4,
  v5: LayeredHeroV5,
};

export default function LayeredHeroUI({ version = 'default', ...rest }: LayeredHeroUIProps) {
  const Component = versionMap[version] ?? LayeredHeroV0;
  return <Component {...rest} />;
}
