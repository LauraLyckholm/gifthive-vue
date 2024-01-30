// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@pinia/nuxt"],
  colorMode: {
    preference: "light",
  },
  runtimeConfig: {
    public: {
      baseUrl: process.env.API_BASE_URL,

    },
  },
})
