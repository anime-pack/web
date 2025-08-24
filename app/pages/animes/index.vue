<script lang="ts" setup>
import type { Anime } from '@tutkli/jikan-ts';

let searchTerm = ref(useRoute().query.q as string || '');
const animes = ref<Anime[]>([]);
const router = useRouter();
const loading = ref(false);

function fetchSearchResults() {
    if (!searchTerm.value.trim()) return;
    jk.anime.getAnimeSearch({
        q: searchTerm.value,
        sfw: true,
    }).then((res) => {
        if (res.data && res.data.length > 0) {
            animes.value = res.data;
        } else {
            animes.value = [];
        }
    });
}

function handleSearch(e: any) {
    loading.value = true;
    try {
        if (e.key !== 'Enter') return;
        if (!isNaN(Number(searchTerm.value))) {
            router.push(`/animes/${searchTerm.value}`);
            return;
        };
        if (searchTerm.value.trim() && searchTerm.value.length > 2) {
            router.push(`/animes?q=${searchTerm.value.trim()}`);
            fetchSearchResults();
        };
    } catch (e) {
        console.error(e); //* Handle error properly later
    } finally {
        loading.value = false;
    };
};

onMounted(async () => {
    if (!searchTerm.value) {
        animes.value = await jk.seasons.getSeasonNow().then(res => res.data);
    } else fetchSearchResults();    
});
</script>

<template>
    <main class="size-full min-h-full grow flex flex-col">

        <div class="flex justify-center my-4">
            <UInput v-model="searchTerm" placeholder="Search animes..." icon="i-lucide-search" size="lg"
                @keydown="(e: any) => handleSearch(e)" class="w-110">
                <template v-if="searchTerm?.length" #trailing>
                    <UButton color="neutral" variant="link" size="sm" icon="i-lucide-x" aria-label="Clear input"
                        @click="searchTerm = ''" />
                </template>
            </UInput>
        </div>
        <USeparator />

        <section v-if="animes.length > 0" class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4 p-4 w-full">
            <AnimeCard v-for="anime in animes" :key="anime.mal_id" :anime="anime" />
        </section>

        <UContainer as="section" v-else-if="loading"
            class="min-w-full min-h-full sm:p-0 lg:p-0 mx-0 flex items-center justify-center">
            <USkeleton class="w-full h-full rounded-lg flex flex-col justify-center items-center">
                <UIcon name="i-lucide-loader-circle" class="size-10 animate-spin text-primary mb-2" />
                <h3 class="font-bold">We are preparing this, just for you. ❤️</h3>
            </USkeleton>
        </UContainer>

        <UContainer as="section" v-else
            class="min-w-full min-h-full mt-7 sm:p-0 lg:p-0 mx-0 flex flex-1 flex-col items-center justify-center">
            <h3 class="font-bold text-muted text-7xl mb-3">Oops...</h3>
            <p>We could not find a anime matching you search, maybe remove some filters?</p>
            <p>Do you think this is an issue? Contact us via
                <UButton variant="link" label="Discord" to="/discord" class="p-0 underline underline-offset-2" />.
            </p>
        </UContainer as="section">
    </main>
</template>