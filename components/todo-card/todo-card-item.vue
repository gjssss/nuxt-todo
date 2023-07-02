<script setup lang="ts">
import dayjs from "dayjs";
const time = dayjs().format("YY-MM-DD HH:mm");
</script>

<template>
  <div class="items-container hover-shadow">
    <div class="todo-item-select flex-center">
      <div class="selected"></div>
    </div>
    <div class="todo-item-input">
      <input type="text" placeholder="请输入TODO事件" />
    </div>
    <div>{{ time }}</div>
    <div class="btn todo-del">删除</div>
  </div>
</template>

<style>
.items-container {
  height: 40px;
  background-color: rgba(255, 255, 255, 0.1);
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;

  display: grid;
  grid-template-columns: auto 1fr auto auto;
  align-items: center;

  font-size: 14px;
}

.items-container > div:not(:last-child) {
  margin-right: 20px;
}

.todo-item-select {
  width: 16px;
  height: 16px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 50px;
}

.todo-item-select .selected {
  border: 5px solid rgba(255, 255, 255, 0.8);
  border-radius: 50%;
}

.todo-item-input input {
  width: 100%;

  background-color: transparent;
  color: white;

  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  outline: none;
  padding-bottom: 2px;
}
.todo-del {
  background-color: #f61d25;
  padding: 2px 6px;
  border-radius: 3px;
  font-size: 10px;
}
</style>
