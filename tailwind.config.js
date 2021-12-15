const defaultTheme = require( 'tailwindcss/defaultTheme' )

module.exports = {
  purge: [
    "./src/**/*.{html,js,css}"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
