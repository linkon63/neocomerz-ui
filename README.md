# NeoComerz Storefront UI

Premium, high-performance UI components for NeoComerz storefronts. Built with React and optimized for Next.js.

## Features

- 🚀 **Next.js Optimized**: Built-in support for Next.js Image and Link.
- 🎨 **Fully Customizable**: Themeable components with primary/secondary colors.
- 📱 **Responsive Design**: Mobile-first approach for all components.
- 📦 **Tree-Shakable**: ESM support for minimal bundle sizes.
- 🛠️ **Puck Editor Ready**: Includes configurations for Puck CMS.

## Installation

```bash
npm install neocomerz-storefront-ui
# or
yarn add neocomerz-storefront-ui
# or
pnpm add neocomerz-storefront-ui
```

### Peer Dependencies

Ensure you have the following installed:

```bash
npm install react react-dom next react-icons lucide-react
```

## Usage

```tsx
import { Hero, PrimaryButton } from 'neocomerz-storefront-ui';

export default function Home() {
  return (
    <main>
      <Hero 
        title="Elevate Your Style"
        subtitle="Exclusive Summer Collection"
        primaryColor="#F36621"
      />
      <PrimaryButton href="/shop">Shop Now</PrimaryButton>
    </main>
  );
}
```

## Available Components

### Heroes
- `Hero`: Classic large hero section with overlay and call to action.
- `LayeredHeroUI`: Elegant hero with multiple image layers and watermark.
- `InlineHeroUI`: Minimal industrial-style hero with background image.

### Galleries
- `GalleryGridUI`: Feature-rich grid for product showcasing.
- `GalleryGrid6UI`: Specialized 6-item grid layout.
- `GalleryColUI`: Simple column-based gallery.

### Commerce
- `OrderFormUI`: Full-featured product order form with variant selection and billing.
- `PriceChartUI`: Dynamic price and size comparison table.

### Feedback & Info
- `TestimonialsUI`: Customer feedback section with image grid.
- `FAQUI`: Interactive accordion-style FAQ.
- `QualityUI`: Trust-building section highlighting product features.
- `Helpline`: Quick WhatsApp support button.

### Utilities
- `SectionHeader`: Standardized header for page sections.
- `CheckListItem`: Reusable list item with green check icon.
- `PrimaryButton`: Versatile button component with multiple variants.

## Development

To start the development server:
```bash
npm run dev
```

To build for production:
```bash
npm run build
```

## License

MIT © NeoComerz
