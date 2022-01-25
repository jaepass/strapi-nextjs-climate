
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

const fontSizes = {
  xxs: '.625rem',
  xs: '.75rem',
  sm: '.938rem',
  base: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  '2xl': '1.5em',
  '3xl': '1.875rem',
  '4xl': '2.25rem',
  '5xl': '3rem',
  '6xl': '3.5rem',
  '7xl': '4rem',
};

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: fontSizes,
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        display: ["Montserrat"],
      },
      colors: {
        green: {
          light: '#7FDD9B',
          default: '#3dcc68',
          dark: '#1B945A',
        },
        gray: colors.slate,
      },
    },
  },
  plugins: [],
}
