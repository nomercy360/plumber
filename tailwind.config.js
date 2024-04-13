/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],

  theme: {
    fontSize: {
      xxs: ['8px', '8px'],
      xs: ['11px', '15px'],
      sm: ['13px', '19px'],
      base: ['15px', '21px'],
      lg: ['19px', '25px'],
      xl: ['21px', '25px'],
    },
    extend: {
      textColor: {
        'gray-dark': '#262626',
        'gray-light': '#A8A8A8',
      },
      colors: {
        black: '#262626',
        button: '#141414',
        violet: '#6E23E7',
        purple: '#EF40FF',
        'light-purple': '#B7A5D8',
        'lighter-purple': '#F6F1FF',
        'dark-gray': '#929292',
        gray: '#F8F8F8',
        'light-green': '#00DB92',
        blue: '#00C8FC',
        yellow: '#FFC700',
        red: '#FF0031',
      },
    },
    screens: {
      sm: '640px',
    },
  },
  plugins: [],
};
