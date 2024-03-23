<template>
    <div :class="[feedback.status == 'failed'? 'bg-danger' : 'bg-success']" class="rounded my-4 p-2 text-white">
        {{ feedback.message }}
    </div>
</template>

<script setup>
defineProps(['feedback'])
</script>
