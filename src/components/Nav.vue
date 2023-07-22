<template>
    <nav class="navbar navbar-expand-lg bg-body-dark border-bottom border-bottom-dark">
  <div class="container-fluid flex">
    <button class="navbar-toggler border-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span><i class="bi bi-list"></i></span>
    </button>

    <RouterLink to="/" class="navbar-brand nav-link">My E-Shop</RouterLink>

    <button @click="$router.push({name: 'cart'})" type="button" class="btn btn-outline-primary position-relative ms-2 order-lg-4">
        <i class="bi bi-cart"></i>
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
            {{ numOfCartItems }}
        </span>
    </button>

    <div class="collapse navbar-collapse" id="navbarScroll">
      <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
        <li class="nav-item">
          <RouterLink to="/" class="nav-link">Home</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/categories" class="nav-link">Categories</RouterLink>
        </li>
      </ul>
      <form class="d-flex">
        <input
         v-model="searchValue"
         class="form-control me-2"
         @keypress.enter.prevent="search"
         placeholder="Search"
        >
        <div @click="search" class="btn btn-outline-light">Search</div>
      </form>
    </div>


  </div>
</nav>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';

let props = defineProps(['cart'])
let { cart } = props

let searchValue = ref('')
let router = useRouter()

function search() {
  if (searchValue.value.trim() != '') {
    router.push({path: '/search', query: { q: searchValue.value }})
  }
}

let numOfCartItems = computed(() => {
  let qty = 0
    for (let i = 0; i < cart.length; i++) {
        qty += cart[i].qty
    }
    return qty
})
</script>

<style scoped>
*{
    color: white;
}
.nav-link:hover {
    text-decoration: underline;
    color: white;
}

input{
  color: black;
}
</style>