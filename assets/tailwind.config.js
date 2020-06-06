const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    "../lib/ev_dash/**/*.html.eex",
    "../lib/ev_dash/**/*.html.leex",
    "../lib/ev_dash/**/views/**/*.ex",
    "../lib/ev_dash/**/live/**/*.ex",
    "./js/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'light-blue': {
          50: '#EBF8FF',
          100: '#D1EEFC',
          200: '#A7D8F0',
          300: '#7CC1E4',
          400: '#55AAD4',
          500: '#3994C1',
          600: '#2D83AE',
          700: '#1D6F98',
          800: '#166086',
          900: '#0B4F71'
        },
        green: {
          50: '#E3F9E5',
          100: '#C1EAC5',
          200: '#A3D9A5',
          300: '#7BC47F',
          400: '#57AE5B',
          500: '#3F9142',
          600: '#2F8132',
          700: '#207227',
          800: '#0E5814',
          900: '#05400A'
        },
        red: {
          50: '#FFEEEE',
          100: '#FACDCD',
          200: '#F29B9B',
          300: '#E66A6A',
          400: '#D64545',
          500: '#BA2525',
          600: '#A61B1B',
          700: '#911111',
          800: '#780A0A',
          900: '#610404'
        },
        yellow: {
          50: '#FFFAEB',
          100: '#FCEFC7',
          200: '#F8E3A3',
          300: '#F9DA8B',
          400: '#F7D070',
          500: '#E9B949',
          600: '#C99A2E',
          700: '#A27C1A',
          800: '#7C5E10',
          900: '#513C06'
        }
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/ui")],
}
