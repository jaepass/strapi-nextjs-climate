
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');


module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        purple: {
          light: '#FCA3F9',
          default: '#F173EF',
          dark: '#E246DF',
        },
        green: {
          light: '#7FDD9B',
          default: '#3dcc68',
          dark: '#1B945A',
        },
        orange: {
          light: '#FFBEA7',
          default: '#FF9570',
          dark: '#FF7D4F',
        },
        gray: colors.slate,
      },
    },
  },
  plugins: [],
}
