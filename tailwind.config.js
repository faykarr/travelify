/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
        cirular: ["Circular STD"],
      },
      colors: {
        primary: "#5D50C6",
        secondary: "#F85E9F",
        white: "#FFFFFF",
        orange: "#FF5722",
        dark: "#191825",
      },
      dropShadow: {
        btnShadow: [
          "0px 0px 0px 0px rgba(0, 0, 0, 0.10)",
          "0px 5px 11px 0px rgba(0, 0, 0, 0.10)",
          "0px 20px 20px 0px rgba(0, 0, 0, 0.09)",
          "0px 45px 27px 0px rgba(0, 0, 0, 0.05)",
          "0px 81px 32px 0px rgba(0, 0, 0, 0.01)",
          "0px 126px 35px 0px rgba(0, 0, 0, 0.00)",
        ],
      },
    },
  },
  plugins: [],
};
