/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'navbg':'rgba(255, 211, 138, 0.80)'
      }
    },
  },
  plugins: [],
}