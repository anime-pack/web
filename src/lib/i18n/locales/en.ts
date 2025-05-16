
// @/lib/i18n/locales/en.ts

const common = {
  appName: "Anime Pack",
  exploreFeatures: "Explore Features",
  joinDiscord: "Join our Discord",
  contributeOnGithub: "Contribute on GitHub",
};

const header = {
  srGitHub: "GitHub",
  srDiscord: "Discord",
  srThemeToggle: "Toggle theme",
  themeLight: "Light",
  themeDark: "Dark",
  themeSystem: "System",
  language: "Language",
  english: "English",
  portugueseBrazil: "Portuguese", // Changed from "Portuguese (Brazil)"
  spanish: "Spanish",
};

const footer = {
  copyright: `© ${new Date().getFullYear()} ${common.appName}. All rights reserved.`,
  legalNotice: `${common.appName} is an independent project and is not affiliated with, nor endorsed by, MyAnimeList or Discord.`,
};

const heroSection = {
  welcomePrefix: "Welcome to ", // Anime Pack (brand name) will be a span
  welcomeSuffix: "",
  subtitle: "Your ultimate destination for discovering, organizing, and enjoying anime. Dive into a world of endless entertainment, personalized just for you.",
};

const aboutSection = {
  title: "What is Anime Pack?",
  p1: `Anime Pack is envisioned as a comprehensive MyAnimeList (MAL) client, with a strong emphasis on providing a rich desktop application experience. It's designed not just for browsing anime and manga information, but to be a vibrant social hub for enthusiasts of anime, manga, manhwa, and the broader otaku culture.`,
  p2: `Our goal is to create a dedicated space where fans can connect, discuss their favorite series, and share their passion. Anime Pack aims to bridge the gap between content discovery and community interaction, making it easier than ever to dive deep into the anime niche.`,
  p3: `You'll be able to connect your MyAnimeList account seamlessly, showcase your personalized profile, track your progress, and discover new titles. And this is just the beginning – we have a lot more exciting features planned for future updates to make Anime Pack your ultimate companion for all things anime!`,
};

const futurePlansSection = {
  nearTermTitle: "What's Coming Next?",
  nearTermSubtitle: "We're constantly working to make Anime Pack even better. Here's a sneak peek at what we're planning for the near future.",
  longTermTitle: "Our Long-Term Vision",
  longTermSubtitle: "Looking further ahead, here are some of the ambitious goals we're excited to tackle.",
  features: {
    vastLibrary: {
      title: "Vast Library Access",
      description: "Explore thousands of anime series and movies, with new titles added regularly to keep your watchlist fresh.",
    },
    personalizedTracking: {
      title: "Personalized Tracking",
      description: "Effortlessly track watched episodes, manage your watchlist, and get personalized recommendations.",
    },
    communityHub: {
      title: "Community Hub",
      description: "Connect with fellow fans, join discussions, share reviews, and discover hidden gems together.",
    },
    releaseNotifications: {
      title: "Release Notifications",
      description: "Stay updated with notifications for new episode releases of your favorite animes and never miss out.",
    },
    customizableProfiles: {
      title: "Customizable Profiles",
      description: "Personalize your user profile with unique themes, badges, and showcase your favorite anime achievements.",
    },
    communityRecommendations: {
      title: "Community Recommendations",
      description: "Discover what's hot! Get recommendations based on trending anime and discussions within the Anime Pack community.",
    },
    advancedFilters: {
      title: "Advanced Filters",
      description: "Quickly find exactly what you're looking for with powerful search and intuitive filtering options by genre, year, and more.",
    },
    advancedGenreTagging: {
      title: "Advanced Genre Tagging",
      description: "Discover niche genres and explore anime with a highly detailed and community-curated tagging system.",
    },
    nativeMobileApps: {
      title: "Native Mobile Apps",
      description: "Enjoy Anime Pack on the go with dedicated iOS and Android applications for a seamless mobile experience.",
    },
    socialFeatures: {
      title: "Social Features",
      description: "Connect with friends, share lists, and enjoy integrated Discord features for seamless community interaction.",
    },
  }
};

const featureShowcase = {
  title: "Help Build Anime Pack!",
  description: `Anime Pack is an open-source project, and we welcome contributors of all skill levels. Whether you're a developer, designer, or just passionate about anime, there's a place for you. Help us make Anime Pack the best anime companion app out there!`,
};

const communityInvitation = {
  title: "Join Our Discord Community!",
  description: "Connect with fellow Anime Pack members on our official Discord server. Share your thoughts, discover new gems, get support, and stay updated with the latest news.",
};


export const enTranslations = {
  common,
  header,
  footer,
  heroSection,
  aboutSection,
  futurePlansSection,
  featureShowcase,
  communityInvitation,
};

export type Translations = typeof enTranslations;
