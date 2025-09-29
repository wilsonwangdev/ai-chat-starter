import { defineConfig } from 'vitest/config';
import reactConfig from '@ai-chat/config/vitest/react.js';

export default defineConfig({
  ...reactConfig,
  test: {
    ...reactConfig.test,
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
  },
});
