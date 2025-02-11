/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{jsx,js,ts,tsx}"],
  theme: {
    colors: {
      black: '#05010D',
      whiteButton: '#FFFFFF0D',
      whiteText : '#FFFFFF99',
      white: '#fff',
      white90: '#FFFFFFE5',
      white30: '#FFFFFF4D',
      whiteTwenty: '#FFFFFF33',
      errorValid: '#d63030',
      textPink: '#B12424',
      textBlightRed: '#FF6363',
      transparent: '#ffffff00'
    },
    backgroundImage: {
      'hero-pattern': 'linear-gradient(94.61deg, #FF5B37 0.52%, #AB0052 100%)',
      'hero-pink': 'linear-gradient(90.08deg, rgba(252, 136, 160, 0.5) 0%, rgba(249, 195, 195, 0.5) 100%)',
      'hero-white': 'linear-gradient(270.01deg, #FFCFE0 0.04%, #FFFFFF 52.59%, #FFFFFF 99.94%)',
      'hero-ellipse': 'linear-gradient(0deg, rgba(255, 99, 99, 0.8), rgba(255, 99, 99, 0.8)),linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))'
    },
    extend: {},
  },
  plugins: [],
}
