/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blueColor: '#2C7EF8',
        greenColor: '#59AE43',
        redColor: '#F82C2C',
        backHeader: '#252F3D',

      },
    },
  },
  plugins: [],
}

