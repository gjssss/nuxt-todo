export default defineEventHandler(async (event) => {
  await useStorage("todo").setItem("foo", { hello: "world" });
  return {
    hello: "world",
  };
});
