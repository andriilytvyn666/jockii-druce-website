/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    fontFamily: {
      sans: 'Helvetica, sans-serif',
    },
    fontSize: {
      'body-md-700': [
        '1.25rem',
        {
          lineHeight: '1.5rem',
          fontWeight: '700',
        },
      ],
      'body-md-400': [
        '1.25rem',
        {
          lineHeight: '1.5rem',
          fontWeight: '400',
        },
      ],
      'body-sm-400': [
        '1rem',
        {
          lineHeight: '1.25rem',
          fontWeight: '400',
        },
      ],
    },
    colors: {
      bg: '#070707',
      fg: {
        DEFAULT: '#535252',
        active: '#bcbcbc',
        selected: '#727272',
      },
    },
    extend: {
      screens: {
        xs: '320px',
      },
    },
  },
  plugins: [],
}
