/* eslint-disable prettier/prettier */
module.exports = {
  theme: {
    extend: {
      colors: {
        'red-dark-1': '#C00E20',
        red: '#F22539',
        yellow: '#ECA539',
        'gray-dark-2': '#353535',
        'gray-dark-1': '#5E5E5E',
        gray: '#BFBFBF',
        'gray-light-1': '#E5E5E5',
        'gray-light-2': '#E8E8E8',
        'gray-light-3': '#F5F5F5',
        'gray-light-4': '#F9F9F9'
      },
      fontFamily: {
        body: ['Lato', 'sans-serif']
      },
      fontSize: {
        base: ['18px', '1.5']
      },
      height: {
        'p-206': '206px',
        'p-220': '220px',
        'p-288': '288px',
        'p-44': '44px',
        'p-180': '180px'
      },
      width: {
        'p-206': '206px',
        'p-325': '325px',
        'p-44': '44px',
        'p-180': '180px',
        'p-150': '150px',
        'p-275': '275px'
      },
      inset: {
        '-70': '-70px',
        '11': '11px',
        '50-26/2': 'calc(50% - 26px/2)',
        '10%': '10%',
        '20%': '20%',
        '36%': '36%',
        '12': '12px'
      },
      zIndex: { '60': 60 },
      boxShadow: {
        'bottom-bar': ' 0px -5px 4px rgba(0, 0, 0, 0.05);'
      }
    }
  },
  variants: {},
  plugins: [],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['./public/**/*.html', './src/**/*.vue']
  }
}
