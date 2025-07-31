<script setup lang="ts">
const city: Ref<string> = ref('')
const hasError: Ref<boolean> = ref(false)

const inputClassList: ComputedRef<Record<string,boolean>> = computed(() => ({
  'py-3 px-4 w-full text-gray-800 outline-none rounded-l-full': true,
  'border border-red-500 bg-red-100': hasError.value
}))

const onSubmit = () => {
  hasError.value = !city.value
  if (hasError.value) return
  navigateTo(`/city/${city.value}/car`)
}

const onInput = () => {
  hasError.value = false
}
</script>

<template>
  <form class="font-serif w-[1000px] text-2xl rounded-full flex justify-between overflow-hidden drop-shadow-2xl mx-auto" @submit.prevent="onSubmit">
    <input v-model="city" type="search" name="Search" :class="inputClassList" placeholder="Search..." @input="onInput">
    <button type="submit" class="bg-sky-500 px-10 text-white">Search</button>
  </form>
</template>
