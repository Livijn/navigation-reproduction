const colors = require('tailwindcss/colors')

module.exports = {
  purge: false,
  darkMode: false,
  theme: {
    extend: {
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
      },
      scale: {
        80: '.8',
      },
      fontSize: {
        // xs: ['0.7rem', { lineHeight: '1.2rem' }],
        '3xs': '.55rem',
        '2xs': '.65rem',
        xs: ['0.7rem', ],
        sm: ['0.8rem', ],
        base: ['0.875rem'],
        lg: ['1rem'],
        xl: ['1.125rem'],
        '2xl': ['1.5rem'],
        '3xl': ['1.875rem'],
        '4xl': ['2.25rem'],
        '5xl': ['3rem'],
        '6xl': ['3.75rem'],
        '7xl': ['4.5rem'],
        '8xl': ['6rem'],
        '9xl': ['8rem'],
        '10xl': ['10rem'],
      },
      colors: {
        transparent: 'transparent',
        gray: colors.coolGray,
        "primary": {
          "100": "#fef4f1",
          "200": "#fbcbbc",
          "300": "#f7a288",
          "400": "#f37853",
          "500": "#f04f1f",
          "600": "#c9390d",
          "700": "#992c0a",
          "800": "#641d07",
          "900": "#300e03"
        },
        green: {
          50: '#f6fbf5',
          100: '#ecf6ec',
          200: '#d0eacf',
          300: '#b4ddb1',
          400: '#7cc377',
          500: '#44a93d',
          600: '#3d9837',
          700: '#337f2e',
          800: '#296525',
          900: '#21531e'
        },
        orange: {
          50: '#fef9f5',
          100: '#fffaf0',
          200: '#feebc8',
          300: '#fbd38d',
          400: '#f6ad55',
          500: '#ed8936',
          600: '#dd6b20',
          700: '#c05621',
          800: '#9c4221',
          900: '#7b341e',
        },
        yellow: {
          50: '#fefcf6',
          100: '#fffff0',
          200: '#fefcbf',
          300: '#faf089',
          400: '#f6e05e',
          500: '#ecc94b',
          600: '#d69e2e',
          700: '#b7791f',
          800: '#975a16',
          900: '#744210',
        },
      }
    },
    backdropOpacity: false,
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
