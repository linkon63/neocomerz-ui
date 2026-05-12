import React from 'react';
import HeroV0  from './Hero.v0';
import HeroV1  from './Hero.v1';
import HeroV2  from './Hero.v2';
import HeroV3  from './Hero.v3';
import HeroV4  from './Hero.v4';
import HeroV5  from './Hero.v5';
import { HeroProps } from '../../types/components';

interface HeroUIProps extends HeroProps {
  version?: 'default' | 'v1' | 'v2' | 'v3' | 'v4' | 'v5';
}

const versionMap = {
  default: HeroV0,
  v1: HeroV1,
  v2: HeroV2,
  v3: HeroV3,
  v4: HeroV4,
  v5: HeroV5,
};

export default function Hero({ version = 'default', ...rest }: HeroUIProps) {
  const Component = versionMap[version] ?? HeroV0;
  return <Component {...rest} />;
}
