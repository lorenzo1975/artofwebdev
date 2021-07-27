module.exports = {
  mode: 'jit',
  darkMode: false,
  theme: {
    container: {
    },
    extend: {
      fontFamily: {
        display: ['Playfair Display', 'serif']
      },
      colors: {
        yellow: {
          250: '#FFDE18'
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('tailwindcss-debug-screens'),
  ],
  purge: ['./src/**/*.{js,md,njk,svg}'],
}
