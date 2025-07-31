<script setup lang="ts">
const route = useRoute()

const capitalize = (str: string): string => str.charAt(0).toUpperCase() + str.slice(1)

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
