<script setup lang="ts">
import heartFilled from '@/assets/heartFilled.png'
import heartOutline from '@/assets/heartOutline.png'

const props = defineProps({
  car: {
    type: Object,
    default: () => ({})
  },
  isFavorite: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['toggleFavorite'])

const favoredIcon: ComputedRef<string> = computed(() => props.isFavorite ? heartFilled : heartOutline)
</script>

<template>
  <div class="relative">
    <img :src="favoredIcon" alt="Favourite" class="absolute w-5 right-5 top-2 z-20 cursor-pointer" @click="emit('toggleFavorite', car.id)">
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
  </div>
</template>

<style scoped>

</style>
