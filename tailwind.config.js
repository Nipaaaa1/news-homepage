/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          softOrange: "hsl(35, 77%, 62%)",
          softRed: "hsl(5, 85%, 63%)",
        },
        neutral: {
          offWhite: "hsl(36, 100%, 99%)",
          grayishBlue: "hsl(233, 8%, 79%)",
          darkGrayishBlue: "hsl(236, 13%, 42%)",
          veryDarkBlue: "hsl(240, 100%, 5%)",
        },
      },
      fontFamily: {
        inter: ["inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
