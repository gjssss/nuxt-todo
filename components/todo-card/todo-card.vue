<script setup lang="ts">
const props = defineProps<{
  width: number;
  height: number;
}>();

const isFull = ref(false);
</script>

<template>
  <div
    class="todo-card-container"
    :style="{
      width: isFull ? '100%' : width + 'px',
      height: isFull ? '100%' : height + 'px',
      borderRadius: isFull ? '' : '10px',
    }"
  >
    <todo-card-header>
      Todo List
      <template #header-extra>
        <div class="btn-group">
          <div class="btn" style="background-color: #f61d25">全选</div>
          <div class="btn" style="background-color: #33b752">添加</div>
          <div
            class="btn"
            style="background-color: #2080f0"
            @click="isFull = !isFull"
          >
            {{ isFull ? "缩小" : "全屏" }}
          </div>
        </div>
      </template>
    </todo-card-header>
    <hr class="todo-hr" />
    <todo-card-item v-for="item in 3" :key="item"></todo-card-item>
  </div>
</template>

<style>
.todo-card-container {
  box-sizing: border-box;
  background-color: #35354d;
  padding: 20px;
  color: white;

  transition: all 0.3s ease-out;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
}

.todo-hr {
  margin: 20px 0;
  border-color: rgba(255, 255, 255, 0.4);
}
</style>
