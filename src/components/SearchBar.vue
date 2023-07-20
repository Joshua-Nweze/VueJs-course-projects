<template>
    <div>
        <div class="input-group mb-3">
            <input
             type="text"
             class="form-control search"
             placeholder="Search location"
             v-model="location"
             @keydown.enter="$emit('search', location)"
            >

            <button
             class="input-group-text"
             @click="$emit('search', location)"
            >
                <i class="bi bi-search"></i>
            </button>
        </div>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue';

let location = ref('')

</script>

<style scoped>
.bi-search {
    transform: rotate(90deg)
}

.search {
    background-color: #2f327f;
}

.search::placeholder {
    color: white;
}
</style>
