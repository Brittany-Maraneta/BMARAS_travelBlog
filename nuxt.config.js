export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/supabase", "@nuxtjs/google-fonts"],
  supabase: {
    redirect: false,
  },
  families: {
    Lobster: true,
    Raleway: {
      wght: [100, 400],
      ital: [100],
    },
  },
});
