// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-05-15',
    devtools: { enabled: true },
    modules: [
      '@nuxt/ui',
      '@nuxt/image',
      '@nuxtjs/i18n',
    ],
    css: ['./assets/css/main.css'],
    i18n: {
        locales: [
            {
                code: 'en',
                name: 'English',
            },
            // {
            //     code: 'pt-BR',
            //     name: 'Português',
            // },
        ],
        defaultLocale: 'en',
    },
});