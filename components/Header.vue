<script lang="ts" setup>
import type { NavigationMenuItem } from '@nuxt/ui';



const navItems = ref<NavigationMenuItem[]>([
    {
        label: 'Anime',
        to: '/anime',
        children: [
            {
                label: 'Top Anime',
                to: '/anime/top',
            },
            {
                label: 'Calendar',
                to: '/anime/calendar',
            },
            {
                label: 'Upcoming',
                to: '/anime/upcoming',
            },
            {
                label: 'This Season',
                to: '/anime?season=current',
            },
        ],
    },
    {
        label: 'Manga',
        to: '/manga',
        children: [
            {
                label: 'Top Anime',
                to: '/manga/top',
            },
            {
                label: 'Calendar',
                to: '/manga/calendar',
            },
            {
                label: 'Upcoming',
                to: '/manga/upcoming',
            },
            {
                label: 'This Season',
                to: '/manga?season=current',
            },
        ],
    },
])
</script>

<template>
    <header
        class="sticky top-0 z-50 w-full border-b border-white/10 backdrop-blur">
        <UContainer class="container flex h-15 max-w-screen-2xl items-center px-4 justify-between">

            <UContainer class="flex items-center gap-2 w-fit mx-0 px-0 sm:px-0 lg:px-0">
                <NuxtLink to="/" class="flex items-center gap-2">
                    <img src="~/assets/images/app_icon.png" alt="App Icon" class="size-[50px]">
                    <h2 class="font-bold text-xl">Anime Pack</h2>
                </NuxtLink>
            </UContainer>

            <UNavigationMenu :items="navItems" class="w-[75%]" />

            <UContainer class="flex items-center gap-2 w-fit mx-0 px-0 sm:px-0 lg:px-0">
                <ColorModeButton />
            </UContainer>

        </UContainer>
    </header>
</template>
