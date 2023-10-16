<template>
  <Nav
   :cart="cart"
  />
  <div class="container">
    <div class="row justify-content-center pt-5">
      <div class="col-12">
        <router-view 
         @addToCart="addToCart"
         :cart="cart"
         @removeFromCart="removeFromCart"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

import Nav from "./components/Nav.vue";

let cart = ref([])

function addToCart(product) {
  cart.value.push(product)
}

function removeFromCart(index) {
  cart.value.splice(index, 1)
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  min-height: 100vh;
  background: #212529;
  overflow-x: hidden;
}

.link{
  text-decoration: none;
  color: white;
}
.link:hover{
  text-decoration: underline;
}
</style>
