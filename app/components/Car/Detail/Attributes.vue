<script setup lang="ts">
defineProps({
  attributes: {
    type: Array,
    default: () => []
  }
})
</script>

<template>
  <div class="mr-10 mt-5 border-b pb-5">
    <div v-for="attribute in attributes" :key="attribute" class="flex text-lg mt-2">
      <p class="rounded text-lime-800 mr-3">✔</p>
      <p>{{ attribute }}</p>
    </div>
  </div>
</template>

<style scoped>

</style>
