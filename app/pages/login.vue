<script setup lang="ts">
definePageMeta({
  layout: 'custom'
})

const supabase = useSupabaseClient()

const form = reactive({
  email: '',
  password: ''
})

const onLogin = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'google'
  })

  if (error) {
    console.error('Login failed:', error.message)
  }
}

const onLoginViaEmail = async () => {
  const { error } = await supabase.auth.signInWithPassword({
    email: form.email,
    password: form.password
  })

  if (error) {
    console.error('Login failed:', error.message)
  } else {
    navigateTo('/profile/listings')
  }
}
</script>

<template>
<div class="mt-10">
  <h1 class="text-5xl font-bold mb-7">Login</h1>
  <button class="bg-red-400 px-6 py-2 rounded-full text-white font-bold" @click="onLogin">Login with Google</button>

  <p class="mt-4">Or</p>
  <form class="mt-4" @submit.prevent="onLoginViaEmail">
    <label for="email">Email</label>
    <input id="email" v-model="form.email" type="email" name=" email" placeholder="Enter your email" class="border p-2 mb-4 w-full">
    <label for="password">Password</label>
    <input id="password" v-model="form.password" type="password" name="password" placeholder="Enter password" class="border p-2 mb-4 w-full">

    <button type="submit" class="bg-blue-400 mt-2 rounded text-white py-1 px-4">
      Login
    </button>
  </form>
</div>
</template>

<style scoped>

</style>
