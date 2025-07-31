<script setup lang="ts">
const route = useRoute()

const modal = ref({
  location: false,
  make: false,
  price: false,
})

const modalCity: Ref<string> = ref("")

const onUpdateModal = (key: string) => {
  modal.value[key] = !modal.value[key]
}

const onSubmitChangeLocation = () => {
  if (!modalCity.value) return
  if (!isNaN(parseInt(modalCity.value))) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid city name',
      message: 'City name cannot be a number'
    })
  }
  onUpdateModal('location')
  navigateTo(`/city/${modalCity.value}/car/${route.params.make}`)
  modalCity.value = ""
}
</script>

<template>
  <div class="shadow border w-64 mr-10 z-30 h-[190px]">
    <div class="p-5 flex justify-between relative cursor-pointer border-b" >
      <h3>Location</h3>
      <h3 class="text-blue-400 capitalize" @click="onUpdateModal('location')">
        {{ route.params.city }}
      </h3>
      <form v-if="modal.location" class="absolute border shadow left-56 p-5 top-1 -m-1 bg-white" @submit.prevent="onSubmitChangeLocation">
        <input v-model="modalCity" type="text" class="border p-1 rounded" placeholder="Search location">
        <button type="submit" class="bg-blue-400 w-full mt-2 rounded text-white p-1">Apply</button>
      </form>
    </div>

    <div class="p-5 flex justify-between relative cursor-pointer border-b" >
      <h3>Make</h3>
      <h3 class="text-blue-400 capitalize">Any</h3>
      <!--          <div class="absolute border shadow left-56 p-5 top-1 -m-1 bg-white">-->
      <!--            <input type="text" class="border p-1 rounded" placeholder="Search location">-->
      <!--            <button class="bg-blue-400 w-full mt-2 rounded text-white p-1">Apply</button>-->
      <!--          </div>-->
    </div>

    <div class="p-5 flex justify-between relative cursor-pointer border-b" >
      <h3>Price</h3>
      <h3 class="text-blue-400 capitalize">Any</h3>
      <!--          <div class="absolute border shadow left-56 p-5 top-1 -m-1 bg-white">-->
      <!--            <input type="text" class="border p-1 rounded" placeholder="Search location">-->
      <!--            <button class="bg-blue-400 w-full mt-2 rounded text-white p-1">Apply</button>-->
      <!--          </div>-->
    </div>
  </div>
</template>

<style scoped>

</style>
