<template>
    <div v-if="searchedProducts">
        <div v-if="products.length > 0">
            <Products :products="products"/>
        </div>
        <div v-else>
            <Loader />
        </div>
    </div>
    <div v-else>
        No product found containing "{{ $route.query.q }}"
    </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue';

import Products from '@/components/Products.vue';
import Loader from '@/components/Loader.vue';
import { useRoute } from 'vue-router';

let route = useRoute()
let products = ref([])
let searchedProducts = ref(true)

function apiCall(searchParam) {
    products.value.length = 0
    fetch(`https://fakestoreapi.com/products/`)
        .then(res => res.json())
        .then(data => {
            for (let i = 0; i < data.length; i++) {
                if(data[i].title.toLowerCase().includes(searchParam.toLowerCase())){
                    products.value.push(data[i])
                }
            }
            searchedProducts.value = true

            if (products.value.length == 0) {
                searchedProducts.value = false
            }
        })
}

watch(() => route.query.q, (newQuery) => {
    apiCall(newQuery)
});

onMounted(() => {
    apiCall(route.query.q)
})
</script>

<style lang="scss" scoped>

</style>