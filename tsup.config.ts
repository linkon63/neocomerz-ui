import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  clean: true,
  external: ['react', 'react-dom', 'next'],
  // Fixes joycon workspace-root traversal issue by anchoring config here
  tsconfig: './tsconfig.json',
});
