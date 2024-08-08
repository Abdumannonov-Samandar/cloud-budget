/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: `Lato, sans-serif`,
      },
      boxShadow: {
        boxshadow1: '0px 5px 30px 0px #0000001A',

      }
    },
  },
  plugins: [],
}