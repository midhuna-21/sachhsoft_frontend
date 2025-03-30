/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        darkPurple: '#1A0E20',
        blue1: '#8D49E4',
        customOrange: "#FE720D",
        customPurple: '#CDC9E4',
        mediumPurple:"#7C4EFE",
        customGray: '#D9D6DF',
        softLavender:'#CDC9E4',
        mutedBlueGray:'#9A9DAA',
        shadownPurple:'#7C4EFE',
        blueGrayShade:"#C4C7CE",
        deepNavyShade:"#010013",
        purpleBlackShade:"#1A0E20",
        deepPurple:'#5F01BD',
        pinkishPurple:'#B53EB1',
        vibrantPurple:'#1A0E20',
        lightGray:'#CCC9C9',
        lightgrayishpurple:'#D9D6DF',
        moredarkPurple:"#030114"
      },
      fontFamily: {
        arial: ['Arial', 'sans-serif'],
        avenir: ["Avenir", "Helvetica", "Arial", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
}
