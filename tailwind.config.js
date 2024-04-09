/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        purple: '#6E23E7',
        'light-purple': '#B7A5D8',
        'lighter-purple': '#F6F1FF',
        gray: '#A8A8A8',
        'dark-gray': '#929292',
        'light-gray': '#F8F8F8',
        'light-green': '#23E771',
      },
    },
  },
  plugins: [],
};
