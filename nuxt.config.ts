// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-05-15',
    devtools: { enabled: true },
    site: {
        name: 'Anime Pack',
        url: 'animepack.net',
    },
    seo: {
        meta: {
            title: 'Anime Pack',
            description: 'Your ultimate anime companion app for tracking, discovering, and enjoying your favorite anime series.',
            applicationName: 'AnimePack',

            ogTitle: 'Anime Pack',
            ogSiteName: 'AnimePack',
            ogDescription: 'Your ultimate anime companion app for tracking, discovering, and enjoying your favorite anime series.',
            ogType: 'website',
        },
    },
    modules: ['@nuxt/ui', '@nuxt/image', '@nuxtjs/i18n', '@nuxtjs/seo', '@nuxt/content'],
    css: ['./assets/css/main.css'],
    i18n: {
        locales: [
            {
                code: 'en',
                name: 'English',
                file: 'en.ts',
                flag: 'us',
            },
            // {
            //     code: 'pt_br',
            //     name: 'Português',
            //     file: 'pt_br.ts',
            //     flag: 'br',
            // },
        ],
        defaultLocale: 'en',
        strategy: 'no_prefix',
        bundle: {
            optimizeTranslationDirective: false,
        },
    },
});