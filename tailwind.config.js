/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/*.{js,ts,jsx,tsx},",
  ],
  theme: {
    extend: {
      colors: {
        'primary': "#0c0543",
        'secondary': "#312e81",
        'accent': "#22d3ee",
        'neutral': "#d1d5db",
        'base': "#1d232a",
        'info': "#f3f4f6",
        'success': "#36d399",
        'warning': "#fbbd23",
        'error': "#f87272",
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      borderRadius: {
        'primary': '0.5rem',
      }
    },
  },
  plugins: [],
});
