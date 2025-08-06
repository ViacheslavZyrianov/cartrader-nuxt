<script setup lang="ts">
const props = defineProps({
  listing: {
    type: Object,
    default: () => ({}),
  },
});

const emit = defineEmits(['delete']);

const supabase = useSupabaseClient()
const config = useRuntimeConfig()

const imageURL = (url: string) => supabase
    .storage
    .from('images')
    .getPublicUrl(url).data.publicUrl

const onDelete = async () => {
  emit('delete', props.listing.id);
}
</script>

<template>
  <div class="shadow rounded overflow-hidden flex justify-between mb-4">
    <div class="flex">
      <img :src="imageURL(listing.image)" alt="" class="w-80 mr-3 h-44" >
      <div class="p-3">
        <h1 class="text-2xl">{{ listing.name }}</h1>
        <p class="text-blue-400">${{ listing.price }}</p>
      </div>
    </div>
    <div class="p-3 flex">
      <NuxtLink
        class="text-blue-400 mr-4"
        :to="`/profile/listings/view/${listing.id}`"
      >
        View
      </NuxtLink>
      <button class="text-red-400 cursor-pointer mb-auto" @click="onDelete">Delete</button>
    </div>
  </div>
</template>
