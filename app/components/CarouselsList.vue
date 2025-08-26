<script lang="ts" setup>
import AnimeCarousel from './AnimeCarousel.vue';


const props = defineProps<{ itemsToShow?: number }>();

const genres = ref(await jk.genres.getAnimeGenres('genres').then(res => res.data));
genres.value = genres.value.sort(() => Math.random() - 0.5).slice(0, props.itemsToShow || 3);

</script>

<template>
    <div v-if="genres" class="size-full py-4 flex flex-col">
        <h2 class="text-2xl font-bold mb-4 px-4">Feeling like:</h2>
        <ul class="w-full y-fit flex flex-col gap-4">
            <li v-for="genre in genres" :key="genre.mal_id" class="flex flex-col gap-2 justify-center">
                <UButton variant="link" :to="`/animes?genre=${genre.mal_id}`" trailing-icon="i-lucide-arrow-right" class="hover:underline cursor-pointer w-fit text-md font-semibold ml-4">{{ genre.name }}</UButton>
                <AnimeCarousel :genreId="genre.mal_id" />
            </li>
        </ul>
    </div>
</template>