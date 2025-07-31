<script setup lang="ts">

const route = useRoute()
const { capitalize } = useUtilities()

useHead({
  title: capitalize(route.params.name)
})

definePageMeta({
  layout: 'custom',
})
</script>

<template>
  <div>
    <CarDetailHero />
    <CarDetailAttributes />
    <CarDetailDescription />
    <CarDetailContacts />
  </div>
</template>

<style scoped>

</style>
