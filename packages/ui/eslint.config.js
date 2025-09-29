import baseConfig from '@ai-chat/config/eslint.config.js';

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...baseConfig,
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      // UI component specific overrides
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    },
  },
];
