import SizeChartV0  from './SizeChart.v0';
import SizeChartV1  from './SizeChart.v1';
import SizeChartV2  from './SizeChart.v2';
import SizeChartV3  from './SizeChart.v3';
import SizeChartV4  from './SizeChart.v4';
import SizeChartV5  from './SizeChart.v5';

export interface SizeChartUIProps {
  version?: 'default' | 'v1' | 'v2' | 'v3' | 'v4' | 'v5';
  title?: string;
  description?: string;
  sizeData?: Array<{
    measurement?: string;
    description?: string;
    m?: string;
    l?: string;
    xl?: string;
    xxl?: string;
  }>;
  chartImage?: string;
  chartImageAlt?: string;
  whatsappText?: string;
  whatsappNumber?: string;
  contactText?: string;
  returnPolicy?: string;
  colors?: {
    primary?: string;
    text?: string;
    background?: string;
  };
}

const versionMap = {
  default: SizeChartV0,
  v1: SizeChartV1,
  v2: SizeChartV2,
  v3: SizeChartV3,
  v4: SizeChartV4,
  v5: SizeChartV5,
};

export default function SizeChartUI({ version = 'default', ...rest }: SizeChartUIProps) {
  const Component = versionMap[version] ?? SizeChartV0;
  return <Component {...rest} />;
}
