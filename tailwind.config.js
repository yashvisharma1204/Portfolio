/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // This is the new font family name you will use in your className
        display: ['"Cormorant Garamond"'],
        sans: ['Inter', 'sans-serif'], // Or any other sans-serif font
        cursive: ['"Kapakana"','cursive'],
      },
    },
  },
  plugins: [],
}