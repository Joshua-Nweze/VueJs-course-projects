<template>
    <div>
        <div class="row align-items-center mb-5">
            <div class="col">
                <h1>Questions</h1>
                <span>Question {{ currentQuestionIndex + 1 }} of {{ allQuestions.length }}</span>
            </div>
            <div class="col d-flex justify-content-end">
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                @click="finalQuestionCorrection"
                >Submit</button>
            </div>
        </div>

        <div class="mb-5">
            <span>{{ currentQuestionIndex + 1 }}.  </span>
            <span>{{ currentQuestion.question }}</span>

            <div v-for="(option, optionIndex) in currentQuestion.options" :key="optionIndex" class="mb-2">
                <div class="form-check">
                    <input class="form-check-input" type="radio" :id="option" v-model="selectedAnswer" :value="option">
                    <label class="form-check-label" :for="option">
                        {{ option }}
                    </label>
                </div>
            </div> 
        </div>

        <div class="row align-items-center mt-5 mb-3">
            <div class="col">
                <button type="button" class="btn btn-secondary" @click="$emit('goBack')">Set new quiz</button>
            </div>

            <div class="col d-flex justify-content-end" v-if="allQuestions.length - currentQuestionIndex != 1">
                <button type="button" class="btn btn-primary" @click="nextQuestion">Next</button>
            </div>
        </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    You got {{score}} out of {{allQuestions.length}}
                </div>
                <div v-if="wrongAnswers.length" class="modal-body">
                    <h4>Corrections</h4>
                    <div v-for="(correction, index) in wrongAnswers" :key="index" class="mb-3">
                        <div><strong>Question:</strong>  {{ correction.question }}</div>
                        <div><strong>You chose: </strong>{{ correction.selectedAnswer }}</div>
                        <div><strong>Correct answer: </strong>{{ correction.answer }}</div>
                    </div>
                </div>
                <div class="modal-footer">

                    <button type="button"
                     class="btn btn-primary" 
                     @click="$emit('goBack')"
                     data-bs-dismiss="modal"
                     aria-label="Close"
                     >
                      Set new quiz
                    </button>

                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';

let props = defineProps(['questions'])
let emit = defineEmits(['goBack'])

let allQuestions = ref(props.questions.map(question => {
    return {
        question: question.Question,
        options: shuffleArray([question.Answer, question.Distractor1, question.Distractor2, question.Distractor3]),
        answer: question.Answer
    }
}))

let currentQuestionIndex = ref(0)
let currentQuestion = computed(() => allQuestions.value[currentQuestionIndex.value]);
let selectedAnswer= ref('')
let score = ref(0)
let wrongAnswers = ref([])

function shuffleArray(array) {
    for (let i = 0; i < array.length ; i++) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

  return array;
}


function nextQuestion() {
    if (selectedAnswer.value == '') {
        alert('Please select an answer before proceeding to the next question')
        return
    }

    if (selectedAnswer.value == currentQuestion.value.answer) {
        score.value++
    } else {
        wrongAnswers.value.push({...currentQuestion.value, selectedAnswer: selectedAnswer.value})
    }

    if (currentQuestionIndex.value < allQuestions.value.length - 1) {
        currentQuestionIndex.value++
    }

    selectedAnswer.value = ''
}

function finalQuestionCorrection() {
    if (selectedAnswer.value == currentQuestion.value.answer) {
        score.value++
    } else {
        wrongAnswers.value.push({...currentQuestion.value, selectedAnswer: selectedAnswer.value})
    }
}
</script>

<style scoped>

</style>