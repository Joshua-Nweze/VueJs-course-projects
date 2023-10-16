<template>
    <div>
        <h1>Recipe finder</h1>

        <SearchBar @search="search"/>

        <Recipe :recipes="recipes" v-if="showRecipes"/>
        <Loader v-if="loading" />

    </div>
</template>

<script setup>
import SearchBar from '../components/SearchBar'
import Recipe from '../components/Recipe'
import Loader from '../components/Loader'

import { reactive, ref } from 'vue';

let recipes = reactive({data: null})
let loading = ref(false)
let showRecipes = ref(false)

async function search(food) {
    loading.value = true
    showRecipes.value = false
    const url = `https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe?query=${food}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': process.env.VUE_APP_API_KEY,
            'X-RapidAPI-Host': 'recipe-by-api-ninjas.p.rapidapi.com'
        }
    };
    if (food.trim() != '') {
        try {
            const api = await fetch(url, options);

            if (api.status == 200) {
                const res = await api.json();
                recipes.data = res
                loading.value = false
                showRecipes.value = true
            } else {
                error.value = true
                loading.value = false
            }

        } catch (error) {
            console.error(error);
        }
    }
}
</script>

<style lang="scss" scoped>

</style>