<script setup lang="ts">
import type { BlogCollectionItem } from '@nuxt/content';

const loading = ref(true);
const router = useRouter();
const toast = useToast();

const { data: posts } = await useAsyncData('blog-posts', () =>
    queryCollection('blog').order('date', 'DESC').all()
);

const mostRecentPost = ref<BlogCollectionItem | undefined>(undefined);

onMounted(async () => {
    try {
        mostRecentPost.value = posts?.value?.shift();
    } catch (error) {
        console.error(error);
        toast.add({
            title: 'Error',
            description: 'Failed to load blog posts. Please try again or notify this on the Discord.',
            type: 'background',
            color: 'warning',
            duration: 5000,
            icon: 'i-lucide-alert-triangle',
        });
        router.back();
    } finally {
        loading.value = false;
    };
});
</script>

<template>
    <LoadingBlock v-if="loading" />
    <main v-else class="flex flex-col py-8 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col mb-12">
            <h1
                class="text-4xl h-14 sm:text-5xl font-bold bg-gradient-to-r from-primary/80 to-primary bg-clip-text text-transparent">
                The AnimePack Blog</h1>
            <p class="text-muted mt-2 text-lg">See whats new and learn about our goals.</p>
        </div>
        <USeparator />
        <section v-if="posts" class="mt-8 space-y-12">
            <!-- Featured Post -->
            <!-- @vue-ignore -->
            <NuxtLink v-if="mostRecentPost" :to="`/blog/${slugfy(mostRecentPost.title)}`">
                <UCard
                    class="transform transition-all duration-300 hover:scale-[1.02] bg-gradient-to-br from-background to-accented/5">
                    <template #header>
                        <span class="text-xs font-medium text-primary/80 mb-2 inline-block">FEATURED POST</span>
                        <h2 class="text-3xl font-bold tracking-tight">{{ mostRecentPost.title }}</h2>
                    </template>

                    <template #default>
                        <p class="text-muted/90 mt-4 text-lg leading-relaxed">
                            {{ mostRecentPost.description }}
                        </p>
                    </template>

                    <template #footer>
                        <div class="flex items-center justify-between mt-6">
                            <p class="flex items-center">
                                <span class="text-primary/90 font-medium">{{ mostRecentPost.author }}</span>
                            </p>
                            <UButton color="primary" variant="ghost" trailing-icon="i-lucide-arrow-right">
                                Read more
                            </UButton>
                        </div>
                    </template>
                </UCard>
            </NuxtLink>

            <!-- Other Posts -->
            <div v-if="posts" class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                <!-- @vue-ignore -->
                <NuxtLink v-for="post in posts" :key="post.id" :to="`/blog/${slugfy(post?.title)}`">
                    <UCard
                        class="h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 bg-gradient-to-br from-background to-accented/5">
                        <template #header>
                            <h2 class="text-xl font-bold tracking-tight line-clamp-2">{{ post?.title }}</h2>
                        </template>

                        <template #default>
                            <p class="text-muted/80 mt-3 line-clamp-3">
                                {{ post?.description }}
                            </p>
                        </template>

                        <template #footer>
                            <div class="flex items-center justify-between mt-4">
                                <p class="text-sm">
                                    By <span class="text-primary font-medium">{{ post.author }}</span>
                                </p>
                                <UIcon name="i-lucide-arrow-right" class="text-primary/70" />
                            </div>
                        </template>
                    </UCard>
                </NuxtLink>
            </div>
        </section>

        <UContainer as="section" v-else
            class="min-w-full min-h-full sm:p-0 lg:p-0 mx-0 flex flex-col items-center justify-center">
            <h3 class="font-bold text-7xl mb-3">Uh, were are the posts?</h3>
            <p>We've found no posts.</p>
            <p>Do you think this is an issue? Contact us via
                <UButton variant="link" label="Discord" to="/discord" class="p-0 underline underline-offset-2" />.
            </p>
            <div>
                <UButton color="primary" @click="router.back()" size="lg" icon="i-lucide-arrow-left" label="Go back"
                    class="mt-4" />
            </div>
        </UContainer>
    </main>
</template>