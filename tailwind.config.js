/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Integral', 'sans'],
        custom1: ['Roboto', 'sans'],
        custom2: ['Integral', 'sans'],
        custom3: ['Nexa', 'sans'],
        custom4: ['ZonaPro', 'sans'],
        custom5: ['Alicante', 'sans'],
        custom6: ['AlicanteExtraLight', 'sans']
      },
    },
  },
  plugins: [],
}

