<script setup lang="ts">
const route = useRoute()

const cars = await useFetchCars(route.params.city as string, { ...(route.params.make && { make: route.params.make }), ...route.query })

watch(() => route.query, () => {
  window.location.reload();
}, {deep: true})
</script>

<template>
  <div>
    <CarCards v-if="cars && cars?.length" :cars="cars" />
    <h1 v-else class="text-red-400 font-bold">No cars found</h1>
  </div>
</template>

<style scoped>

</style>
