<template>
  <div class="container">

    <h1 class="my-4">My todo app</h1>

    <div class="row justify-content-center">
      <div class="col-md-7 col-12">

        <div class="input-group mb-3">
          <input
          class="form-control"
          type="text"
          v-model="newTodo"
          @keypress.enter="addItem" 
          >
          <button
           class="input-group-text btn btn-success"
           @click="addItem"
           >
           Add item
          </button>
        </div>

        <div class="text-start">
          <ul
           v-for="(todo, index) in todos"
           :key="index"
           >
            <li class="border-bottom d-flex align-items-center py-1 justify-content-between">
              <span>{{ todo }}</span>

              <span>
                <button
                class="btn btn-danger"
                  @click="delTodo(index)"
                >
                  Delete
                </button>
              </span>
            </li>
          </ul>
        </div>

      </div>
    </div>
    
  </div>
</template>

<script setup>
import { ref } from 'vue';

let newTodo = ref('')

let todos = ref([])

function addItem() {
  if (newTodo.value.trim() !== '') {
    todos.value.push(newTodo.value)
    console.log(todos.value)
    newTodo.value = ''
  }
}

function delTodo (index) {
  todos.value.splice(index, 1)
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

ul{
  margin: 0;
  padding: 0;
}

.form-control:focus{
  box-shadow: none;
  border-color: green;
}
</style>
