<template>
    <div class="row mb-5">
        <div
            v-for="product in products"
            :key="product.id"
            class="col-6 col-md-4 col-lg-3 my-1"
        >
            <div class="card text-start bg-dark text-white">
                <img
                 :src=product.image
                 class="card-img-top"
                 alt="Product Image"
                 height="200"
                >
                <div class="card-body">
                    <RouterLink :to="`/product/${product.id}`" class="link">
                        <h5 class="card-title">{{ product.title.slice(0, 30) }} ...</h5>
                    </RouterLink>
                    <p class="card-text">{{ product.description.slice(0, 30) }} ...</p>
                    <h5>$ {{ product.price }}</h5>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps(['products'])
</script>
