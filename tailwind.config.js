/** @type {import('tailwindcss').Config} */
export default {
 content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
 theme: {
  extend: {
   colors: {
    main: "#262626",
   },
   screens: { xlg: "1400px" },
  },
 },
 plugins: [],
};
