/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        beVietNamPro: ['"Be Vietnam Pro"', 'sans-serif'],
        lexend: ['"Lexend"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
