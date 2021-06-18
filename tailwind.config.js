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
          '0%': { transform: 'rotate(0deg)'},
          '10%': { transform: 'rotate(5deg) translate(10px, -30px)' },
          '20%': { transform: 'rotate(0deg) translate(0px, 10px)'},
          '30%': { transform: 'rotate(0deg) translate(0px, -30px)' },
          '40%': { transform: 'rotate(0deg) translate(0px, 0px)'},
          '50%': { transform: 'rotate(-5deg) translate(-10px, -30px)'},
          '60%': { transform: 'rotate(0deg) translate(0px, 10px)'},
          '62%': { transform: 'rotate(0deg)'},
          '70%': { transform: 'rotate(0deg)'},
          '74%': { transform: 'rotate(3deg)'},
          '78%': { transform: 'rotate(-3deg)'},
          '82%': { transform: 'rotate(3deg)'},
          '86%': { transform: 'rotate(-3deg)'},
          '90%': { transform: 'rotate(3deg)'},
          '100%': { transform: 'rotate(0deg)'},
        },
        smallShaker:{
          '0%': { transform: 'rotate(0deg)'},
          '65%': { transform: 'rotate(0deg)'},
          '66%': { transform: 'rotate(3deg)'},
          '70%': { transform: 'rotate(0deg)'},
          '74%': { transform: 'rotate(3deg)'},
          '78%': { transform: 'rotate(-3deg)'},
          '82%': { transform: 'rotate(3deg)'},
          '86%': { transform: 'rotate(-3deg)'},
          '90%': { transform: 'rotate(3deg)'},
          '100%': { transform: 'rotate(0deg)'}
        }
      },
      animation: {
        shaker: 'shaker 2.5s linear infinite',
        smallShaker: 'smallShaker 2.5s linear infinite',
       }
    },
  }, 
  variants: {
    extend: {},
  },
  plugins: [require('tailwindcss-scroll-snap')],
}
