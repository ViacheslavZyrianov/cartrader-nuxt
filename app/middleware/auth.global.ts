export default defineNuxtRouteMiddleware((to) => {
    if (to.path.includes('/profile')) {
        if (!useSupabaseUser().value) return navigateTo('/login');
    }
})
