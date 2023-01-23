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
      animation: {
        loaderBallGrow: 'loaderBallGrow var(--tw-animate-speed) ease infinite',
        loaderTriangulate: ' loaderTriangulate var(--tw-animate-speed) ease infinite'
      },
      keyframes: {
        loaderBallGrow: {
          '0%, 100%': { transform: 'scale(1.5)' },
          '20%, 70%': { transform: 'none' }
        },
        loaderTriangulate: {
          '0%, 100%': { transform: 'none' },
          '33.333%': { transform: 'translate(120%, 175%)' },
          '66.666%': { transform: 'translate(-95%, 175%)' }
        }
      }
    },
  },
  plugins: [],
}