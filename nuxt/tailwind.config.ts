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
      sans: 'IBM Plex Sans, sans-serif',
    },
    fontSize: {
      'body': [
        '1rem',
        {
          lineHeight: '1.5rem',
          fontWeight: '500',
        },
      ],
      'body-lg': [
        '1.125rem',
        {
          lineHeight: '1.625rem',
          fontWeight: '500',
        },
      ],
    },
    colors: {
      bg: '#070707',
      fg: {
        DEFAULT: '#535252',
        active: '#bcbcbc',
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
