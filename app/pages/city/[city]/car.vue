<script setup lang="ts">
const route = useRoute()
const { capitalize } = useUtilities()

const city: string = route.params.city || ""
const make: string = route.params.make || 'Cars'

const title: ComputedRef<string> = computed(() => `${capitalize(make)} in ${capitalize(city)}`)

useHead({
  title: title.value
})

definePageMeta({
  layout: 'custom',
})
</script>

<template>
  <div class="mt-32 flex">
    <CarSideBar />
    <NuxtPage />
  </div>
</template>

<style scoped>

</style>
