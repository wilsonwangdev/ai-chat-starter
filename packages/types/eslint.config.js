import baseConfig from '../config/eslint.config.js';

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...baseConfig,
  {
    files: ['**/*.{ts}'],
    languageOptions: {
      globals: {
        // Additional globals for type tests
        vi: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        expect: 'readonly',
      },
    },
    rules: {
      // Type definitions specific rules
      '@typescript-eslint/no-unused-vars': 'off', // Types may appear unused
      '@typescript-eslint/no-explicit-any': 'error', // Stricter for type definitions
    },
  },
];
