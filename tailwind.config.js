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
        "secondary-dark": "#272932",
        "primary-dark": "#2b2d42",
        "body-dark": "#242938",
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