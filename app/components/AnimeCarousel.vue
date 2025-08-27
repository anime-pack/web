<script lang="ts" setup>
import type { Anime } from '@tutkli/jikan-ts';

const props = defineProps<{
    genreId?: number;
    animes?: Anime[];
}>();

const items = ref<Anime[] | undefined>([]);
const loading = ref(true);

onMounted(async () => {
    try {
        if (props.animes && props.animes.length > 0) {
            items.value = props.animes;
        } else if (props.genreId) {
            const response = await jk.anime.getAnimeSearch({ genres: props.genreId.toString(), order_by: 'score', sort: 'desc', limit: 16 });
            items.value = response.data;
        } else {
            items.value = [];
        };
    } catch (error) {
        console.error(error);
    } finally {
        loading.value = false;
    };
});
</script>

<template>
    <UCarousel v-if="loading" :items="Array.from({ length: 10 }, (_, i) => i)" drag-free
        :ui="{ item: 'lg:basis-1/7 md:basis-1/5 sm:basis-1/4 first:ml-6', container: 'mr-6' }" class="w-full select-none">
        <USkeleton class="aspect-9/13 grow max-h-[300px] max-w-[300px] rounded first:ml-6" />
    </UCarousel>
    <UCarousel v-else="items" v-slot="{ item }" :items="items" drag-free
        :ui="{ item: 'lg:basis-1/7 md:basis-1/5 sm:basis-1/4 first:ml-6', container: 'mr-6' }" class="w-full select-none overflow-visible">
        <UPopover :popper="{ offset: 0 }" mode="hover" :open-delay="1000" :close-delay="200"
            :content="{ side: 'right' }">
            <AnimeCard :anime="item" class="max-h-[300px]" />

            <template #content>
                <div class="w-[300px] max-h-[300px] p-4">
                    <h3 class="text-lg font-bold mb-3 flex items-center gap-2">
                        <UIcon name="tv-2" class="w-5 h-5 text-primary-400" />
                        {{ item.title }}
                    </h3>
                    <p class="text-sm mb-4 text-gray-300">{{ item.synopsis?.substring(0, 150) }}...</p>
                    <div class="text-sm space-y-2 text-gray-200">
                        <p class="flex items-center gap-2">
                            <UIcon name="i-lucide-star" class="size-4 text-yellow-400 fill-yellow-400" />
                            <span>Score: <span class="text-primary-400">{{ item.score }}/10</span></span>
                        </p>
                        <p class="flex items-center gap-2">
                            <UIcon name="i-lucide-film" class="size-4 text-primary-400" />
                            <span>Episodes: <span class="text-primary-400">{{ item.episodes }}</span></span>
                        </p>
                        <p class="flex items-center gap-2">
                            <UIcon name="i-lucide-radio" class="size-4 text-emerald-400" />
                            <span>Status: <span class="text-emerald-400">{{ item.status }}</span></span>
                        </p>
                    </div>
                </div>
            </template>
        </UPopover>
    </UCarousel>
</template>
