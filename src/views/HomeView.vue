<template>
    <div>
        <h2>Todays deals for you</h2>

        <TodaysDeals />

        <!-- <Recipe :recipes="recipes" v-if="showRecipes"/>
        <Loader v-if="loading" /> -->

    </div>
</template>

<script setup>
// import Recipe from '../components/Recipe'
// import Loader from '../components/Loader'
import TodaysDeals from '@/components/TodaysDeals.vue';

</script>

<style lang="scss" scoped>

</style>