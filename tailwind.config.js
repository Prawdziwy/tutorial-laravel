const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: {
      DEFAULT: '0 0 5px 0 rgba(0, 0, 0, 0.08)',
    },
    colors: {
      default: 'var(--text-default-color)',
      accent: 'var(--text-accent-color)',
      'accent-light': 'var(--text-accent-light-color)',
      muted: 'var(--text-muted-color)',
      'muted-light': 'var(--text-muted-light-color)',
    },
    backgroundColor: {
      'page': 'var(--page-background-color)',
      'card': 'var(--card-background-color)',
      'button': 'var(--button-background-color)',
      'header': 'var(--header-background-color)'
    },
    textColor: theme => theme('colors'),
    extend: {
      // width: {
      //   '1/4': '',
      // }
      textColor: {
        'grey': 'rgba(0, 0, 0, 0.4)',
        'blue': '#47cdff',
      },
      backgroundColor: ['active'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
