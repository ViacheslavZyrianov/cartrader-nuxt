<script setup lang="ts">
const route = useRoute()

const data = await useFetchCars(route.params.city as string, { ...(route.params.make && { make: route.params.make }), ...route.query })

watch(() => route.query, () => {
  window.location.reload();
}, {deep: true})
</script>

<template>
  <div>
    <CarCards :cars="data" />
  </div>
</template>

<style scoped>

</style>
