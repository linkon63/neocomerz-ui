# NeoComerz Storefront UI

Centralized UI components, Puck configurations, and shared types for the NeoComerz ecosystem.

## 🚀 Features

- **Puck Compatible**: Fully integrated configurations for the Puck editor.
- **Modern UI**: Components built with React, Tailwind CSS, and Lucide Icons.
- **Type Safe**: Comprehensive TypeScript definitions for all components and props.
- **Multi-Framework Support**: Bundled in CJS and ESM formats.

## 📦 Installation

```bash
npm install neocomerz-storefront-ui
# or
pnpm add neocomerz-storefront-ui
```

## 🛠️ Usage

### 1. In Page Builder (Puck Config)

```tsx
import { Config } from "@puckeditor/core";
import { PuckProps, RootProps, Hero, OrderForm } from "neocomerz-storefront-ui";

export const config: Config<PuckProps, RootProps> = {
  components: {
    Hero,
    OrderForm,
    // Add other components...
  },
  // ... rest of config
};
```

### 2. In Storefront (Renderer)

```tsx
import { Render } from "@puckeditor/core";
import { config } from "./puck.config";

export function LandingPage({ data }) {
  return <Render config={config} data={data} />;
}
```

## 💻 Local Development

If you want to modify the library and see changes in real-time in your app:

### 1. In the `neocomerz-ui` directory:
```bash
# Install dependencies
pnpm install

# Build the package
npm run build

# Or run in watch mode
npm run dev
```

### 2. Linking the package locally (Optional):
To use the local version of this package in another project without publishing:
```bash
# Inside neocomerz-ui folder
pnpm link --global

# Inside your app folder (e.g., pagebuilder-nc)
pnpm link --global neocomerz-storefront-ui
```

## 🏗️ Project Structure

- `src/ui`: Core UI components (Raw React components).
- `src/puck`: Puck editor configurations for the UI components.
- `src/types`: Shared TypeScript interfaces and types.
- `dist`: Compiled production-ready files (generated after build).

## 📄 License

MIT © [linkon63](https://github.com/linkon63)
