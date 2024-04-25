/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/header.js",
    "./src/app.js",
    "./src/components/hero.js",
    "./src/components/mainContainer.js",
    "./src/components/categories.js",
    "./src/components/featuredLists.js",
    "./src/components/featuredCard.js",
    "./src/components/insights.js",
    "./src/components/location.js",
    "./src/components/blog.js",
    "./src/components/footer.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'heroBg': 'linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), url("/public/images/heroBg.png")',
      },
    },
  },
  plugins: [],
}