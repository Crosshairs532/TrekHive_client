/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "syne": ['Syne', "sans-serif"],
        "DS": ['Dancing Script', "cursive"]
      }
    },
  },
  plugins: [require("daisyui")],
})

