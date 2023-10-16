<template>
    <div v-if="cart.length > 0">
        <div class="row align-items-start">
            <div class="col-12 col-lg-8">
                <div
                    class="row text-start justify-content-center mb-2"
                    v-for="item in cart"
                    :key="item.id"
                >
                    <div class="col-3">
                        <img :src=item.image alt="Product Image" height="90" width="100">
                    </div>

                    <div class="col-6">
                        <div>{{ item.title }}</div>
                        <div>Quantity: {{ item.qty }}</div>
                        <div>Price: $ {{ item.priceTimesQty }}</div>
                    </div>

                    <div class="col-3 text-end">
                        <div class="btn text-danger" @click="$emit('removeFromCart', index)"><i class="bi bi-trash"></i></div>
                    </div>
                </div>

            </div>
            <div class="col-12 col-lg-4">
                <div class="border rounded border-light">
                    <div class="mt-2 fw-bold">Total: {{ totalAmount.toFixed(2) }}</div>
                    <div class="btn btn-outline-light border m-2">Proceed to checkout</div>
                </div>
            </div>
        </div>
        </div>
        <div v-else>
            No items in cart
        </div>
</template>

<script setup>
import { computed } from 'vue';

let props = defineProps(['cart'])
let { cart } = props

let totalAmount = computed(() => {
    let total = 0

    for (let i = 0; i < cart.length; i++) {
        total += cart[i].priceTimesQty
    }

    return total
})
</script>

<style scoped>

</style>