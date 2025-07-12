<script lang="ts" setup>
import type { Anime, RecommendationEntry } from '@tutkli/jikan-ts';

const anime = ref<Anime | null>(null);
const recomendations = ref<RecommendationEntry[]>([]);
const isLoading = ref(true);
const id = useRoute().params.id as string;

async function fetchAnime() {
    // await new Promise(resolve => setTimeout(resolve, 5000)); //? Simulate loading delay
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
    <div class="relative flex flex-grow">

        <UContainer as="section" v-if="isLoading"
            class="min-w-full min-h-full sm:p-0 lg:p-0 mx-0 flex items-center justify-center">
            <USkeleton class="w-full h-full rounded-lg flex flex-col justify-center items-center">
                <UIcon name="i-lucide-loader-circle" class="size-10 animate-spin text-primary mb-2" />
                <h3 class="font-bold">We are preparing this, just for you. ❤️</h3>
            </USkeleton>
        </UContainer>

        <div v-else-if="anime" class="flex flex-col w-full">
            <UButton variant="ghost" class="absolute left-6 top-6 z-1 size-10 items-center"
                @click="useRouter().back()">
                <UIcon name="i-lucide-arrow-left" class="size-5" />
            </UButton>
            
            <!-- Hero Section com Background -->
            <section class="relative h-[37vh] w-full">
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
                    <section class="flex flex-col gap-4 max-w-5xl translate-y-8">
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
                    </section>
                </div>
            </section>

            <USeparator />

            <!-- Synopsis etc -->
            <section class="flex flex-row mt-5">
                <UContainer class="">
                    <h2 class="text-2xl font-bold mb-4">Information</h2>
                    <div class="flex flex-col text-md gap-2">
                        <span>
                            <strong>Type:</strong> {{ anime.type }}
                        </span>
                        <span>
                            <strong>Episodes:</strong> {{ anime.episodes || 'N/A' }}
                        </span>
                        <span>
                            <strong>Rating:</strong> {{ anime.rating || 'N/A' }}
                        </span>
                        <span>
                            <strong>Genres:</strong> {{anime.genres.map(g => g.name).join(', ') || 'N/A'}}
                        </span>
                        <span>
                            <strong>Producers:</strong> {{anime.producers.map(p => p.name).join(', ') || 'N/A'}}
                        </span>
                        <span>
                            <strong>Studios:</strong> {{anime.studios.map(s => s.name).join(', ') || 'N/A'}}
                        </span>
                    </div>
                </UContainer>
                <UContainer class="">
                    <UAccordion default-value="0" :items="[{
                        label: 'Synopsis',
                        icon: 'i-lucide-book-text',
                        content: anime.synopsis || 'No synopsis available.',
                    }]" />
                </UContainer>
            </section>
        </div>

        <UContainer as="section" v-else
            class="min-w-full min-h-full sm:p-0 lg:p-0 mx-0 flex flex-col items-center justify-center">
            <h3 class="font-bold text-7xl mb-3">404?</h3>
            <p>The anime of id <span class="text-primary font-bold">{{ id }}</span> could not be found.</p>
            <p>Do you think this is an issue? Contact us via
                <UButton variant="link" label="Discord" to="/discord" class="p-0 underline underline-offset-2" />.
            </p>
            <div>
                <UButton color="primary" @click="useRouter().back()" size="lg" icon="i-lucide-arrow-left"
                    label="Go back" class="mt-4" />
            </div>
        </UContainer as="section">
    </div>
</template>0
