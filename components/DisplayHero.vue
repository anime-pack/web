<script lang="ts" setup>
import type { Anime } from '@tutkli/jikan-ts';

const animes = ref<Anime[]>([]);

async function fetchAnimes() {
  animes.value = await jk.seasons.getSeasonNow({ limit: 10 }).then(season => season.data);
}
onMounted(fetchAnimes);
</script>

<template>
  <UContainer class="mx-0 min-w-full max-h-[45vh] overflow-hidden select-none sm:p-0 lg:p-0">
    <div class="relative w-full">
      <UCarousel v-if="animes.length" orientation="vertical" :items="animes" class="w-full max-h-[40vh]"
        :ui="{ container: 'max-h-[40vh]', item: 'max-h-[40vh] min-w-[100%] rounded-none' }" as="section"
        :autoplay="{ delay: 7000 }" :loop="true">
        <template #default="{ item }">
          <div
            class="relative flex items-center h-[40vh] w-full bg-cover bg-center bg-no-repeat before:absolute before:inset-0 before:bg-gradient-to-t before:from-black/60 before:to-transparent before:z-0"
            :style="{
              backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.85) 60%, rgba(0,0,0,0.2)), url(${item.images?.jpg?.large_image_url || item.images?.jpg?.image_url})`
            }">
            <div class="relative z-10 p-8 max-w-7xl">
              <h2 class="text-3xl md:text-5xl font-bold text-white mb-1 drop-shadow-lg line-clamp-1">
                {{ item.title }}
              </h2>
              <ul v-if="item.genres.length" class="flex flex-wrap mb-4">
                <li v-for="genre in item.genres.slice(0,4)" :key="genre.name" class="inline-block mr-2">
                  <UBadge variant="soft">{{ genre.name }}</UBadge>
                </li>
              </ul>
              <p class="text-white text-opacity-90 mb-6 line-clamp-2">
                {{ item.synopsis }}
              </p>
              <div class="flex gap-3 mb-3">
                <UButton color="primary" size="lg" icon="i-heroicons-play" label="Assistir" />
                <UButton color="info" size="lg" icon="i-heroicons-information-circle" label="Detalhes" variant="soft" />
                <UButton color="error" size="lg" icon="i-lucide-heart" variant="soft" />
              </div>
              <div class="flex gap-2">
                <UBadge variant="soft">{{ item.type }}</UBadge>
                <UBadge variant="soft">{{ item.year || item.aired.prop.from.year }}</UBadge>
                <UBadge variant="soft">{{ item.episodes }} eps</UBadge>
              </div>
            </div>
            <img v-if="item.images?.jpg?.large_image_url" :src="item.images.jpg.large_image_url" alt="Poster"
              class="hidden md:block absolute right-8 bottom-8 w-40 h-56 object-cover rounded-lg shadow-lg border-4 border-white/10" />
          </div>
        </template>
      </UCarousel>
      <div v-else class="flex items-center justify-center h-[45vh]">
        <USkeleton class="w-full h-full rounded-lg" />
      </div>
    </div>
  </UContainer>
</template>
