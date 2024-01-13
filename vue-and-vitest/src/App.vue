<script setup lang="ts">
import TestComponent from './components/TestComponent.vue';
import ApiCall from './components/ApiCall.vue';
</script>

<template>
  <div class="container">
    <TestComponent content="This is cool!"/>

    <ApiCall />
  </div>
</template>

<style scoped>
.container {
  width: 100%;
}
</style>
