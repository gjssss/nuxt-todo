<script setup lang="ts"></script>

<template>
  <div class="screen-container flex-center">
    <todo-card :width="600" :height="400" />
  </div>
</template>

<style>
.screen-container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
