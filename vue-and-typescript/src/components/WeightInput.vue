<template>
    <div class=" z-3">
        <label for="input">
            <span class="badge text-bg-primary">{{ input.name }} ({{ input.unit }})</span>
        </label>
        <div class="mt-2">
            <input type="number" v-model="inputWeight" class="form-control" id="input">
        </div>
        <input type="text" hidden>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

let props = defineProps<{
    input: {
        name: string,
        unit: string
    }
}>()

let emit = defineEmits<{
    inputWeightUpdate: [value?: number]
}>()

let inputWeight = ref<number>()

watch(inputWeight, () => {
    emit('inputWeightUpdate', inputWeight.value)
})

watch(props.input, () => {
    inputWeight.value = 0
})
</script>

<style scoped>
input{
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
}
</style>
