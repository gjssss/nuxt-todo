export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  await useStorage("todo").setItem("list", body);
  return { msg: "success" };
});
