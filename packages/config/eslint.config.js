import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import prettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

/** @type {import('eslint').Linter.Config[]} */
export default [
  // Base JavaScript config
  js.configs.recommended,

  // TypeScript files
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        // React globals
        React: 'readonly',
        JSX: 'readonly',
        // DOM globals
        HTMLElement: 'readonly',
        HTMLButtonElement: 'readonly',
        HTMLTextAreaElement: 'readonly',
        HTMLDivElement: 'readonly',
        HTMLInputElement: 'readonly',
        Document: 'readonly',
        Window: 'readonly',
        window: 'readonly',
        document: 'readonly',
        Element: 'readonly',
        Event: 'readonly',
        MouseEvent: 'readonly',
        KeyboardEvent: 'readonly',
        // Browser APIs
        fetch: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',
        console: 'readonly',
        // Node.js globals
        process: 'readonly',
        Buffer: 'readonly',
        global: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        module: 'readonly',
        require: 'readonly',
        exports: 'readonly',
        // Testing globals
        describe: 'readonly',
        it: 'readonly',
        test: 'readonly',
        expect: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        beforeAll: 'readonly',
        afterAll: 'readonly',
        vi: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      prettier,
    },
    rules: {
      // Base TypeScript rules
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',
      // Prettier integration
      'prettier/prettier': 'error',
      // Disable conflicting rules
      'no-unused-vars': 'off', // Use TypeScript version instead
    },
  },

  // JavaScript files
  {
    files: ['**/*.{js,jsx}'],
    plugins: {
      prettier,
    },
    rules: {
      'prettier/prettier': 'error',
      'no-unused-vars': 'error',
      'no-console': 'warn',
    },
  },

  // Global ignores
  {
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/.next/**',
      '**/build/**',
      '**/.turbo/**',
      '**/coverage/**',
      '**/*.tsbuildinfo',
      '**/public/mockServiceWorker.js',
    ],
  },
];
