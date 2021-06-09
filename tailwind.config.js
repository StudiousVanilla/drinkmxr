module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xs': '365px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontSize:{
        'xs':'0.9rem'
      },
      colors: {
        'alcohol': '#F87171', 
        'mixer': '#34D399', 
        'extra': '#60A5FA', 
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
