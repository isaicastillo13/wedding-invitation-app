/** @type {import('tailwindcss').Config} */
module.exports = {
content: [
  "./app/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      colors: {
        wedding: {
          primary: "#997b6f",
          secondary: "#b69a8e",
          accent: "#d3c1b5",
          light: "#ede4dd",
          warm: "#E1DBCE",
          dark: "#2f2520",
        },
      },
    },
  },
  plugins: [],
};