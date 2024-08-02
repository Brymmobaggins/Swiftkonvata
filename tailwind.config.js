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
      "bridal-heath": {
        50: "#fffaf3",
        100: "#ffeed5",
        200: "#fed9aa",
        300: "#fdbe74",
        400: "#fb973c",
        500: "#f97916",
        600: "#ea5e0c",
      },
      "silver-chalice": {
        50: "#f7f7f7",
        100: "#ededed",
        200: "#dfdfdf",
        300: "#c8c8c8",
        400: "#a6a6a6",
        500: "#999999",
        600: "#888888",
        700: "#7b7b7b",
        800: "#676767",
        900: "#545454",
        950: "#363636",
      },
    },
    extend: {},
  },
  plugins: [],
};
