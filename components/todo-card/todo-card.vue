<script setup lang="ts">
import dayjs from "dayjs";
import type { cardItem } from "./interface";

const props = defineProps<{
  width: number;
  height: number;
  todoList: Array<cardItem>;
}>();

const emits = defineEmits<{
  (event: "update:todoList", newVal: Array<cardItem>): void;
}>();

const isFull = ref(false);

function updateItemHandle(newItem: cardItem) {
  const list = props.todoList;
  list[props.todoList.findIndex((i) => i.id === newItem.id)] = newItem;
  emits("update:todoList", list);
}

function deleteHandle(id: number | string) {
  const list = props.todoList;
  list.splice(
    props.todoList.findIndex((i) => i.id === id),
    1
  );
  emits("update:todoList", list);
}

function addHandle() {
  const list = props.todoList;
  list.push({
    id: Number(new Date()),
    content: "",
    date: dayjs().format("YY-MM-DD HH:mm"),
    isSelect: false,
  });
  emits("update:todoList", list);
}

function selectAllHandle(val = true) {
  const list = props.todoList.map((item) => {
    item.isSelect = val;
    return item;
  });
  emits("update:todoList", list);
}
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
    <todo-card-header @add="addHandle">
      Todo List
      <template #header-extra>
        <div class="btn-group">
          <div
            class="btn"
            style="background-color: #33b752"
            @click="selectAllHandle(false)"
          >
            取消全选
          </div>
          <div
            class="btn"
            style="background-color: #f61d25"
            @click="selectAllHandle()"
          >
            全选
          </div>
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
    <div class="todo-item-container">
      <todo-card-item
        v-for="(item, index) in todoList"
        :key="item.id"
        :data="todoList[index]"
        @update:data="updateItemHandle"
        @delete="deleteHandle(item.id)"
      ></todo-card-item>
    </div>
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

  display: grid;
  grid-template-rows: auto auto 1fr;
}

.todo-hr {
  margin: 20px 0;
  border-color: rgba(255, 255, 255, 0.4);
}

.todo-item-container {
  overflow: auto;
}

.todo-item-container::-webkit-scrollbar {
  display: none;
}
</style>
