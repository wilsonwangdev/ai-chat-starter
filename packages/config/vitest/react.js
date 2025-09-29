import { defineConfig, mergeConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import baseConfig from './base.js';

export default mergeConfig(
  baseConfig,
  defineConfig({
    plugins: [react()],
    test: {
      environment: 'jsdom',
      setupFiles: ['./vitest.setup.ts'],
      include: ['**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
      globals: true,
    },
  })
);
