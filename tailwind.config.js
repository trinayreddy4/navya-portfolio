/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":"#0B0C10",
        "secondary":"#66FCF1",
        "tertiary":"#C5C6C7"
      }
    },
      screens: {
        'lg': {'max': '2023px'},
        'sm': {'max': '639px'},
      }

  },
  plugins: [],
}