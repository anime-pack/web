
// @/lib/i18n/locales/es.ts
import type { Translations } from './en';

const common: Translations['common'] = {
  appName: "Anime Pack",
  exploreFeatures: "Explorar Características",
  joinDiscord: "Únete a nuestro Discord",
  contributeOnGithub: "Contribuye en GitHub",
};

const header: Translations['header'] = {
  srGitHub: "GitHub",
  srDiscord: "Discord",
  srThemeToggle: "Alternar tema",
  themeLight: "Claro",
  themeDark: "Oscuro",
  themeSystem: "Sistema",
  language: "Idioma",
  english: "Inglés",
  portugueseBrazil: "Portugués",
  spanish: "Español",
};

const footer: Translations['footer'] = {
  copyright: `© ${new Date().getFullYear()} ${common.appName}. Todos los derechos reservados.`,
  legalNotice: `${common.appName} es un proyecto independiente y no está afiliado ni respaldado por MyAnimeList o Discord.`,
};

const heroSection: Translations['heroSection'] = {
  welcomePrefix: "Bienvenido a ",
  welcomeSuffix: "",
  subtitle: "Tu destino definitivo para descubrir, organizar y disfrutar del anime. Sumérgete en un mundo de entretenimiento sin fin, personalizado solo para ti.",
};

const aboutSection: Translations['aboutSection'] = {
  title: "¿Qué es Anime Pack?",
  p1: `Anime Pack se concibe como un cliente integral de MyAnimeList (MAL), con un fuerte énfasis en proporcionar una rica experiencia de aplicación de escritorio. Está diseñado no solo para navegar por información de anime y manga, sino para ser un vibrante centro social para entusiastas del anime, manga, manhwa y la cultura otaku en general.`,
  p2: `Nuestro objetivo es crear un espacio dedicado donde los fans puedan conectarse, discutir sus series favoritas y compartir su pasión. Anime Pack tiene como objetivo cerrar la brecha entre el descubrimiento de contenido y la interacción comunitaria, haciendo más fácil que nunca sumergirse profundamente en el nicho del anime.`,
  p3: `Podrás conectar tu cuenta de MyAnimeList sin problemas, mostrar tu perfil personalizado, seguir tu progreso y descubrir nuevos títulos. Y esto es solo el comienzo: ¡tenemos muchas más características emocionantes planeadas para futuras actualizaciones para hacer de Anime Pack tu compañero definitivo para todo lo relacionado con el anime!`,
  clickMeTooltip: "¡Haz Clic!",
};

const futurePlansSection: Translations['futurePlansSection'] = {
  nearTermTitle: "¿Qué Viene Próximamente?",
  nearTermSubtitle: "Estamos trabajando constantemente para mejorar Anime Pack. Aquí tienes un adelanto de lo que estamos planejando para el futuro cercano.",
  longTermTitle: "Nuestra Visión a Largo Plazo",
  longTermSubtitle: "Mirando más adelante, aquí están algunas de las metas ambiciosas que estamos emocionados de abordar.",
  features: {
    vastLibrary: {
      title: "Acceso a una Vasta Biblioteca",
      description: "Explora miles de series y películas de anime, con nuevos títulos añadidos regularmente para mantener fresca tu lista de visualización.",
    },
    personalizedTracking: {
      title: "Seguimiento Personalizado",
      description: "Sigue sin esfuerzo los episodios vistos, gestiona tu lista de visualización y obtén recomendaciones personalizadas.",
    },
    communityHub: {
      title: "Centro Comunitario",
      description: "Conéctate con otros fans, únete a discusiones, comparte reseñas y descubre joyas ocultas juntos.",
    },
    releaseNotifications: {
      title: "Notificaciones de Lanzamiento",
      description: "Mantente actualizado con notificaciones de nuevos lanzamientos de episodios de tus animes favoritos y nunca te pierdas nada.",
    },
    customizableProfiles: {
      title: "Perfiles Personalizables",
      description: "Personaliza tu perfil de usuario con temas únicos, insignias y muestra tus logros de anime favoritos.",
    },
    communityRecommendations: {
      title: "Recomendaciones de la Comunidad",
      description: "¡Descubre lo que está de moda! Obtén recomendaciones basadas en animes populares y discusiones dentro de la comunidad de Anime Pack.",
    },
    advancedFilters: {
      title: "Filtros Avanzados",
      description: "Encuentra rápidamente lo que buscas con una potente búsqueda y opciones de filtrado intuitivas por género, año y más.",
    },
    advancedGenreTagging: {
      title: "Etiquetado Avanzado de Géneros",
      description: "Descubre géneros de nicho y explora anime con un sistema de etiquetado altamente detallado y curado por la comunidad.",
    },
    nativeMobileApps: {
      title: "Aplicaciones Móviles Nativas",
      description: "Disfruta de Anime Pack sobre la marcha con aplicaciones dedicadas para iOS y Android para una experiencia móvil fluida.",
    },
    socialFeatures: {
      title: "Características Sociales",
      description: "Conéctate con amigos, comparte listas y disfruta de funciones integradas de Discord para una interacción comunitaria fluida.",
    },
  }
};

