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
      },
      keyframes: {
        shaker: {
          '0%': { transform: 'rotate(0deg)', bottom: '0px' },
          '10%': { transform: 'rotate(5deg)', bottom: '20px' },
          '20%': { transform: 'rotate(0deg)', bottom: '-10px' },
          '30%': { transform: 'rotate(0deg)', bottom: '20px' },
          '40%': { transform: 'rotate(0deg)', bottom: '0px' },
          '50%': { transform: 'rotate(-5deg)', bottom: '20px' },
          '60%': { transform: 'rotate(0deg)', bottom: '-10px' },
          '65%': { transform: 'rotate(0deg)', bottom: '0px' },
          '70%': { transform: 'rotate(0deg)', bottom: '0px' },
          '74%': { transform: 'rotate(3deg)', bottom: '0px' },
          '78%': { transform: 'rotate(-3deg)', bottom: '0px' },
          '82%': { transform: 'rotate(3deg)', bottom: '0px' },
          '86%': { transform: 'rotate(-3deg)', bottom: '0px' },
          '90%': { transform: 'rotate(3deg)', bottom: '0px' },
          '100%': { transform: 'rotate(0deg)', bottom: '0px' },
        }
      },
      animation: {
        shaker: 'shaker 2s ease-in-out infinite',
       }
    },
  }, 
  variants: {
    extend: {},
  },
  plugins: [],
}
