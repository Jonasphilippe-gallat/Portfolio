/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],

  theme: {

    screens: {



      'tablet': '720px',
      'bigphone': '450px',
      '620px': '620px',
      '0px': '0px',
      '1000px': '1000px',
      '1350px': '1350px',

    },

    extend: {
      fontFamily: {

        'montserrat': ['Montserrat '],
        'outfit': ['Outfit'],
        'archivo': ['Archivo'],
      },
      colors: {
        'main-blue': "#0C2633",
        'main-red': "#FFf016",
      },
    },
  },
  plugins: [],
}

