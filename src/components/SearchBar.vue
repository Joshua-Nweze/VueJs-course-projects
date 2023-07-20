<template>
    <div>
        <div class="input-group mb-3">
            <input
             type="text"
             class="form-control search"
             placeholder="Search a food recipe"
             v-model="food"
             @keydown.enter="$emit('search', food)"
            >

            <button
             class="input-group-text"
             @click="$emit('search', food)"
            >
                <i class="bi bi-search"></i>
            </button>
        </div>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue';

let food = ref('')


</script>

<style scoped>
.bi-search {
    transform: rotate(90deg)
}

.search:focus {
    box-shadow: none;
}
/* .search {
    background-color: #2f327f;
}

.search::placeholder {
    color: white;
} */
</style>