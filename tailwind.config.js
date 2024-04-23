/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/header.js",
    "./src/components/hero.js",
    "./src/components/mainContainer.js",
    "./src/components/categories.js",
    "./src/components/featuredLists.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'heroBg': 'linear-gradient(rgba(18, 0, 0, 0.5), rgba(0, 36, 0, 0.5)), url("/public/images/heroBg.png")',
      }
    },
  },
  plugins: [],
}