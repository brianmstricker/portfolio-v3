/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        regular: ["Geologica", "sans-serif"],
        fancy: ["Dancing Script", "cursive"],
      },
      colors: {
        main: "#070A2E",
      },
    },
  },
  plugins: [],
};
