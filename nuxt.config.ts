// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    api: "123",
    public: {
      apiBase: "/123",
    },
  },
  nitro: {
    storage: {
      todo: {
        driver: "mongodb",
        connectionString: "mongodb://admin:123123123@hellogjs.top:27017",
        databaseName: "todos",
        collectionName: "todoList",
      },
    },
  },
});
