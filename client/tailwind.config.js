/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        tablet: "640px",
        laptop: "1024px",
        desktop: "1280px",
      },
      fontSize: {
        default: "14px",
        middle: "16px",
      },
      backgroundColor: {
        primary: "rgba(0, 128, 0, 60%)", //green
        secondary: "rgba(217, 217, 217, 100%)", // grey
      },
      colors: {
        userPresent: "#008000", //green
        userWaiting: "#FFB42B", // orange
        userMissing: "#FF2B2B", // red
      },
    },
  },
  plugins: [],
};
