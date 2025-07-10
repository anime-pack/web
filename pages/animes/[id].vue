<script lang="ts" setup>
import type { Anime, RecommendationEntry } from '@tutkli/jikan-ts';

const anime = ref<Anime | null>(null);
const recomendations = ref<RecommendationEntry[]>([]);
const isLoading = ref(true);
const id = useRoute().params.id as string;

async function fetchAnime() {
    return await jk.anime.getAnimeById(Number(id)).then(res => res.data);
};

async function fetchRecommendations() {
    return await jk.anime.getAnimeRecommendations(Number(id)).then(res => res.data.map(item => {
        return item.entry;
    }));
}

onMounted(async () => {
    isLoading.value = true;
    try {
        anime.value = await fetchAnime();
        recomendations.value = await fetchRecommendations();
    } catch (error) {
        console.error('Error fetching anime:', error);
        anime.value = null;
    } finally {
        isLoading.value = false;
    };
})
</script>

<template>
    <div class="relative">
        <UButton variant="ghost" class="absolute left-6 top-6 z-50 size-10 items-center" @click="useRouter().back()">
            <UIcon name="i-lucide-arrow-left" class="size-5" />
        </UButton>

        <div v-if="isLoading" class="flex flex-grow items-center justify-center">
            <div class="h-8 w-8 animate-spin rounded-full border-b-2 border-primary"></div>
        </div>

        <div v-else-if="anime" class="flex flex-col">
            <!-- Hero Section com Background -->
            <section class="relative h-[50vh] w-full">
                <!-- Background Image -->
                <div class="absolute inset-0">
                    <img :src="anime.images.webp?.large_image_url || anime.images.jpg.large_image_url"
                        :alt="anime.title" class="h-full w-full object-cover object-top" />
                    <!-- Gradientes atualizados -->
                    <div
                        class="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/95 via-20% to-transparent" />
                    <div class="absolute inset-0 bg-gradient-to-r from-neutral-900/20 to-transparent" />
                    <div class="absolute inset-0 bg-gradient-to-b from-neutral-900/50 to-transparent" />
                </div>

                <!-- Hero Content -->
                <div class="relative h-full flex flex-col justify-end pb-12 px-6 sm:px-12">
                    <header class="flex flex-col gap-4 max-w-5xl translate-y-8">
                        <!-- Title & Japanese Title -->
                        <div class="flex flex-col gap-2">
                            <h1 class="text-4xl font-bold">{{ anime.title }}</h1>
                            <span class="text-lg text-muted">({{ anime.title_japanese }})</span>
                        </div>

                        <!-- Quick Info -->
                        <div class="flex flex-wrap gap-4 text-sm">
                            <div class="flex items-center gap-2">
                                <UIcon name="i-lucide-star" class="size-4" />
                                <span>{{ anime.score }} ({{ anime.scored_by }} votos)</span>
                            </div>
                            <div class="flex items-center gap-2">
                                <UIcon name="i-lucide-calendar" class="size-4" />
                                <span>{{ anime.year || anime.aired.prop.from.year || 'unavailable' }}</span>
                            </div>
                            <div class="flex items-center gap-2">
                                <UIcon name="i-lucide-clock" class="size-4" />
                                <span>{{ anime.duration }}</span>
                            </div>
                            <div class="flex items-center gap-2">
                                <UIcon name="i-lucide-users" class="size-4" />
                                <span>{{ anime.members }} members</span>
                            </div>
                            <div class="flex items-center gap-2">
                                <UIcon name="i-lucide-activity" class="size-4" />
                                <span>{{ anime.status }}</span>
                            </div>
                        </div>

                        <!-- Actions -->
                        <!-- <div class="flex gap-4">
                            <UButton icon="i-lucide-play-circle" label="Watch" size="lg" class="gap-2" />
                            <UButton icon="i-lucide-heart" size="lg" variant="soft" class="gap-2" />
                            <UButton icon="i-lucide-circle-plus" size="lg" variant="soft" class="gap-2" />
                        </div> -->
                    </header>
                </div>
            </section>

            <USeparator />

            <!-- Synopsis etc -->
            <section class="mt-5">
                <UContainer class="">
                    <UAccordion :items="[{
                        label: 'Synopsis',
                        icon: 'i-lucide-book-text',
                        content: anime.synopsis || 'No synopsis available.',
                    }]" />
                </UContainer>
            </section>
        </div>

        <div v-else class="flex h-full items-center justify-center">
            <p class="text-muted-foreground">Anime not found...</p>
        </div>
    </div>
</template>
