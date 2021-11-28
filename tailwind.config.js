module.exports = {
  purge: [
    './docs/*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
   rotate:{'-30':'-30deg',
    '30':'30deg',
     '0': '0',
    '60': '60deg',
    '90': '90deg',
    '120': '120deg',
    '150': '150deg',
    '180': '180deg',
    '210': '210deg',
    '240': '240deg',
    '270': '270deg',
    '300': '300deg',
    '330': '330deg',
    '360': '360deg',},

    zIndex: {
      '11': 11,
      '20': 20,
      '10': 10,
      '5': 5,
      '50': 50,
    },

    extend: {
     width:{ '300':'300px', 
     '3.75':'0.9375rem',
       },
      minHeight:{
   '1/2':'50%',
      },
      },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
