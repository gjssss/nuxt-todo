// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  nitro: {
    // preset: "vercel-edge",
    storage: {
      todo: {
        driver: "mongodb",
        connectionString: process.env.MITRO_MONGODB_URL,
        databaseName: "todos",
        collectionName: "todoList",
      },
    },
  },
});
