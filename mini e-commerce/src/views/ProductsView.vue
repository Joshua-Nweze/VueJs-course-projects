<template>
    <div v-if="loading">
        <Loader />
    </div>

    <div v-else>
        <div v-if="products">
            <Products :products="products"/>
        </div>
        <div v-else>
            Nothing to show
        </div>
    </div>

</template>

<script setup>
import { onMounted, ref } from 'vue';

import Products from '@/components/Products.vue';
import Loader from '@/components/Loader.vue';
import { useRoute } from 'vue-router';

let route = useRoute()
let products = ref()

let loading = ref(true)

onMounted(() => {
    loading.value = true
    fetch(`https://fakestoreapi.com/products/category/${route.params.name}`)
        .then(res => res.json())
        .then(data => {
            if (data.length == 0) {
                loading.value = false
            } else {
                products.value = data
                loading.value = false
            }
            
        })
        
})
</script>

<style lang="scss" scoped>

</style>