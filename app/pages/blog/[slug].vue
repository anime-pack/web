<script setup lang="ts">
const router = useRouter();
const { path } = useRoute();
const { data: post } = await useAsyncData('blog-post', () =>
    queryCollection('blog').where('path', '=', path).first()
);
</script>

<template>
    <article v-if="post" class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative">
        <UButton variant="soft" class="absolute -left-6 top-10 z-1 size-10 items-center" @click="router.back()">
            <UIcon name="i-lucide-arrow-left" class="size-5" />
        </UButton>

        <header class="mb-12">
            <div class="flex flex-col space-y-4">
                <h1
                    class="text-4xl sm:text-5xl h-14 font-bold bg-gradient-to-r from-primary/80 to-primary bg-clip-text text-transparent">
                    {{ post.title }}
                    <!-- @vue-ignore -->
                    <UIcon name="i-lucide-link"
                        class="text-primary/40 hover:text-primary cursor-pointer size-5 sm:size-6 ml-2 inline-block transition-colors"
                        @click="copyUrl()" />
                </h1>

                <div class="flex items-center gap-3 text-muted">
                    <div v-if="post.author" class="flex items-center gap-2">
                        <UIcon name="i-lucide-user" class="size-4" />
                        <span class="text-primary/90 font-medium">{{ post.author }}</span>
                    </div>
                    <div v-if="post.date" class="flex items-center gap-2">
                        <UIcon name="i-lucide-calendar" class="size-4" />
                        <span>{{ post.date }}</span>
                    </div>
                </div>

                <p v-if="post.description" class="text-lg sm:text-xl text-muted/90 max-w-3xl leading-relaxed">
                    {{ post.description }}
                </p>
            </div>
        </header>

        <USeparator />

        <section class="prose prose-lg dark:prose-invert max-w-none mt-8">
            <ContentRenderer :value="post" />
        </section>

        <footer class="mt-12 pt-6 border-t border-default">
            <p class="text-sm text-muted text-center">
                Gostou deste post? Confira nosso
                <UButton variant="link" to="/blog" class="text-primary">
                    blog
                    <UIcon name="i-lucide-arrow-right" class="size-4" />
                </UButton>
                para mais atualizações.
            </p>
        </footer>
    </article>
</template>