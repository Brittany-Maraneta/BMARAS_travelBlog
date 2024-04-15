export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/supabase", "@nuxtjs/google-fonts"],

  supabase: {
    redirect: false,
  },

  googleFonts: {
    families: {
      Raleway: {
        wght: [100, 400],
        ital: [100],
      },
      Lobster: {
        wght: [100, 400],
        ital: [100],
      },
    },
  },
});
