<script lang="ts" setup>
import type { NavigationMenuItem } from '@nuxt/ui';



const navItems = ref<NavigationMenuItem[]>([
    {
        label: 'Animes',
        to: '/animes',
        // children: [
        //     {
        //         label: 'Top Anime',
        //         to: '/animes/top',
        //     },
        //     {
        //         label: 'Calendar',
        //         to: '/animes/calendar',
        //     },
        //     {
        //         label: 'Upcoming',
        //         to: '/animes/upcoming',
        //     },
        //     {
        //         label: 'This Season',
        //         to: '/animes?season=current',
        //     },
        // ],
    },
    {
        label: 'About',
        to: '/about',
    },
    {
        label: 'Discord',
        to: '/discord',
    },
    // {
    //     label: 'Manga',
    //     to: '/manga',
    //     children: [
    //         {
    //             label: 'Top Anime',
    //             to: '/manga/top',
    //         },
    //         {
    //             label: 'Calendar',
    //             to: '/manga/calendar',
    //         },
    //         {
    //             label: 'Upcoming',
    //             to: '/manga/upcoming',
    //         },
    //         {
    //             label: 'This Season',
    //             to: '/manga?season=current',
    //         },
    //     ],
    // },
])
</script>

<template>
    <header
        class="sticky top-0 z-50 w-full bg-neutral-900/55 backdrop-blur">
        <UContainer class="container flex h-15 max-w-screen-2xl items-center px-4 justify-between">

            <UContainer class="flex items-center gap-2 w-fit mx-0 px-0 sm:px-0 lg:px-0">
                <NuxtLink to="/" class="flex items-center gap-2">
                    <img src="~/assets/images/app_icon.png" alt="App Icon" class="size-[50px]">
                    <h2 class="font-bold text-xl">{{ $t('common.appName') }}</h2>
                </NuxtLink>
            </UContainer>

            <UNavigationMenu :items="navItems" class="w-[45%]" />

            <UContainer class="flex items-center gap-2 w-fit mx-0 px-0 sm:px-0 lg:px-0">
                <SearchButton />
                <LanguageSwitcher />
                <ColorModeButton />
            </UContainer>

        </UContainer>
        <USeparator />
    </header>
</template>
