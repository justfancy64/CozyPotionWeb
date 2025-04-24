/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      gridTemplateColumns: {
        '70-30': '70% 28%'
      },
      backgroundImage: {
        bannerImg: "url('/src/assets/potion_pattern_2.png')",
      }
    },
  },
  plugins: [],
}

