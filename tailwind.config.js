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
          primary: "#CCB9AC",
          secondary: "#D8C9BA",
          accent: "#E5D1D8",
          light: "#F5F5F5",
          warm: "#E1DBCE",
          dark: "#2B2923",
        },
      },
    },
  },
  plugins: [],
};