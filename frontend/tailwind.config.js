// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    // screens: {
    // "sm-xs": { max: "575px" }, // extra small mobile
    // sm: { min: "575px", max: "767px" }, // small mobile
    // "sm-lg": { min: "480px", max: "575px" }, //large mobile
    // md: { min: "768px", max: "991px" },
    // lg: { min: "992px", max: "1197px" },
    // xl: { min: "1198px", max: "1365.9px" },
    // "2xl": { min: "1366px", max: "1919px" },
    // },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
