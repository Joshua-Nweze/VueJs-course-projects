<template>
  <div class="container">
    <div class="row justify-content-center pt-5 text-start">
      <div class="col-12 col-md-8 col-lg-6">

          <div v-if="!showQuestions">
            <QuizType 
              @getQuestions="getQuestions"
            />
          </div>

          <div v-else-if="showQuestions">
            <Questions 
              :questions="questions"
              @goBack="showQuestions = false"
            />
          </div>

      </div>
    </div>
  </div>
  
</template>

<script setup>
import { ref } from 'vue';

import QuizType from './components/QuizType.vue';
import Questions from './components/Questions.vue'

let showQuestions = ref(false)
let questions = ref()

function getQuestions(data) {
  showQuestions.value = true
  questions.value = data
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: ghostwhite;
  min-height: 100vh;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
