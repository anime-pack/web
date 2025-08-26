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
    <UCarousel v-if="items" v-slot="{ item }" :items="items" drag-free :ui="{ item: 'basis-1/8 first:ml-6', container: 'mr-6' }"
        class="w-full">
        <AnimeCard :anime="item" class="max-h-[300px]" />
    </UCarousel>
</template>