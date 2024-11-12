/** @type {import("tailwindcss").Config} */
export default {
  darkMode: "selector",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3a86ff",
        dark: {
          "primary": "#2b2d42",
          "secondary": "#272932",
          "body": "#242938",
        },
        gray: { DEFAULT: "#394E6A", dark: "#414558" },
        light: "#edf2f4",
      },
    },
    fontFamily: {
      display: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};