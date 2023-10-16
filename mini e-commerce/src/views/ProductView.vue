<template>
    <div v-if="notFound">
        Product not found
    </div>

    <div v-else class="mb-2">
        <div v-if="product.id" class="row text-start">
            <div class="col-12 col-md-4">
                <img :src=product.image class="img-fluid p-4" alt="Product image">
            </div>
            <div class="col-12 col-md-8 mt-3">
                <h2>{{ product.title}}</h2>
                <div class="my-5">{{ product.description }}</div>
                <h4>$ {{ product.price }}</h4>

                <div class="mb-2">
                    <Btn @click="decreaseQuantity">-</Btn>
                    {{ quantity }}
                    <Btn @click="increaseQuantity">+</Btn>
                </div>

                <Btn 
                 @click="addToCart(product)"
                >
                    Add to cart
                </Btn>
            </div>
        </div>
        <div v-else>
            <Loader />
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

import Btn from '@/components/Btn.vue'
import Loader from '@/components/Loader.vue'

let route = useRoute()
let emit = defineEmits(['addToCart'])

let product = ref([])
let notFound = ref(false)
let quantity = ref(1)

function increaseQuantity() {
    quantity.value++
}

function decreaseQuantity() {
    if (quantity.value > 1) {
        quantity.value--
    }
}

function addToCart(product) {
    product.qty = quantity.value
    product.priceTimesQty = quantity.value * product.price
    emit('addToCart', product)
}

onMounted(async () => {
    try {
        let api = await fetch(`https://fakestoreapi.com/products/${route.params.id}`)
        let data = await api.json()
        product.value = data
        notFound.value = false
    } catch (e) {
        notFound.value = true
        console.log(e);
    }
})
</script>

<style scoped>
.img{
    height: 200px;
}
</style>