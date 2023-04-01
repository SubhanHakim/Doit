/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6E5DE7",
        darkBlack: "#404040",
        grey: "#C7C9D9",
      },
    },
  },
  plugins: [],
};
