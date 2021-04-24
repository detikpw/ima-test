module.exports = {
  theme: {
    extend: {
      fontFamily: {
        dancing: ["'Dancing Script'", 'cursive']
      }
    },
  },
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    safeList: [],
    content: [
      './index.html',
      './src/**/*.jsx',
      './src/**/*.js',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  variants: {
    extend: {}
  },
  plugins: [],
}
