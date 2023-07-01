<template>
  hello {{ counter }}
  <button @click="counter++">+1</button>
  <button @click="handle">请求</button>
  <button @click="get">获取</button>
</template>

<script setup lang="ts">
const counter = useState("counter", () => 1);
async function handle() {
  const { data } = await useFetch("/api/hello");
  console.log(data.value);
}
async function get() {
  const { data } = await useFetch("/api/get");
  console.log(data);
}
</script>
