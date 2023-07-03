export default defineEventHandler(async () => {
  return await useStorage("todo").getItem("list");
});
