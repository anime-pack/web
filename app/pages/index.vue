<script setup lang="ts">

function date3DaysAgo(): string {
    const date = new Date();
    date.setDate(date.getDate() - 2);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};

const { data: recentPost } = await useAsyncData('blog-posts', () => 
    queryCollection('blog').order('date', 'DESC').where('date', '>', date3DaysAgo()).first()
);

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
        <NuxtLink :to="recentPost?.path">
            <UAlert v-if="recentPost" variant="soft" description="Check out the latest updates at the blog!" icon="i-lucide-heart" class="rounded-none" />
        </NuxtLink>
        <section>
            <DisplayHero />
        </section>
        <section class="flex-1">
            <USeparator />
            <USkeleton class="size-full flex flex-col items-center justify-center">
                <h1 class="font-bold">❤️‍🩹 Hey, we're still working on this page...</h1>
            </USkeleton>
        </section>
        <SearchAppeal />
    </main>
</template>
