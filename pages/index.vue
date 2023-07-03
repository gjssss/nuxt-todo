<script setup lang="ts">
import type { cardItem } from "~/components/todo-card/interface";
const todoList = useState("todoList", (): Array<cardItem> => []);
</script>

<template>
  <div class="screen-container flex-center">
    <todo-card :width="600" :height="400" v-model:todo-list="todoList" />
  </div>
</template>

<style>
.screen-container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
