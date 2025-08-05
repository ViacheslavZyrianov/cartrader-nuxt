<script setup lang="ts">
const route = useRoute()

const errorText: Ref<string> = ref('')
const successText: Ref<string> = ref('')

const form = reactive({
  name: '',
  email: '',
  phone: '',
  message: ''
})

const isButtonSubmitDisabled: ComputedRef<boolean> = computed(() => Object.values(form).some(value => value === "" || value === null));

const buttonSubmitClassList = computed(() => ({
  'text-white rounded py-2 px-8 mr-auto mt-4': true,
  'bg-blue-400': !isButtonSubmitDisabled.value,
  'bg-gray-400 cursor-not-allowed': isButtonSubmitDisabled.value,
}));

const onSubmit = async () => {
  try {
    await $fetch(`/api/car/listings/${route.params.id}/message`, {
      method: 'POST',
      body: form
    })
    errorText.value = ""
    successText.value = "Your message has been sent successfully!"

    form.name = ''
    form.email = ''
    form.phone = ''
    form.message = ''

    setTimeout(() => {
      successText.value = ""
    }, 2000)
  } catch (error) {
    errorText.value = error.statusMessage || 'An error occurred while sending your message.'

    setTimeout(() => {
      errorText.value = ""
    }, 2000)
  }
}
</script>

<template>
  <form class="mt-10" @submit.prevent="onSubmit">
    <div class="flex justify-between gap-x-4 mb-4">
      <input v-model="form.name" type="text" class="border p-1 flex-1" placeholder="Name">
      <input v-model="form.email" type="text" class="border p-1 flex-1" placeholder="Email">
      <input v-model="form.phone" type="text" class="border p-1 flex-1" placeholder="Phone">
    </div>

    <textarea v-model="form.message" class="border p-1 w-full" placeholder="Message" />

    <div class="flex justify-space-between">
      <button type="submit" :class="buttonSubmitClassList" :disabled="isButtonSubmitDisabled">Submit</button>
      <p v-if="errorText" class="text-red-400 font-bold">{{ errorText }}</p>
    </div>

    <p v-if="successText" class="text-green-400 font-bold">{{ successText }}</p>
  </form>
</template>

<style scoped>

</style>
