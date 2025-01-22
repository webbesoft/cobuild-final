const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        lightBg: "#f9feff",
        primary: "#0A363C",
        primaryLighter: "#125F69",
        accent: "#c19e86",
        secondary: "#f88687",
        text: "#021c20",
        textLight: "#f9feff",
        darkened: "#030f11",
      },
      // potential brand colors
      // #e8e4db
      // #4f6f81
      // #617e8f
      // #748e9d
      // #879eac
    },
  },
  plugins: [],
};
