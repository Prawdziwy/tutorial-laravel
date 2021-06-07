const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: {
      DEFAULT: '0 0 5px 0 rgba(0, 0, 0, 0.08)',
    },
    colors: {
      greylight: '#F5F6F9',
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
    },
    textColor: theme => theme('colors'),
    extend: {
      // width: {
      //   '1/4': '',
      // }
      textColor: {
        'grey': 'rgba(0, 0, 0, 0.4)',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
