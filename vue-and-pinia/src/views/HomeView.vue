<script setup>
import { storeToRefs } from 'pinia';
import Cards from '../components/Cards.vue';
import Table from '../components/Table.vue';

import { useParticipantsStore } from '../stores/participants';
let participantsStore = useParticipantsStore()
let { participants } = storeToRefs(participantsStore)
</script>

<template>
  <main>
    <Cards />

    <!-- Return the top 5 latest participants -->
    <Table
     head="Recent Participants"
     class="mt-5"
     :data="participants.slice(0, 5)"
    />
  </main>
</template>
