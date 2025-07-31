<script setup lang="ts">

const route = useRoute()
const { capitalize } = useUtilities()
const { cars } = useCars()

useHead({
  title: capitalize(route.params.name)
})

definePageMeta({
  layout: 'custom',
})

const car = computed(() => cars.find((car) => parseInt(car.id) === parseInt(route.params.id)))

if (!car.value) {
  throw createError({
    statusCode: 404,
    statusMessage: `Car with ID ${route.params.id} doesn't exist`,
  })
}
</script>

<template>
  <div v-if="car">
    <CarDetailHero :car="car" />
    <CarDetailAttributes :attributes="car.attributes" />
    <CarDetailDescription :description="car.description" />
    <CarDetailContacts />
  </div>
</template>

<style scoped>

</style>
