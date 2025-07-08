<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'


const { locales, setLocale, locale } = useI18n()

const items = ref<DropdownMenuItem[][]>([
  [
    {
      label: 'Language',  //* look on setting this label to a translation
      icon: 'i-gis-globe-poi',
      type: 'label',
    }
  ],
  [
    ...locales.value.map(locale => ({
      label: locale.name,
      icon: `i-flagpack-${locales.value.find(l => l.code === locale.code)?.flag}`,
      onSelect: () => setLocale(locale.code),
    }))
  ]
])
</script>

<template>
  <UDropdownMenu :items="items" :ui="{
    content: 'w-48'
  }">
    <UButton :icon="`i-flagpack-${locales.find(l => l.code === locale)?.flag}`" :label="locales.find(l => l.code == locale)?.code.slice(0,2)" color="neutral" variant="outline" />
  </UDropdownMenu>
</template>
