const baseConfig = require("@ai-chat/config/tailwind.config.cjs");

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...baseConfig,
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', '../../packages/ui/src/**/*.{js,ts,jsx,tsx}'],
};
