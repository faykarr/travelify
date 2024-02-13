/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
      colors: {
        primary: "#5D50C6",
        secondary: "#F85E9F",
        white: "#FFFFFF",
        orange: "#FF5722",
        dark: "#191825",
      },
    },
  },
  plugins: [],
};
