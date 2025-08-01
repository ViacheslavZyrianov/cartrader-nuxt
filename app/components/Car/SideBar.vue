<script setup lang="ts">
const route = useRoute()
const router = useRouter()
const { makes } = useCars()

const modal = ref({
  location: false,
  makes: false,
  price: false,
})

const modalCity: Ref<string> = ref("")
const modalPrice: Ref<Record<string, string>> = ref({
  min: route.query.minPrice || "",
  max: route.query.maxPrice || ""
})

const modalMake: ComputedRef<string> = computed(() => route.params.make as string || 'Any')
const priceRangeText: ComputedRef<string> = computed(() => {
  const min = route.query.minPrice
  const max = route.query.maxPrice

  if (!min && !max) {
    return 'Any'
  }

  if (min && !max) return `Min: $${min}`
  if (max && !min) return `Max: $${max}`

  return `$${min} - $${max}`
})

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

const onSubmitMake = (make: string) => {
  onUpdateModal('makes')
  navigateTo(`/city/${route.params.city}/car/${make}`)
}

const onSubmitPriceRange = () => {
  onUpdateModal('price')
  router.push({
    query: {
      ...route.query,
      minPrice: modalPrice.value.min || undefined,
      maxPrice: modalPrice.value.max || undefined
    }
  })
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
      <h3 class="text-blue-400 capitalize" @click="onUpdateModal('makes')">{{ modalMake }}</h3>
      <div v-if="modal.makes" class="absolute border shadow left-56 p-5 top-1 -m-1 bg-white w-[600px] flex flex-wrap justify-between">
        <h4 v-for="make in makes" :key="make" class="w-1/3" @click="onSubmitMake(make)">{{ make }}</h4>
      </div>
    </div>

    <div class="p-5 flex justify-between relative cursor-pointer border-b" >
      <h3>Price</h3>
      <h3 class="text-blue-400 capitalize" @click="onUpdateModal('price')">{{ priceRangeText }}</h3>
      <form v-if="modal.price" class="absolute border shadow left-56 p-5 top-1 -m-1 bg-white" @submit.prevent="onSubmitPriceRange">
        <div class="mb-2">
          <label for="price-min">
            Min price
          </label>
          <input id="min-price" v-model="modalPrice.min" type="number" placeholder="Min price" class="border px-2 py-1 rounded">
        </div>
        <div class="mb-2">
          <label for="price-max">
            Max price
          </label>
          <input id="max-price" v-model="modalPrice.max" type="number" placeholder="Max price" class="border px-2 py-1 rounded">
        </div>
        <button type="submit" class="bg-blue-400 w-full rounded text-white p-1">Apply</button>
      </form>
    </div>
  </div>
</template>

<style scoped>

</style>
