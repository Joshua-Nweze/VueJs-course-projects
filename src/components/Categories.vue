<template>
    <div v-if="categories">
        <div class="row">
            <div
             v-for="category in categories"
             class="col-6 col-md-4 col-lg-3 my-1"
            >
                <RouterLink :to="`/categories/${category}`" class="link card text-start bg-dark text-white border-light border">
                    <div class="card-body p-6">
                        <h5 class="card-title">{{ category.toUpperCase() }}</h5>
                    </div>
                </RouterLink>
            </div>
        </div>
    </div>

    <div v-else>
        <Loader />
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

import Loader from './Loader.vue'

let categories = ref(null)

onMounted(() => {
    fetch('https://fakestoreapi.com/products/categories')
        .then(res => res.json())
        .then(data => categories.value = data)
})

</script>

<style scoped>
.sub-header {
    text-decoration: underline;
}
</style>