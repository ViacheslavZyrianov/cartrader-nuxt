<script setup lang="ts">

const route = useRoute()
const { capitalize } = useUtilities()
const car = await useFetchCar(route.params.id as string)

useHead({
  title: capitalize(route.params.name)
})

definePageMeta({
  layout: 'custom',
})
</script>

<template>
  <div v-if="car">
    <CarDetailHero :car="car" />
    <CarDetailAttributes :attributes="car.features" />
    <CarDetailDescription :description="car.description" />
    <CarDetailContacts />
  </div>
</template>

<style scoped>

</style>
