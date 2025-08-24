export default defineNuxtRouteMiddleware((to, from) => {
    if (import.meta.client && to.path === '/discord') {
        window.open('https://discord.gg/Nv8UXpB36y', '_blank');
        return abortNavigation();
    };
});
