/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    fontFamily: {
      karla: ["Karla", "sans-serif"],
    },
    colors: {
      "light-wisteria": {
        100: "#f2edfa",
        200: "#e8def6",
        300: "#d6c3ef",
        400: "#c8ade8",
        500: "#a376d6",
        600: "#8c59c4",
      },
    },
    extend: {},
  },
  plugins: [],
};
