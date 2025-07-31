<script setup lang="ts">
const route = useRoute()

const capitalize = (str: string): string => str.charAt(0).toUpperCase() + str.slice(1)

const city: string = route.params.city || ""
const make: string = route.params.make || 'Cars'

const title: ComputedRef<string> = computed(() => `${capitalize(make)} in ${capitalize(city)}`)

useHead({
  title: title.value
})
</script>

<template>
  <div class="mx-auto mt-4 max-w-7xl space-y-4 px-4 xs:px-8 sm:px-10 lg:px-16 pb-16 w-3/5">
    <div class="mt-32 flex">
      <CarSideBar />
      <NuxtPage />
    </div>
  </div>
</template>

<style scoped>

</style>
