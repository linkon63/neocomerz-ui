import GalleryGridV0  from './GalleryGrid.v0';
import GalleryGridV1  from './GalleryGrid.v1';
import GalleryGridV2  from './GalleryGrid.v2';
import GalleryGridV3  from './GalleryGrid.v3';
import GalleryGridV4  from './GalleryGrid.v4';
import GalleryGridV5  from './GalleryGrid.v5';

export interface GalleryGridProps {
  version?: 'default' | 'v1' | 'v2' | 'v3' | 'v4' | 'v5';
  title?: string;
  description?: string;
  images?: { src: string; alt?: string }[];
}

const versionMap = {
  default: GalleryGridV0,
  v1: GalleryGridV1,
  v2: GalleryGridV2,
  v3: GalleryGridV3,
  v4: GalleryGridV4,
  v5: GalleryGridV5,
};

export default function GalleryGridUI({ version = 'default', ...rest }: GalleryGridProps) {
  const Component = versionMap[version] ?? GalleryGridV0;
  return <Component {...rest} />;
}
