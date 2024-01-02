<template>
    <div class="row position-relative">
        <div class="col-12 align-items-center text-center col-md-6 section section-one d-flex justify-content-center">
            <WeightInput :input="input" @inputWeightUpdate="inputWeightUpdate"/>
        </div>
        <div class="col-12 align-items-center text-center col-md-6 section section-two d-flex justify-content-center">
            <ConvertedWeight :convertTo="convertTo" :convertedWeightValue="convertedWeightValue"/>
        </div>

        <div class="position-absolute mt-3 fs-1 fw-bold">
            Convert Weight
        </div>
        <div class="position-absolute top-50">
            <span @click="swap" class="bg-secondary rounded-circle px-3 py-4 cursor-pointer">
                <img src="../assets/swap.png" alt="" class="img-fluid" style="height: 35px;">
            </span>
        </div>
    </div>
</template>

<script setup lang="ts">
import WeightInput from './WeightInput.vue';
import ConvertedWeight from './ConvertedWeight.vue';
import { reactive, ref } from 'vue';

interface Weight {
    name: string,
    unit: string
}

let input: Weight = reactive({
    name: 'Kilogram',
    unit: 'kg'
})

let convertTo: Weight = reactive({
    name: 'Pounds',
    unit: 'lb'
})

let convertedWeightValue = ref<number>(0)
let inputValue = ref<number>(0)

function inputWeightUpdate(value?: number) {
    if (value) {
        inputValue.value = value

        if (convertTo.unit == 'lb') {
            convertedWeightValue.value = kgToPound(value)
        } else if (convertTo.unit == 'kg') {
            convertedWeightValue.value = poundToKg(value)
        }
    } else {
        convertedWeightValue.value = 0
    }
}

function kgToPound(kg: number) {
    return kg * 2.2046
}

function poundToKg(pound: number) {
    return pound / 2.2046
}

// swaps input and converted weight value
// that is making the input weight the opposite of the converted weight
function swap() {
    [ input.name, input.unit, convertTo.name, convertTo.unit ] = [ convertTo.name, convertTo.unit, input.name, input.unit ]
    
    // [ convertedWeightValue.value, inputValue.value ] = [ inputValue.value, convertedWeightValue.value ]
    convertedWeightValue.value = 0
}
</script>

<style scoped>
.row {
    height: 100vh;
}

@media screen and (max-width: 480px) {
    .section {
        height: 50%;
    }
}

.section-one {
    background-color: antiquewhite;
}

.section-two {
    background-color: burlywood;
}

.cursor-pointer:hover {
    cursor: pointer;
}
</style>