<script setup lang="ts">
const { cars } = useCars()

const favorite = useLocalStorage('favorite', {})

const onHandleFavorite = (id: string) => {
  if (id in favorite.value) {
    delete favorite.value[id]
  } else {
    favorite.value = {
      ...favorite.value,
      [id]: true
    }
  }
}
</script>

<template>
  <div class="w-full gap-y-4">
    <CarCard v-for="car in cars" :key="car.id" :car="car" :is-favorite="car.id in favorite" @toggle-favorite="onHandleFavorite" />
  </div>
</template>

<style scoped>

</style>
