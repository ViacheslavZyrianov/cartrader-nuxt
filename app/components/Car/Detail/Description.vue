<script setup lang="ts">
defineProps({
  description: {
    type: String,
    default: ""
  }
})
</script>

<template>
  <div class="mt-5">
    <p class="mb-10">{{ description }}</p>
  </div>
</template>

<style scoped>

</style>
