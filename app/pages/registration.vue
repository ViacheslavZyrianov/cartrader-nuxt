<script setup lang="ts">
useHead({
  title: 'Registration',
})

definePageMeta({
  layout: 'custom'
})

const { useSignUp } = useAuth()

const form = reactive({
  email: '',
  password: ''
})

const onSubmit = async () => {
  await useSignUp(form)
}
</script>

<template>
  <div class="mt-10">
    <h1 class="text-5xl font-bold mb-7">Registration</h1>
    <form @submit.prevent="onSubmit">
      <label for="email">Email</label>
      <input id="email" v-model="form.email" type="email" name="email" placeholder="Enter your email" class="border p-2 mb-4 w-full">

      <label for="password">Password</label>
      <input id="password" v-model="form.password" type="password" name="password" placeholder="Enter password" class="border p-2 mb-4 w-full">

      <button type="submit" class="bg-blue-400 mt-2 rounded text-white py-1 px-4">
        Register
      </button>
    </form>
  </div>
</template>
