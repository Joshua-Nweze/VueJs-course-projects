<script setup>
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import { useParticipantsStore } from '../stores/participants';

let participantsStore = useParticipantsStore()

let { participants } = storeToRefs(participantsStore)

let name = ref('')
let age = ref('')
let category = ref('')

let showFeedback = ref(false)
let feedback = ref('')
let status = ref('')

function addParticipant() {
    showFeedback.value = false
    feedback.value = status.value = ''

    if (!name.value || !age.value || !category.value) {
        // show error message
        status.value = 'error'
        feedback.value = 'All inputs are required'
        showFeedback.value = true
        return
    }

    let data = {
        name: name.value,
        age: age.value,
        category: category.value
    }

    participantsStore.addParticipant(data)
    name.value = age.value = category.value = ''

    // show success message
    status.value = 'success'
    feedback.value = 'Participant added'
    showFeedback.value = true
}
</script>


<template>
    <div class="row d-flex justify-content-center">
        <div class="col-12 col-md-8">
            <div v-if="showFeedback" class="alert alert-dismissible fade show" :class="( status == 'success' ? 'alert-success' : 'alert-danger' )" role="alert">
                <strong>{{ feedback }}</strong>
                <button type="button" class="btn-close" @click="showFeedback = false"></button>
            </div>

            <form @submit.prevent="addParticipant">
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Name</label>
                    <input v-model="name" type="text" class="form-control" id="name" aria-describedby="name">
                </div>

                <div class="mb-3">
                    <label for="age" class="form-label">Age</label>
                    <input v-model="age" type="number" class="form-control" id="age">
                </div>

                <div>
                    <label for="category" class="form-label">Category</label>
                    <select v-model="category" class="form-select" id="category">
                        <option value="" selected>--Category--</option>
                        <option value="Art">Art</option>
                        <option value="Science">Science</option>
                    </select>
                </div>

                <button type="submit" class="btn btn-secondary mt-5">Add</button>
            </form>
        </div>
    </div>
</template>