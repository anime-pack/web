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
    <main class="w-full flex flex-col">
        <NuxtLink :to="recentPost?.path">
            <UAlert v-if="recentPost" variant="soft" description="Check out the latest updates at the blog!" icon="i-lucide-sparkles" class="rounded-none h-10 items-center" />
        </NuxtLink>
        <section>
            <DisplayHero />
        </section>
        <section class="grow pb-10">
            <CarouselsList />
        </section>
        <SearchAppeal />
    </main>
</template>
