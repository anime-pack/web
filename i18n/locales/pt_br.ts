export default defineI18nLocale(async (locale) => {
    return {
        common: {
            appName: 'Anime Pack',
            welcome: 'Bem-vindo',
            // description: 'Your ultimate destination for discovering, organizing, and enjoying anime. Dive into a world of endless entertainment, personalized just for you.',
            // about: {
            //     title: 'What is Anime Pack?',
            //     p1: "Anime Pack is envisioned as a comprehensive MyAnimeList (MAL) client, with a strong emphasis on providing a rich desktop application experience. It's designed not just for browsing anime and manga information, but to be a vibrant social hub for enthusiasts of anime, manga, manhwa, and the broader otaku culture.",
            //     p2: 'Our goal is to create a dedicated space where fans can connect, discuss their favorite series, and share their passion. Anime Pack aims to bridge the gap between content discovery and community interaction, making it easier than ever to dive deep into the anime niche.',
            //     p3: "You'll be able to connect your MyAnimeList account seamlessly, showcase your personalized profile, track your progress, and discover new titles. And this is just the beginning – we have a lot more exciting features planned for future updates to make Anime Pack your ultimate companion for all things about anime!",
            // },
        },

        header: {
            languageSwitcher: {
                label: 'Idioma',
                tooltip: 'Escolha um idioma',
            },
        },

        footer: {
            copyright: `© ${new Date().getFullYear()} Anime Pack. Todos os direitos reservados.`,
            communityLove: 'Com ❤️ para a comunidade',
            legalNotice: `Anime Pack é um projeto independente e não é afiliado, nem endossado por, MyAnimeList ou Discord.`,
        },
    };
});
