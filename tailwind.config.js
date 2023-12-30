/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/content/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        dark_primary: colors.slate,
        dark_secondary: colors.white,
        dark_tertiary: colors.blue,
        light_primary: colors.white,
        light_secondary: colors.slate,
      },
    },
  },
  plugins: [],
};
