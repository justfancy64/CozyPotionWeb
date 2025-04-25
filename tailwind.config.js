/** @type {import("tailwindcss").Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "discord-blue": "#001c81",
        "red-purple-1": "#522258",
        "red-purple-2": "#8C3061",
        "red-purple-3": "#C63C51",
        "red-purple-4": "#D95F59",
        "green-purple-1": "#210F37",
        "green-purple-2": "#4F1C51",
        "green-purple-3": "#A55B4B",
        "green-purple-4": "#DCA06D",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif", "arial"],
      },
      gridTemplateColumns: {
        "70-30": "70% 28%",
      },
      backgroundImage: {
        bannerImg: "url('/src/assets/potion_pattern_2.png')",
      },
    },
  },
  plugins: [],
};
