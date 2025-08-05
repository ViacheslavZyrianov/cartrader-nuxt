<script setup lang="ts">
defineProps({
  car: {
    type: Object,
    default: () => ({})
  }
})
</script>

<template>
  <div class="mt-10">
    <NuxtPicture :src="car.image" class="w-full object-cover" />

    <h1 class="mt-10 text-4xl">{{ car.name }}</h1>
    <div class="text-slate-500 flex justify-between text-lg mt-3 border-b pb-5">
      <div class="flex items-center">
        <p class="mr-2">{{ car.seats }} seats</p>
        <p class="mr-2">|</p>
        <p class="mr-2">{{ car.miles }} miles</p>
      </div>
      <div>
        <p class="font-bold">${{ car.price }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
