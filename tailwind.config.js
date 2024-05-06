/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        coverbyyourgrace: ["Covered By Your Grace", "sans-serif"],
      },
    },
  },
  plugins: [],
};
