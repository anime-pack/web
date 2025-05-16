
// @/lib/i18n/locales/pt-BR.ts
import type { Translations } from './en';

const common: Translations['common'] = {
  appName: "Anime Pack",
  exploreFeatures: "Explorar Recursos",
  joinDiscord: "Entre no nosso Discord",
  contributeOnGithub: "Contribua no GitHub",
};

const header: Translations['header'] = {
  srGitHub: "GitHub",
  srDiscord: "Discord",
  srThemeToggle: "Alternar tema",
  themeLight: "Claro",
  themeDark: "Escuro",
  themeSystem: "Sistema",
  language: "Idioma",
  english: "Inglês",
  portugueseBrazil: "Português",
  spanish: "Espanhol",
};

const footer: Translations['footer'] = {
  copyright: `© ${new Date().getFullYear()} ${common.appName}. Todos os direitos reservados.`,
  legalNotice: `${common.appName} é um projeto independente e não é afiliado nem endossado pelo MyAnimeList ou Discord.`,
};

const heroSection: Translations['heroSection'] = {
  welcomePrefix: "Bem-vindo ao ",
  welcomeSuffix: "",
  subtitle: "Seu destino definitivo para descobrir, organizar e desfrutar de animes. Mergulhe em um mundo de entretenimento sem fim, personalizado só para você.",
};

const aboutSection: Translations['aboutSection'] = {
  title: "O que é o Anime Pack?",
  p1: `O Anime Pack é idealizado como um cliente abrangente do MyAnimeList (MAL), com forte ênfase em fornecer uma rica experiência de aplicativo para desktop. Ele é projetado não apenas para navegar por informações de animes e mangás, mas para ser um vibrante centro social para entusiastas de anime, mangá, manhwa e da cultura otaku em geral.`,
  p2: `Nosso objetivo é criar um espaço dedicado onde os fãs possam se conectar, discutir suas séries favoritas e compartilhar sua paixão. O Anime Pack visa preencher a lacuna entre a descoberta de conteúdo e a interação da comunidade, tornando mais fácil do que nunca mergulhar fundo no nicho de animes.`,
  p3: `Você poderá conectar sua conta MyAnimeList perfeitamente, exibir seu perfil personalizado, acompanhar seu progresso e descobrir novos títulos. E isso é só o começo – temos muitos outros recursos empolgantes planejados para futuras atualizações para tornar o Anime Pack seu companheiro definitivo para todas as coisas de anime!`,
  clickMeTooltip: "Clique em Mim!",
};

const futurePlansSection: Translations['futurePlansSection'] = {
  nearTermTitle: "O que Vem por Aí?",
  nearTermSubtitle: "Estamos constantemente trabalhando para tornar o Anime Pack ainda melhor. Aqui está uma prévia do que estamos planejando para o futuro próximo.",
  longTermTitle: "Nossa Visão de Longo Prazo",
  longTermSubtitle: "Olhando mais adiante, aqui estão alguns dos objetivos ambiciosos que estamos animados para enfrentar.",
  features: {
    vastLibrary: {
      title: "Acesso a Vasta Biblioteca",
      description: "Explore milhares de séries e filmes de anime, com novos títulos adicionados regularmente para manter sua lista de observação atualizada.",
    },
    personalizedTracking: {
      title: "Acompanhamento Personalizado",
      description: "Acompanhe episódios assistidos sem esforço, gerencie sua lista de observação e obtenha recomendações personalizadas.",
    },
    communityHub: {
      title: "Hub da Comunidade",
      description: "Conecte-se com outros fãs, participe de discussões, compartilhe avaliações e descubra joias escondidas juntos.",
    },
    releaseNotifications: {
      title: "Notificações de Lançamento",
      description: "Mantenha-se atualizado com notificações de novos lançamentos de episódios de seus animes favoritos e nunca perca nada.",
    },
    customizableProfiles: {
      title: "Perfis Personalizáveis",
      description: "Personalize seu perfil de usuário com temas exclusivos, emblemas e mostre suas conquistas de anime favoritas.",
    },
    communityRecommendations: {
      title: "Recomendações da Comunidade",
      description: "Descubra o que está em alta! Receba recomendações com base em animes populares e discussões na comunidade Anime Pack.",
    },
    advancedFilters: {
      title: "Filtros Avançados",
      description: "Encontre rapidamente o que procura com pesquisa poderosa e opções de filtragem intuitivas por gênero, ano e mais.",
    },
    advancedGenreTagging: {
      title: "Marcação Avançada de Gênero",
      description: "Descubra gêneros de nicho e explore animes com um sistema de marcação altamente detalhado e curado pela comunidade.",
    },
    nativeMobileApps: {
      title: "Aplicativos Móveis Nativos",
      description: "Desfrute do Anime Pack em qualquer lugar com aplicativos dedicados para iOS e Android para uma experiência móvel perfeita.",
    },
    socialFeatures: {
      title: "Recursos Sociais",
      description: "Conecte-se com amigos, compartilhe listas e desfrute de recursos integrados do Discord para interação comunitária perfeita.",
    },
  }
};

