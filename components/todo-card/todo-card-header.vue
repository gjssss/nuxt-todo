<script setup lang="ts"></script>

<template>
  <div class="content-between items-center">
    <div class="items-center">
      <div class="btn todo-add" />
      <div class="todo-header"><slot></slot></div>
    </div>
    <div><slot name="header-extra"></slot></div>
  </div>
</template>

<style>
.todo-add {
  width: 40px;
  height: 40px;

  margin-right: 10px;
  border-radius: 50%;

  background-color: #908df5;

  font-size: 30px;

  position: relative;
}
.todo-add::after {
  content: "+";
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.todo-header {
  font-size: 24px;
  font-weight: 600;
  cursor: default;
}
</style>
