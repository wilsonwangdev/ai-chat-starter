import { defineConfig, mergeConfig } from 'vitest/config';
import baseConfig from './base.js';

export default mergeConfig(
  baseConfig,
  defineConfig({
    test: {
      environment: 'node',
      include: ['src/**/*.{test,spec}.{js,ts}'],
      coverage: {
        include: ['src/**/*.{js,ts}'],
        exclude: ['src/**/*.{test,spec}.*', 'src/**/index.ts'],
      },
    },
  })
);
