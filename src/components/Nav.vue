<template>
    <div class="mb-2">
        <RouterLink class="link" to="/">Home</RouterLink> | 
        <RouterLink class="link" to="/about">About</RouterLink>
    </div>
</template>

<style scoped>
.link {
    text-decoration: none;
}

.router-link-active {
    text-decoration: underline;
}
</style>