const sponsorsSection: Translations['sponsorsSection'] = {
  title: "Apoie o Desenvolvimento do Anime Pack!",
  description: "O Anime Pack é um projeto de paixão. Ao se tornar um patrocinador, você nos ajuda a dedicar mais tempo ao desenvolvimento, cobrir custos de servidor, ser destacado em anúncios no aplicativo e trazer novos recursos à vida mais rapidamente. Toda contribuição é muito apreciada.",
  buttonTextDiscord: "Entre no Discord para Infos de Patrocínio",
  backerTitle: "Ou Torne-se um Apoiador!",
  backerDescription: "Para pessoas que amam o Anime Pack e querem mostrar seu apoio! Como apoiador, você receberá um papel cosmético especial no aplicativo e em nossas plataformas comunitárias, juntamente com algumas vantagens exclusivas para usuários como agradecimento por sua contribuição.",
  backerButtonText: "Torne-se um Apoiador",
  backerEarlyDevelopmentNote: "Nota: A opção 'Torne-se um Apoiador' está disponível exclusivamente durante a fase inicial de desenvolvimento do Anime Pack.",
};

const featureShowcase: Translations['featureShowcase'] = {
  title: "Ajude a Construir o Anime Pack!",
  description: `O Anime Pack é um projeto de código aberto e damos as boas-vindas a colaboradores de todos os níveis de habilidade. Seja você um desenvolvedor, designer ou apenas apaixonado por animes, há um lugar para você. Ajude-nos a tornar o Anime Pack o melhor aplicativo companheiro de animes!`,
  activeContributorNote: "Se você deseja se tornar um contribuidor ativo, abra um ticket de suporte em nosso servidor Discord informando seu interesse."
};

const communityInvitation: Translations['communityInvitation'] = {
  title: "Junte-se à Nossa Comunidade no Discord!",
  description: "Conecte-se com outros membros do Anime Pack em nosso servidor oficial do Discord. Compartilhe suas ideias, descubra novas joias, obtenha suporte e mantenha-se atualizado com as últimas notícias.",
};

const toast: Translations['toast'] = {
  achievementUnlocked: {
    title: "Conquista Desbloqueada!",
    description: "Esses cards interativos parecem legais, né?",
  },
  subsequent: {
    likeStickers: {
      title: "Uau!",
      description: "Você deve gostar mesmo desses adesivos interativos!",
    },
    joinDiscord: {
      title: "Quer Mais Coisas Legais?",
      description: "Para mais recursos e interação com a comunidade, entre no nosso servidor do Discord!",
      buttonText: "Entrar no Discord",
      buttonAltText: "Entre no nosso servidor do Discord",
    },
    funFact: {
      title: "Curiosidade!",
      description: "O Anime Pack foi inicialmente apenas um pequeno projeto para um grupo de amigos.",
    },
  }
};

export const ptBRTranslations: Translations = {
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
