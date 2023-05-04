/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header-pattern': "url('/src/assets/slices/nav_bar.png')",
      }
    },
  },
  plugins: [],
}

