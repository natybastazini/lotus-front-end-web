import config from './postcss.config.mjs';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'escrita': "var(--escrita)",
        'input': "var(--input)",
        'principal': "var(--principal)"
      },
      fontFamily: {
        AbeeZee: "var(--font-abeeZee)",
        Inter: "var(--font-inter)"
      },
    },
  },
  plugins: [],
};

export default config;