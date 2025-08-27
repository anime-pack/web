<script setup lang="ts">
const router = useRouter();
const { path } = useRoute();
const { data: post } = await useAsyncData('blog-post', () =>
    queryCollection('blog').where('path', '=', path).first()
);
useSeoMeta(post.value?.seo || {})
</script>

<template>
    <article v-if="post" class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative">
        <UButton variant="soft" aria-label="return button" class="absolute -left-6 top-10 z-1 size-10 items-center"
            @click="router.back()">
            <UIcon name="i-lucide-arrow-left" class="size-5" />
        </UButton>

        <header class="mb-12">
            <div class="flex flex-col space-y-4">
                <h1
                    class="text-4xl sm:text-5xl h-14 font-bold bg-gradient-to-r from-primary/80 to-primary bg-clip-text text-transparent">
                    {{ post.title }}
                    <UPopover mode="hover" arrow :open-delay="1000" :close-delay="200"
                        :content="{ side: 'right', align: 'center' }" :ui="{ content: 'size-fit p-1' }">
                        <!-- @vue-ignore -->
                        <UIcon name="i-lucide-link"
                            class="text-primary/40 hover:text-primary cursor-pointer size-5 sm:size-6 ml-2 inline-block transition-colors"
                            @click="copyUrl()" />

                        <template #content>
                            Copy link
                        </template>
                    </UPopover>
                </h1>

                <div class="flex items-center gap-3 text-muted">
                    <div v-if="post.author" class="flex items-center gap-2">
                        <UIcon name="i-lucide-user" class="size-4" />
                        <span class="text-primary/90 font-medium">@{{ post.author }}</span>
                    </div>
                    <div v-if="post.date" class="flex items-center gap-2">
                        <UIcon name="i-lucide-calendar" class="size-4" />
                        <span>{{ post.date }} / {{ post.hour }}</span>
                    </div>
                </div>

                <p v-if="post.description" class="text-lg sm:text-xl text-muted/90 max-w-3xl leading-relaxed">
                    {{ post.description }}
                </p>
                <span>
                    <UBadge v-for="tag in post.tags" :key="tag" size="md" variant="soft" class="hover:scale-105 transition-transform cursor-pointer not-first:ml-2">
                        #{{ tag }}
                    </UBadge>
                </span>
            </div>
        </header>

        <USeparator />

        <section class="max-w-none mt-8">
            <ContentRenderer :value="post" :prose="true" />
        </section>

        <footer class="mt-12 pt-6 border-t border-default">
            <p class="text-sm text-muted text-center">
                Did you like this post? Check our
                <UButton variant="link" to="/blog" class="text-primary">
                    blog
                    <UIcon name="i-lucide-arrow-right" class="size-4" />
                </UButton>
                for more updates.
            </p>
        </footer>
    </article>
</template>