const sponsorsSection: Translations['sponsorsSection'] = {
  title: "¡Apoya el Desarrollo de Anime Pack!",
  description: "Anime Pack es un proyecto de pasión. Al convertirte en patrocinador, nos ayudas a dedicar más tiempo al desarrollo, cubrir costos de servidor, ser destacado en anuncios dentro de la aplicación y dar vida a nuevas características más rápidamente. ¡Cada contribución es muy apreciada!",
  buttonTextDiscord: "Únete a Discord para Info de Patrocinio",
  backerTitle: "¡O Conviértete en Partidario!",
  backerDescription: "¡Para individuos que aman Anime Pack y quieren mostrar su apoyo! Como partidario, recibirás un rol cosmético especial en la aplicación y en nuestras plataformas comunitarias, junto con algunas ventajas exclusivas para usuarios como agradecimiento por tu contribución.",
  backerButtonText: "Conviértete en Partidario",
  backerEarlyDevelopmentNote: "Nota: La opción 'Conviértete en Partidario' está disponible exclusivamente durante la fase inicial de desarrollo de Anime Pack.",
  backerDialog: {
    title: "Apoya a Anime Pack como Partidario",
    description: "¡Elige tu forma preferida de contribuir y ayúdanos a crecer!",
    contentPlaceholderLine1: "Tu apoyo contribuye directamente a los costos del servidor, el desarrollo de funciones y las iniciativas comunitarias.",
    option1Text: "Apóyanos en",
    option2Text: "Danos una propina en",
    moreOptionsSoon: "Más opciones próximamente...",
  }
};

const featureShowcase: Translations['featureShowcase'] = {
  title: "¡Ayuda a Construir Anime Pack!",
  description: `Anime Pack es un proyecto de código abierto, y damos la bienvenida a colaboradores de todos los niveles de habilidad. Ya seas desarrollador, diseñador o simplemente un apasionado del anime, hay un lugar para ti. ¡Ayúdanos a hacer de Anime Pack la mejor aplicación compañera de anime!`,
  activeContributorNote: "Si deseas convertirte en un contribuidor activo, por favor abre un ticket de soporte en nuestro servidor de Discord indicando tu interés."
};

const communityInvitation: Translations['communityInvitation'] = {
  title: "¡Únete a Nuestra Comunidad de Discord!",
  description: "Conéctate con otros miembros de Anime Pack en nuestro servidor oficial de Discord. Comparte tus ideas, descubre nuevas joyas, obtén soporte y mantente actualizado con las últimas noticias.",
};

const toast: Translations['toast'] = {
  achievementUnlocked: {
    title: "¡Logro Desbloqueado!",
    description: "Estas tarjetas interactivas se ven geniales, ¿verdad?",
  },
  subsequent: {
    likeStickers: {
      title: "¡Guau!",
      description: "¡Realmente te deben gustar estas pegatinas interactivas!",
    },
    joinDiscord: {
      title: "¿Quieres Más Cosas Geniales?",
      description: "¡Para más funciones e interacción comunitaria, únete a nuestro servidor de Discord!",
      buttonText: "Unirse a Discord",
      buttonAltText: "Únete a nuestro servidor de Discord",
    },
    funFact: {
      title: "¡Dato Curioso!",
      description: "Anime Pack inicialmente solo era un pequeño proyecto para un grupo de amigos.",
    },
  }
};

export const esTranslations: Translations = {
  common,
  header,
  footer,
  heroSection,
  aboutSection,
  futurePlansSection,
  sponsorsSection,
  featureShowcase,
  communityInvitation,
  toast,
};
