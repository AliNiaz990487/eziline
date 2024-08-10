/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  prefix: "tw-",
  important: true,
  theme: {
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
      '2xl': '1200px',
    },
    extend: {
      colors: {
        "primary": "#d1002c",
        "secondary": "#000",
        "gray-lighter": "rgb(160, 160, 180)",
        "gray-light": "rgba(255, 255, 255, 0.7)",
        "gray-dark": "rgba(255, 255, 255, 0.5)",

      },
      fontSize: {
        xsm: '0.813rem',
        sm: '0.875rem',
        base: '1rem',
        xbase: "1.125",
        xl: '2.25rem',
        "2xl": '3.75rem'
      }
    },
  },
  plugins: [],
}

