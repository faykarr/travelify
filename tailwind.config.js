/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      primary: "#5D50C6",
      secondary: "#F85E9F",
      white: "#FFFFFF",
      orange: "#FF5722",
    },
    extend: {
      fontFamily: {
        jakarta: ["Poppins"],
      },
    },
  },
  plugins: [],
};
