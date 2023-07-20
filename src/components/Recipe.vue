<template>
    <div v-for="recipe in recipes.data" class="text-start">
        <strong>{{ recipe.title }}</strong>

        <div class="mt-2 mb-5">
            <div class="mb-2">
                <div class="sub-header">Ingredients:</div>
                <div>{{ recipe.ingredients }}</div>
            </div>

            <div class="mb-2">
                <div class="sub-header">Instructions:</div>
                <div>{{ recipe.instructions }}</div>
            </div>

            <div class="mb-2">
                <div class="sub-header">Servings:</div>
                <div>{{ recipe.servings }}</div>
            </div>
        </div>
    </div>
</template>

<script setup>
let props = defineProps(['recipes'])
</script>

<style scoped>
.sub-header {
    text-decoration: underline;
}
</style>