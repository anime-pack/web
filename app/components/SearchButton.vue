<script lang="ts" setup>

const searchTerm = ref('');
const modalOpen = ref(false);

const animes = ref([] as Array<{ id: number; label: string; suffix: string; to: string }>);

async function updateCompletions(q: string): Promise<void> {
  searchTerm.value = q;
  const data = await animeAutocompleter(searchTerm.value);
  if (data) animes.value = data.map(item => ({
    id: item.mal_id,
    label: item.title,
    suffix: item.alts.join(', '),
    to: `/animes/${item.mal_id}`
  }));
}

const groups = computed(() => [{
  id: 'animes',
  label: searchTerm.value ? `Animes matching “${searchTerm.value}”...` : 'Animes',
  items: animes.value || [],
  ignoreFilter: true
}])

</script>

<template>
  <UModal v-model:open="modalOpen">
    <UButton color="neutral" variant="outline" icon="i-lucide-search" />

    <template #content aria-describedby="undefined" title="Search">
      <UCommandPalette autofocus :multiple="false" v-model:search-term="searchTerm" :groups="groups"
        @update:search-term="(q) => updateCompletions(q)" @update:model-value="modalOpen = false" placeholder="Search animes..."
        class="h-80" />
    </template>
  </UModal>
</template>
