<script setup>
import { useParticipantsStore } from '../stores/participants';

let participantsStore = useParticipantsStore()
defineProps(['head', 'data'])
</script>

<template>
    <div>
        <div class="fs-3">{{ head }}</div>
        <table class="table table-striped table-dark ">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col" colspan="5">Name</th>
                    <th scope="col">Age</th>
                    <th scope="col">Category</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(participant, index) in data" :key="index">
                    <th scope="row">{{ index + 1 }}</th>
                    <td colspan="5">{{ participant.name }}</td>
                    <td>{{ participant.age }}</td>
                    <td>{{ participant.category }}</td>
                    <td><i class="bi bi-trash3 text-danger" @click="participantsStore.removeParticipant(index)"></i></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>