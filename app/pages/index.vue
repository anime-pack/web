<script setup lang="ts">

useSeoMeta({
    title: 'Home',
    description: 'All about animes, just for you. ❤️',
    ogSiteName: 'Anime Pack',
    ogType: 'website',
    ogTitle: 'Home',
    ogDescription: 'All about animes, just for you. ❤️',
    // ogImage: '/images/og-home.png',
    twitterTitle: 'Home - Anime Pack',
    twitterDescription: 'All about animes, just for you. ❤️',
    // twitterImage: '/images/twitter-home.png',
});
</script>

<template>
    <main class="w-full flex flex-col justify-between">
        <section>
            <DisplayHero />
        </section>
        <section class="flex-1">
            <USeparator />
            <USkeleton class="size-full flex flex-col items-center justify-center">
                <h1 class="font-bold"><UIcon name="i-lucide-heart" /> Hey, we're still working on this page...</h1>
            </USkeleton>
        </section>
        <SearchAppeal />
    </main>
</template>
