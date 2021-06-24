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
      height:{
        bot: '4.5rem'
      },
      width:{
        bot: '4.5rem'
      },
      left:{
        halffull: '10%'
      },
      fontSize:{
        'xs':'0.9rem',
        'xxs':'0.6rem',
        'md': '1.05rem'
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
        },
        scrollUp1:{
          '10%': { transform: 'translate(0px, -0px)'}, // 2s
          '15%': { transform: 'translate(0px, -65px)'}, // 0.5s
          '85%': { transform: 'translate(0px, -65px)'},
          '90%': { transform: 'translate(0px, 0px)'}, // 0.5s
          '100%': { transform: 'translate(0px, 0px)'}, // 2s
        },
        scrollUp2:{
          '25%': { transform: 'translate(0px, -0px)'}, // 2s
          '30%': { transform: 'translate(0px, -65px)'}, // 0.5s
          '75%': { transform: 'translate(0px, -65px)'},
          '80%': { transform: 'translate(0px, 0px)'},// 0.5s
          '90%': { transform: 'translate(0px, 0px)'}, // 2s
        },
        scrollUp3:{
          '45%': { transform: 'translate(0px, -0px)'}, // 2s
          '50%': { transform: 'translate(0px, -65px)'}, // 0.5s
          '65%': { transform: 'translate(0px, -65px)'}, //0.5s
          '70%': { transform: 'translate(0px, 0px)'}, //0.5s
          '80%': { transform: 'translate(0px, 0px)'}, //2s
        },
        backgroundColorCycle:{
          '0%': {backgroundColor:'#F87171'},
          '25%': {backgroundColor:'#F87171'},
          '29%': {backgroundColor:'#ffffff'},
          '33%': {backgroundColor:'#34D399'},
          '58%': {backgroundColor:'#34D399'},
          '62%': {backgroundColor:'#ffffff'},
          '66%': {backgroundColor:'#60A5FA'},
          '91%': {backgroundColor:'#60A5FA'},
          '96%': {backgroundColor:'#ffffff'},
          '100%': {backgroundColor:'#F87171'}
        },
        popUp1:{
          '10%': { transform: 'translate(0px, -3px)'},
          '13%': { transform: 'translate(0px, 0px)'},
          '100%':{ transform: 'translate(0px, 0px)'}
        },
        popUp2:{
          '14%': { transform: 'translate(0px, 0px)'},
          '19%': { transform: 'translate(0px, -3px)'},
          '24%':{ transform: 'translate(0px, 0px)'},
          '100%':{ transform: 'translate(0px, 0px)'}
        },
        popUp3:{
          '25%': { transform: 'translate(0px, 0px)'},
          '31%': { transform: 'translate(0px, -3px)'},
          '36%':{ transform: 'translate(0px, 0px)'},
          '100%':{ transform: 'translate(0px, 0px)'}
        },
      },
      animation: {
        shaker: 'shaker 2.5s linear infinite',
        smallShaker: 'smallShaker 2.5s linear infinite',
        scrollUp1: 'scrollUp1 10s linear infinite',
        scrollUp2: 'scrollUp2 10s linear infinite',
        scrollUp3: 'scrollUp3 10s linear infinite',
        popUp1: 'popUp1 2s linear infinite',
        popUp2: 'popUp2 2s linear infinite',
        popUp3: 'popUp3 2s linear infinite',
        backgroundColorCycle: 'backgroundColorCycle 15s linear infinite'
       }
    },
  }, 
  variants: {
    scrollSnapType : ['responsive'],
    scrollbar: ['responsive'],   
    extend: {},
  },
  plugins: [
    require('tailwindcss-scroll-snap'),
    require('tailwind-scrollbar')
  ],
}
