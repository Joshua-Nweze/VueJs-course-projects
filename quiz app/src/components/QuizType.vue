<template>
    <h2>Let's test your knowledge</h2>

    <div class="mt-3">
        <label for="numOfQuestions" class="form-label">Number of questions</label>
        <input class="form-control" id="numOfQuestions" rows="3" v-model="amount"/>
    </div>

    <div class="mt-3">
        <label for="difficulty" class="form-label">Difficulty</label>
        <select class="form-select" id="difficulty" aria-label="Default select example" v-model="difficulty">
            <option value="" selected>Any difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
        </select>
    </div>

    <div class="mt-5 d-flex justify-content-center">
        <button class="btn btn-primary" @click="getQuestions">Generate quiz</button>
    </div>

    <div class="mt-3">
        <p class="text-center">{{ loadingInfo }}</p>
    </div>

</template>

<script setup>
import { ref } from 'vue';

let emit = defineEmits(['getQuestions'])

let amount = ref(10)
let difficulty = ref('')
let loadingInfo = ref('')

function shuffleArray(array) {
    for (let i = 0; i < array.length ; i++) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

  return array;
}

async function getQuestions() {
    try {
        if (amount.value < 1 || isNaN(amount.value)) {
            alert('Invalid number of questions')
            return
        }

        loadingInfo.value = 'Getting questions ready ...'
        let api = await fetch(`https://cdn.freecodecamp.org/vuejs-quiz-qpp/quiz.json`)
        let res = await api.json()

        res = shuffleArray(res)
        let questions = []

        // choosing questions by difficulty level
        if (difficulty.value != '') {
            res.map((question) => {
                if(question.Difficulty == difficulty.value) questions.push(question)
            })
        } else {
            questions = res
        }

        emit('getQuestions', questions.slice(0, amount.value))
        console.log(questions)
        loadingInfo.value = ''
    } catch (error) {
        console.log(error)
        loadingInfo.value = 'Something went wrong while trying to get questions, try again later'
    }
}
</script>

<style scoped>

</style>