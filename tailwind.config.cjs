/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jost: ["Jost"],
        lusitana: ["Lusitana"],
        mplus2: ["M+PLUS+2"],
        roboto: ["Roboto+Condensed"],
      },
      screens: {
        'desk': '1440px',
      },
    },
  },
  plugins: [],
}