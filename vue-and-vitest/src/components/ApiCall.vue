<template>
    <div style="margin-top: 20px;">
        <button class="getQuestions" @click="getQuestions">Get questions</button>

        <div class="questions" v-for="question in questions">
            <div style="margin-bottom: 10px;">
                {{ question.Question }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Question {
    Question: string,
    Answer: string,
    Difficulty: string,
    Distractor1: string,
    Distractor2: string,
    Distractor3: string,

}

let questions = ref<Array<Question>>([])

async function getQuestions() {
    let api = await fetch('https://cdn.freecodecamp.org/vuejs-quiz-qpp/quiz.json')
    let res = await api.json()

    questions.value = res
    console.log(res)
}
</script>