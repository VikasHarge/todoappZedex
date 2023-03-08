/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    colors: {
      'pink': '#EA5959',
      'grey' : '#525252',
      'darkGrey' : "#5A5A5A",
      'black' : '#000000',
      'borderGrey' : '#D8D8D8',
      'red' : '#FF0000',
      'lightPink' : '#F3F3F3',
      'white' : '#ffff'
    },
    fontSize: {
      'pm': ['31px', {
        fontWeight: '700',
      }],
      'sd1': ['22px', {
        fontWeight: '700',
      }],
      'sd2': ['22px', {
        fontWeight: '400',
      }],
      'th': ['18px', {
        fontWeight: '400',
      }],
    },
    fontFamily: {
      lato : ['Lato', 'sans-serif'],
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      borderRadius: {
        '2xl': '8px',
        '4xl': '2rem',
      },
      boxShadow: {
        '10xl': '0px 10px 10px rgba(0, 0, 0, 0.25)',
      },
      padding : {
        '51px' : '51px'
      },
    },
  },
  variants : {
    extend : {
      display : ["group-hover"]
    }
  },
  plugins: [],
}
