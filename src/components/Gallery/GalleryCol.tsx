import GalleryColV0  from './GalleryCol.v0';
import GalleryColV1  from './GalleryCol.v1';
import GalleryColV2  from './GalleryCol.v2';
import GalleryColV3  from './GalleryCol.v3';
import GalleryColV4  from './GalleryCol.v4';
import GalleryColV5  from './GalleryCol.v5';

export interface GalleryColProps {
  version?: 'default' | 'v1' | 'v2' | 'v3' | 'v4' | 'v5';
  title?: string;
  description?: string;
  images?: { src: string; alt?: string }[];
}

const versionMap = {
  default: GalleryColV0,
  v1: GalleryColV1,
  v2: GalleryColV2,
  v3: GalleryColV3,
  v4: GalleryColV4,
  v5: GalleryColV5,
};

export default function GalleryColUI({ version = 'default', ...rest }: GalleryColProps) {
  const Component = versionMap[version] ?? GalleryColV0;
  return <Component {...rest} />;
}
