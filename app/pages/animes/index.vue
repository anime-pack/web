<script lang="ts" setup>
import type { Anime } from '@tutkli/jikan-ts';

let searchQuery = ref<string | null>(null);
searchQuery.value = useRoute().query.q as string;

const animes = ref<Anime[]>([]);

onMounted(async () => {
    if (!searchQuery.value) return;
    const res = await jk.anime.getAnimeSearch({
        q: searchQuery.value,
        sfw: true,
    }).then((res) => res.data);
    if (res && res.length > 0) {
        animes.value = res;
    }
})
</script>

<template>
    <div class="size-full">

        <p class="flex flex-col gap-2">
            <span>Query:</span>
            <span>{{ searchQuery || 'NULL0' }}</span>
        </p>

        <div v-if="animes.length > 0" class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4 p-4 w-full">
            <AnimeCard v-for="anime in animes" :key="anime.mal_id" :anime="anime" />
        </div>
        <div v-else class="mt-4">
            No animes found.
        </div>
    </div>
</template>