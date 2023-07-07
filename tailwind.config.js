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
        secondary: {
          100: "#E5E5E5",
        },
      },
      backgroundImage: {
        "header-bg": "url('./src/images/Image.png')",
      },
    },
  },
  plugins: [],
};
