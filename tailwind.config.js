/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': {'max': '599px' },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': { 'min': '600px', 'max': '899px' },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': { 'min': '900px' },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }
    },
    colors: {
      'white': '#ffffff',
      'black': '#000000',
      'red': '#ff0000',
      'navy': '#000080',
      'blue': '#00bfff',
      "yellow": "#ffff00",
      'gray': '#8492a6',
      "primary_button": "#0000ff",
      "primary_button_hover": "#0000b3",
      "primary_shadow": "#e6e6e6",
      "secondary_shadow": "#bfbfbf"
    },
    extend: {
    }
  },
  plugins: [],
}