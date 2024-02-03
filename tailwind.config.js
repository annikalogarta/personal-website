/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'midnight': '#1d1729',
      white: '#e0e2db',
      red: '#b72d1b',
      orange: '#c96b00',
      yellow: '#c79400',
      blue: '#2D64A4',
      green: '#217170',
      purple: '#8069BC',
    },
    extend: {
      boxShadow: {
        '1': '-4px 4px 0px 0px rgb(20, 46, 61)',
        '2': '8px 8px 0px 0px rgb(201, 107, 0)',
      },
    },
  },
  plugins: [],
}

