<script setup>
import { storeToRefs } from 'pinia';
import Table from '../components/Table.vue'
import { useParticipantsStore } from '../stores/participants';

let participantsStore = useParticipantsStore()
let { participants } = storeToRefs(participantsStore)
</script>

<template>
    <div>
        <Table head="Participants" :data="participants"/>
    </div>
</template>