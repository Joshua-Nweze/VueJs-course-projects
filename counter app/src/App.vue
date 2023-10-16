<template>
  <div>
    <h1>My first vue project</h1>
    <h3>A counter app</h3>

    <div>{{ count }}</div>

    <div class="btn-container">
      <button @click="decrementCount">Decrement count</button>
      <button @click="incrementCount">Increment count</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';


let count = ref(0)

function decrementCount() {
  if (count.value > 0) {
    count.value--
  }
}

function incrementCount() {
  count.value++
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.btn-container{
  display: flex;
  justify-content: center;
}

.btn-container button{
  padding: 5px;
  margin: 5px;
}
</style>
