<template>
  <div class="container">
    <div class="row justify-content-center pt-5">
      <div class="col-12 col-md-8 col-lg-6">
        <Nav />
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup>
import Nav from "./components/Nav.vue";
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #151638;
  min-height: 100vh;
  background: #ffd945;
}
</style>
