/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
        'background' : '#e0dace',
        'button' : '#563e31',
        'white' : '#FFFFFF'
    },


    extend: {
      backgroundImage: {
        'hero_furn' : "url('./img/1.png')"
      }
    },
    fontFamily: {
      'custom': [ 'Playfair Display', 'serif' ]
    }
  },
  plugins: [],
}