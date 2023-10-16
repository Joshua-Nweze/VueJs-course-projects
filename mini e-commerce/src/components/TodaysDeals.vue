<template>
    <div v-if="todaysDeals">
        <Products :products="todaysDeals"/>
    </div>
    <div v-else>
        <Loader />
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import Loader from './Loader.vue'
import Products from './Products.vue'

let todaysDeals = ref(null)

onMounted(() => {
    fetch('https://fakestoreapi.com/products?limit=8')
        .then(res => res.json())
        .then(data => todaysDeals.value = data)
})
</script>

<style scoped>
.card-text{
    font-size: 13px;
}
</style>