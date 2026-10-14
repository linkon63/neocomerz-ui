import GalleryGrid6V0  from './GalleryGrid6.v0';
import GalleryGrid6V1  from './GalleryGrid6.v1';
import GalleryGrid6V2  from './GalleryGrid6.v2';
import GalleryGrid6V3  from './GalleryGrid6.v3';
import GalleryGrid6V4  from './GalleryGrid6.v4';
import GalleryGrid6V5  from './GalleryGrid6.v5';

export interface GalleryGrid6Props {
  version?: 'default' | 'v1' | 'v2' | 'v3' | 'v4' | 'v5';
  title?: string;
  description?: string;
  images?: { src: string; alt?: string }[];
}

const versionMap = {
  default: GalleryGrid6V0,
  v1: GalleryGrid6V1,
  v2: GalleryGrid6V2,
  v3: GalleryGrid6V3,
  v4: GalleryGrid6V4,
  v5: GalleryGrid6V5,
};

export default function GalleryGrid6UI({ version = 'default', ...rest }: GalleryGrid6Props) {
  const Component = versionMap[version] ?? GalleryGrid6V0;
  return <Component {...rest} />;
}
