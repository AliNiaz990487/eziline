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
        "color-primary": "#ffbc3b",
        "color-secondary": "#1e1e37"
      },
    },
  },
  plugins: [],
}

