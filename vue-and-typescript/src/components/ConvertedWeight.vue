<template>
    <div>
        <span class="badge text-bg-secondary">{{ convertTo.name }} ({{ convertTo.unit }})</span>
        <div class="fs-1 fw-bold text-secondary">
            {{ convertedWeightValue }}
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    convertTo: {
        name: string,
        unit: string
    },
    convertedWeightValue: number
}>()
</script>