<script lang="ts" setup>

const router = useRouter();
const searchTerm = ref('');

function handleSearch(e: any) {
    if (e.key !== 'Enter') return;
    console.log('in func')
    if (!isNaN(Number(searchTerm.value))) {
        console.log('número');
        router.push(`/animes/${searchTerm.value}`);
        return;
    };
    if (searchTerm.value.trim() && searchTerm.value.length > 2) {
        router.push(`/animes?q=${searchTerm.value.trim()}`);
    };
};
</script>

<template>
    <UInput v-model="searchTerm" placeholder="Try searching for it" icon="i-lucide-search" size="lg"
        @keydown="(e: any) => handleSearch(e)" class="w-110">
        <template v-if="searchTerm?.length" #trailing>
            <UButton color="neutral" variant="link" size="sm" icon="i-lucide-x" aria-label="Clear input"
                @click="searchTerm = ''" />
        </template>
    </UInput>
</template>