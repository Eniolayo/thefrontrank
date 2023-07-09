const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx,svg}`,
    `./src/components/**/*.{js,jsx,ts,tsx,svg}`,
  ],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        primary: ["Lora", "serif"],
      },
      colors: {
        primary: {
          100: "#D4A373",
        },
        secondary: {
          100: "#E5E5E5",
          200: "#495057",
          300: "#6C757D",
        },
      },
      backgroundImage: {
        "header-bg": "url('./src/images/Image.png')",
      },
    },
  },
  plugins: [],
};
