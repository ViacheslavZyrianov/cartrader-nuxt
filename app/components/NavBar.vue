<script setup lang="ts">
const user = useSupabaseUser()
const supabase = useSupabaseClient()
const router = useRouter()

const onLogout = async () => {
  const { error } = await supabase.auth.signOut()
  if (error) {
    console.error('Logout failed:', error)
  } else {
    router.push('/login')
  }
}
</script>

<template>
  <header class="sticky top-0 z-50 flex items-center justify-between bg-white p-4 shadow-md">
    <NuxtLink class="text-3xl font-mono" to="/">Cartrader</NuxtLink>
    <div v-if="user" class="flex">
      <NuxtLink to="/profile/listings" class="mr-5">Profile</NuxtLink>
      <p class="cursor-pointer" @click="onLogout">Logout</p>
    </div>
    <div v-else class="flex gap-x-4">
      <NuxtLink to="/login">Login</NuxtLink>
      <NuxtLink to="/registration">Registration</NuxtLink>
    </div>
  </header>
</template>

<style scoped>

</style>
