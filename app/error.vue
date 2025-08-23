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
</script>

<template>
    <UApp>
        <NuxtLayout name="default">
            <div
                class="w-full flex flex-col items-center justify-center gap-3 mx-0 flex-grow text-center bg-gradient-to-t from-primary from-10% to-transparent to-35%">
                <UContainer class="flex flex-col items-center justify-center">
                    <h1 class="font-bold w-full h-fit text-9xl">{{ error?.statusCode || "Wait what?" }}</h1>
                    <p class="text-muted mt-3">{{ error?.statusMessage || "Woops..." }}</p>
                </UContainer>
                <UContainer class="w-full h-fit gap-3 flex justify-center">
                    <UButton @click="useRouter().back()" variant="outline" label="Go Back" />
                    <UButton to="/" variant="outline" label="Go Home" />
                </UContainer>
            </div>
        </NuxtLayout>
    </UApp>
</template>
