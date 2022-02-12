module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xl: '1170px',
      '2xl': '1170px',
    },
    container: {
      center: true,
      padding: '1rem',
    },
    fontFamily: {
      poppins: "'Poppins', 'sans-serif'",
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
