<script setup lang="ts">
import type { cardItem } from "~/components/todo-card/interface";

// 创建state
const todoList = useState("todoList", (): Array<cardItem> => []);
// 从后端获取数据
$fetch("/api/list").then((res) => {
  if (res) {
    todoList.value = res as Array<cardItem>;
  }
});

// 设置防抖
let timer: NodeJS.Timeout | null = null;
function updateListHandle(val: Array<cardItem>) {
  todoList.value = val;
  if (timer) {
    clearTimeout(timer);
  }
  timer = setTimeout(() => {
    console.log("send");
    $fetch("/api/list", { method: "POST", body: val });
    timer = null;
  }, 500);
}
</script>

<template>
  <div class="screen-container flex-center">
    <todo-card
      :width="600"
      :height="400"
      :todo-list="todoList"
      @update:todo-list="updateListHandle"
    />
  </div>
</template>

<style>
.screen-container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
