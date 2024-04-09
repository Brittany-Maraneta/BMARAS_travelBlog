export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/supabase", "@nuxtjs/google-fonts"],
  supabase: {
    redirect: false,
  },
});
