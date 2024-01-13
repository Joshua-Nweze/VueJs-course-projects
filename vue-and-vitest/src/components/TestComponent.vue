<template>
    <div>
        <h1>{{ header }}</h1>
        <h1 class="second-h1">{{ content }}</h1>
        <h2>Let's go</h2>

        <input v-model="newHeader" type="text" name="" placeholder="Change header">
        <button @click="changeHeader">Change header</button>

        
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineProps<{
    content: string
}>()

let header = ref<string>('Welcome to Vue Testing')
let newHeader = ref<string>('')

function changeHeader(): void {
    header.value = newHeader.value
}
</script>