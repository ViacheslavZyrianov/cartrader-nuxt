<script setup lang="ts">
const error = useError()
</script>

<template>
  <div class="flex h-screen justify-center items-center flex-col">
    <h1 class="text-9xl">Error - {{ error.statusCode }}</h1>
    <p class="mt-7 text-4xl">{{ error.message }}</p>
    <NuxtLink to="/" class="rounded-full mt-7 text-2xl text-blue-500 bg-sky-100 hover:bg-sky-200 transition-colors px-6 py-2">Go home</NuxtLink>
  </div>
</template>

<style scoped>

</style>
