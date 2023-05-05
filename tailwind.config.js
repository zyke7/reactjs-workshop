/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header-pattern': "url('/public/slices/nav_bar.png')",
        'back-bttn': "url('/public/slices/Back.png')",
        'search-bttn': "url('/public/slices/search.png')",
      }
    },
  },
  plugins: [],
}

