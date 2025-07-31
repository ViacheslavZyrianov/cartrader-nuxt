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
const onGoBack = (error) => {
  error.value = null
}
</script>

<template>
  <div class="mt-32 flex">
    <NuxtErrorBoundary>
      <CarSideBar />
      <NuxtPage />

      <template #error="{ error }">
        <div class="text-center mx-auto flex flex-col">
          <h1 class="text-5xl">Sorry, something went wrong</h1>
          <h3>{{ error }}</h3>
          <button class="rounded-full mt-7 text-2xl text-blue-500 bg-sky-100 hover:bg-sky-200 transition-colors px-6 py-2" @click="onGoBack">Go back</button>
        </div>
      </template>
    </NuxtErrorBoundary>
  </div>
</template>

<style scoped>

</style>
