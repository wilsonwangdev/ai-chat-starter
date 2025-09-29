import baseConfig from '../../packages/config/eslint.config.js';

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...baseConfig,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      globals: {
        // Additional globals for web app
        vi: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        expect: 'readonly',
      },
    },
    rules: {
      // Web app specific overrides
      'no-console': 'off', // Allow console in development
    },
  },
];
