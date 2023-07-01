export default defineEventHandler(async (event) => {
  return await useStorage("todo").getItem("foo");
});
