/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/*/.{js,vue,ts}",
    "./layouts/*/.vue",
    "./pages/*/.vue",
    "./plugins/*/.{js,ts}",
    "./app.vue",
    "./error.vue",
    "@nuxtjs/google-fonts",
  ],
  theme: {
    extend: {
      colors: {
        lightColor: "#F6EEEE",
        secondary: "#977A71",
        tri: "#C4B0AF",
        word: "#918D8D",
      },

      googleFonts: {
        families: {
          Lobster: true,
          Raleway: true,
        },
      },
      plugins: [],
    },
  },
};
