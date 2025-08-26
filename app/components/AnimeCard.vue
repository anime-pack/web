<script lang="ts" setup>
import type { Anime } from '@tutkli/jikan-ts';


const props = defineProps<{
    anime: Anime | undefined;
    class?: string;
}>();
</script>

<template>
    <!-- @vue-ignore -->
    <UCard :ui="{ body: 'p-0 sm:p-0 size-full' }" :class="cn('aspect-9/13 max-h-[450px] max-w-[300px] select-none', props.class)">
        <NuxtLink v-if="anime" :to="`/animes/${anime.mal_id}`" aschild class="size-full grow relative p-0">
            <NuxtImg
                :src="anime.images.jpg.image_url"
                :alt="anime.title"
                class="size-full object-cover rounded relative top-0 left-0"
                :width="300"
                :height="450"
                :lazy="true"
            />
            <div class="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/80 via-black/60 to-transparent text-white p-2 flex flex-col justify-end">
                <h2 class="font-bold truncate">{{ anime.title }}</h2>
                <ul class="mt-1 space-y-0.5 flex flex-row gap-2">
                    <li class="text-sm"><UBadge variant="soft" ><UIcon name="i-lucide-book-marked" />{{ anime.type }}</UBadge></li>
                    <li class="text-sm"><UBadge variant="soft" ><UIcon name="i-lucide-tv-minimal-play" />{{ anime.episodes || 'N/A' }}</UBadge></li>
                    <li class="text-sm"><UBadge variant="soft" ><UIcon name="i-lucide-star" />{{ anime.score || 'N/A' }}</UBadge></li>
                </ul>
            </div>
        </NuxtLink>
        <div v-else class="size-full flex items-center justify-center">
            No Anime Data
        </div>
    </UCard>
</template>