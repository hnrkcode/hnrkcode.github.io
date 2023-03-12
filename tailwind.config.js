/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.njk"],
  theme: {
    extend: {
      colors: {
        primary: "#2b2d42",
        secondary: "#edf2f4",
      },
    },
  },
  plugins: [],
};
