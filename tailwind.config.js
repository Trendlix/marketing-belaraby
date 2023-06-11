/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/templates/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    // container: {
    //   center: true,
    //   screens: {
    //     mobile: '85%',
    //     tablet: "77%",
    //     desktop: "1280px",
    //     // DEFAULT: "100%",
    //     // sm: "77%",
    //     // md: "77%",
    //     // lg: "77%",
    //     // xl: "77%",
    //     // "2xl": "1280px",
    //   },
    // }
    boxShadow: {
      main: '0 4px 20px rgba(0, 0, 0, 0.25)',
      ...defaultTheme.boxShadow,
    }
  },
  extend: {

  },
  plugins: [],
}

