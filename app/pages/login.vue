<script setup lang="ts">
definePageMeta({
  layout: 'custom'
})

const supabase = useSupabaseClient()

const onLogin = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'google'
  })

  if (error) {
    console.error('Login failed:', error.message)
  }
}
</script>

<template>
<div class="mt-10">
  <h1 class="text-5xl font-bold mb-7">Login</h1>
  <button class="bg-red-400 px-6 py-2 rounded-full text-white font-bold" @click="onLogin">Login with Google</button>
</div>
</template>

<style scoped>

</style>
