let defaultConfig = require('tailwindcss/defaultConfig');

let colors = require('tailwindcss/colors')

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
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px'
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
  modules: {
    appearance: ['responsive'],
    backgroundAttachment: ['responsive'],
    backgroundColors: ['responsive', 'hover', 'focus'],
    backgroundPosition: ['responsive'],
    backgroundRepeat: ['responsive'],
    backgroundSize: ['responsive'],
    borderCollapse: [],
    borderColors: ['responsive', 'hover', 'focus'],
    borderRadius: ['responsive'],
    borderStyle: ['responsive'],
    borderWidths: ['responsive'],
    cursor: ['responsive'],
    display: ['responsive'],
    flexbox: ['responsive'],
    float: ['responsive'],
    fonts: ['responsive'],
    fontWeights: ['responsive', 'hover', 'focus'],
    height: ['responsive'],
    leading: ['responsive'],
    lists: ['responsive'],
    margin: ['responsive'],
    maxHeight: ['responsive'],
    maxWidth: ['responsive'],
    minHeight: ['responsive'],
    minWidth: ['responsive'],
    negativeMargin: ['responsive'],
    objectFit: false,
    objectPosition: false,
    opacity: ['responsive'],
    outline: ['focus'],
    overflow: ['responsive'],
    padding: ['responsive'],
    pointerEvents: ['responsive'],
    position: ['responsive'],
    resize: ['responsive'],
    shadows: ['responsive', 'hover', 'focus'],
    svgFill: [],
    svgStroke: [],
    tableLayout: ['responsive'],
    textAlign: ['responsive'],
    textColors: ['responsive', 'hover', 'focus'],
    textSizes: ['responsive'],
    textStyle: ['responsive', 'hover', 'focus'],
    tracking: ['responsive'],
    userSelect: ['responsive'],
    verticalAlign: ['responsive'],
    visibility: ['responsive'],
    whitespace: ['responsive'],
    width: ['responsive'],
    zIndex: ['responsive']
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
