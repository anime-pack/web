// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-05-15',
    devtools: { enabled: true },
    app: {
        head: {
            title: 'Anime Pack',
        },
    },
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
            //* Look for solution of pt-BR locale not working
            // {
            //     code: 'pt-BR',
            //     name: 'Português',
            // },
        ],
        defaultLocale: 'en',
        strategy: 'no_prefix',
    },
});