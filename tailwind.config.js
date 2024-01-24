const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,mdx}'],
  safelist: [
    'rounded',
    {
      pattern: /^(bg|accent)-/,
      variants: ['before', 'checked'],
    },
    {
      pattern: /^(left|right|bottom|top)-(0|1\/2|auto|full)/,
      variants: ['sm', 'sm:after', 'md'],
    },
    {
      pattern: /^(translate-x|-translate-x|translate-y|-translate-y)-(0|1\/2)/,
      variants: ['sm', 'sm:after', 'md'],
    },
    {
      pattern: /^(hidden|block)/,
      variants: ['sm:after'],
    },
    {
      pattern: /^(mb|ml|mt|mr)-4/,
      variants: ['sm', 'sm:after', 'md'],
    },
    {
      pattern: /^(rounded)-/,
      variants: ['sm', 'sm:after'],
    },
  ],
  theme: {
    extend: {},
    screens: {
      xs: '500px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      ...defaultTheme.screens,
    },
    colors: {
      ...defaultTheme.colors,
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: {
        DEFAULT: '#000000',
        100: '#282828',
      },
      tahiti: {
        100: '#cffafe',
        200: '#a5f3fc',
        300: '#67e8f9',
        400: '#22d3ee',
        500: '#06b6d4',
        600: '#0891b2',
        700: '#0e7490',
        800: '#155e75',
        900: '#164e63',
      },
      red: {
        DEFAULT: '#FF0000',
        100: '#FF0000',
      },
      gray: {
        DEFAULT: '#8F8F8F',
        100: '#F61010',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('tailwindcss-safe-area'),
  ],
};
