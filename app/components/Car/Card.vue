<script setup lang="ts">
defineProps({
  car: {
    type: Object,
    default: () => ({})
  }
})
</script>

<template>
  <NuxtLink :to="`/car/${car.name}-${car.id}`" class="shadow border flex w-full overflow-hidden mb-5 cursor-pointer h-[200px]">
    <img
        :src="car.url"
        :alt="car.name"
        class="w-[300px] h-full object-cover">
    <div class="p-4 flex flex-col">
      <div>
        <h1 class="text-2xl text-blue-700">{{ car.name }}</h1>
        <p class="text-gray-700">{{ car.description }}</p>
      </div>
      <h2 class="mt-auto text-xl">${{ car.price }}</h2>
    </div>
  </NuxtLink>
</template>

<style scoped>

</style>
