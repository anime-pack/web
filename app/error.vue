<script setup lang="ts">
import type { NuxtError } from '#app'
import * as locales from '@nuxt/ui/locale'

defineProps({
    error: Object as () => NuxtError
})

const { locale } = useI18n()

const lang = computed(() => locales[locale.value].code)
const dir = computed(() => locales[locale.value].dir)

useHead({
    htmlAttrs: {
        lang,
        dir
    }
})

const router = useRouter();
</script>

<template>
    <UApp>
        <NuxtLayout name="default">
            <UContainer as="section"
                class="min-w-full min-h-full sm:p-0 lg:p-0 mx-0 flex flex-col items-center justify-center">
                <h3 class="font-bold text-7xl mb-3">{{ error?.statusCode || "Wait what?" }}</h3>
                <p>{{ error?.statusMessage || "Woops..." }}</p>
                <p>Do you think this is an issue? Contact us via
                    <UButton variant="link" label="Discord" to="/discord" class="p-0 underline underline-offset-2" />.
                </p>
                <div class="flex gap-4">
                    <UButton color="primary" @click="router.back()" size="lg" icon="i-lucide-arrow-left" label="Go back"
                        class="mt-4" />
                    <UButton color="primary" to="/" icon="i-lucide-home" label="Go Home" size="lg" class="mt-4" />
                </div>
            </UContainer>
        </NuxtLayout>
    </UApp>
</template>
