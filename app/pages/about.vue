<script lang="ts" setup>
const features = [
  {
    icon: 'i-heroicons-film',
    title: 'Catálogo Extenso',
    description: 'Explore nossa vasta coleção de animes, desde clássicos até os lançamentos mais recentes 🎬'
  },
  {
    icon: 'i-heroicons-heart',
    title: 'Lista Personalizada',
    description: 'Crie sua lista de favoritos e acompanhe seus animes preferidos ❤️'
  },
  {
    icon: 'i-heroicons-star',
    title: 'Avaliações',
    description: 'Compartilhe suas opiniões e veja as avaliações da comunidade ⭐'
  }
];
</script>

<template>
  <main class="flex flex-col w-full flex-1 py-6 gap-8 mb-20">
    <div class="text-center px-4">
      <h1 class="text-4xl font-bold mb-4">Sobre o AnimePack 🎯</h1>
      <p class="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
        Sua plataforma para descobrir, acompanhar e gerenciar seus animes favoritos
      </p>
    </div>

    <USeparator />

    <UContainer>
      <UCard class="mt-5">
        <template #header>
          <div class="flex items-center gap-2">
            <UIcon name="i-heroicons-information-circle" class="text-primary-500 size-5" />
            <h2 class="text-xl font-semibold">Nossa Missão</h2>
          </div>
        </template>
        <p class="text-gray-600 dark:text-gray-300">
          Facilitar a descoberta e o acompanhamento de animes, fornecendo informações precisas e atualizadas para todos
          os fãs
          🚀<br />
          Ainda estamos em desenvolvimento, mas nossa missão é clara: tornar o AnimePack a melhor plataforma para amantes de
          anime em todo o mundo.<br />
          Junte-se a nós nessa jornada! 💝
        </p>
      </UCard>

      <div class="grid md:grid-cols-3 gap-6 mt-8">
        <UCard v-for="feature in features" :key="feature.title" class="text-center">
          <UIcon :name="feature.icon" class="text-4xl text-primary-500 mb-4" />
          <h3 class="text-lg font-semibold mb-2">{{ feature.title }}</h3>
          <p class="text-gray-600 dark:text-gray-300">{{ feature.description }}</p>
        </UCard>
      </div>

      <div class="mt-8">
        <UCard>
          <template #header>
            <div class="flex items-center gap-2">
              <UIcon name="i-heroicons-code-bracket" class="text-primary-500 size-5" />
              <h2 class="text-xl font-semibold">Tecnologias Utilizadas</h2>
            </div>
          </template>
          <div class="flex flex-wrap gap-4 justify-center">
            <UButton color="neutral" variant="soft">Bun</UButton>
            <UButton color="success" variant="soft">Vue.js</UButton>
            <UButton color="success" variant="soft">Nuxt 4</UButton>
            <UButton color="info" variant="soft">TypeScript</UButton>
            <UButton color="info" variant="soft">Tailwind CSS</UButton>
          </div>
        </UCard>
      </div>
    </UContainer>
  </main>
</template>