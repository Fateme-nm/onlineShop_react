module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px'
    },
    container: {
      center: true,
      padding: '1rem'
    },
    extend: {
      fontFamily: {
        iranSans: "'Iranian Sans', sans-serif"
      },
      colors: {
        'primary': '#FD3D57'
      }
    },
  },
  plugins: [],
}
