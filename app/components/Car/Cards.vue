<script setup lang="ts">
const { cars } = useCars()
</script>

<template>
  <div class="w-full gap-y-4">
    <CarCard v-for="car in cars" :key="car.id" :car="car" />
  </div>
</template>

<style scoped>

</style>
