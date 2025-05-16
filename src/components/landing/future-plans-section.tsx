
"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Paintbrush, Telescope, LibraryBig, ListChecks, Users, Search, Bell, Smartphone, MessagesSquare, Flame } from "lucide-react";
import Image from "next/image";
import { AnimatedSection } from "@/components/common/animated-section";
import { InteractiveCard } from "@/components/common/interactive-card";
import { useTranslations } from "@/lib/i18n";

export function FuturePlansSection() {
  const { t, translations } = useTranslations();

  const nearTermPlannedFeatures = [
    {
      icon: <LibraryBig className="h-10 w-10 text-accent mb-4" />,
      title: t('futurePlansSection.features.vastLibrary.title'),
      description: t('futurePlansSection.features.vastLibrary.description'),
      imageSrc: "https://placehold.co/600x400.png",
      imageAlt: "Vast anime library",
      aiHint: "anime library",
    },
    {
      icon: <ListChecks className="h-10 w-10 text-accent mb-4" />,
      title: t('futurePlansSection.features.personalizedTracking.title'),
      description: t('futurePlansSection.features.personalizedTracking.description'),
      imageSrc: "https://placehold.co/600x400.png",
      imageAlt: "Personalized anime tracking",
      aiHint: "anime watchlist",
    },
    {
      icon: <Users className="h-10 w-10 text-accent mb-4" />,
      title: t('futurePlansSection.features.communityHub.title'),
      description: t('futurePlansSection.features.communityHub.description'),
      imageSrc: "https://placehold.co/600x400.png",
      imageAlt: "Anime community hub",
      aiHint: "anime community",
    },
    {
      icon: <Bell className="h-10 w-10 text-accent mb-4" />,
      title: t('futurePlansSection.features.releaseNotifications.title'),
      description: t('futurePlansSection.features.releaseNotifications.description'),
      imageSrc: "https://placehold.co/600x400.png",
      imageAlt: "Anime release notifications",
      aiHint: "anime notification",
    },
    {
      icon: <Paintbrush className="h-10 w-10 text-accent mb-4" />,
      title: t('futurePlansSection.features.customizableProfiles.title'),
      description: t('futurePlansSection.features.customizableProfiles.description'),
      imageSrc: "https://placehold.co/600x400.png",
      imageAlt: "Customizable Profiles",
      aiHint: "profile customization options",
    },
    {
      icon: <Flame className="h-10 w-10 text-accent mb-4" />,
      title: t('futurePlansSection.features.communityRecommendations.title'),
      description: t('futurePlansSection.features.communityRecommendations.description'),
      imageSrc: "https://placehold.co/600x400.png",
      imageAlt: "Community-driven anime recommendations",
      aiHint: "community trending",
    },
  ];

  const longTermPlannedFeatures = [
    {
      icon: <Search className="h-10 w-10 text-accent mb-4" />,
      title: t('futurePlansSection.features.advancedFilters.title'),
      description: t('futurePlansSection.features.advancedFilters.description'),
      imageSrc: "https://placehold.co/600x400.png",
      imageAlt: "Advanced anime filters",
      aiHint: "anime search",
    },
    {
      icon: <Telescope className="h-10 w-10 text-accent mb-4" />,
      title: t('futurePlansSection.features.advancedGenreTagging.title'),
      description: t('futurePlansSection.features.advancedGenreTagging.description'),
      imageSrc: "https://placehold.co/600x400.png",
      imageAlt: "Advanced Genre Tagging",
      aiHint: "data graph connections",
    },
    {
      icon: <Smartphone className="h-10 w-10 text-accent mb-4" />,
      title: t('futurePlansSection.features.nativeMobileApps.title'),
      description: t('futurePlansSection.features.nativeMobileApps.description'),
      imageSrc: "https://placehold.co/600x400.png",
      imageAlt: "Native Mobile Apps",
      aiHint: "mobile phone apps",
    },
    {
      icon: <MessagesSquare className="h-10 w-10 text-accent mb-4" />,
      title: t('futurePlansSection.features.socialFeatures.title'),
      description: t('futurePlansSection.features.socialFeatures.description'),
      imageSrc: "https://placehold.co/600x400.png",
      imageAlt: "Social Features with Discord Integration",
      aiHint: "social connection discord",
    },
  ];

  return (
    <AnimatedSection id="future-plans" className="py-16 md:py-24 bg-primary/10 dark:bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{t('futurePlansSection.nearTermTitle')}</h2>
          <p className="text-lg text-foreground/70 mt-2 max-w-2xl mx-auto">
            {t('futurePlansSection.nearTermSubtitle')}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {nearTermPlannedFeatures.map((feature, index) => (
            <AnimatedSection key={index} delay={`delay-${index * 100}ms`} className="h-full">
              <InteractiveCard className="h-full">
                <Card className="h-full flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out bg-card">
                  <CardHeader className="items-center text-center p-6">
                    {feature.icon}
                    <CardTitle className="text-2xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col p-6 pt-0">
                    <div className="relative w-full aspect-[3/2] rounded-md overflow-hidden mb-4">
                      <Image
                        src={feature.imageSrc}
                        alt={feature.imageAlt}
                        layout="fill"
                        objectFit="cover"
                        data-ai-hint={feature.aiHint}
                        className="transition-transform duration-500"
                      />
                    </div>
                    <CardDescription className="text-base text-foreground/70 text-center flex-grow">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </InteractiveCard>
            </AnimatedSection>
          ))}
        </div>

        <div className="text-center mt-16 md:mt-24 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{t('futurePlansSection.longTermTitle')}</h2>
          <p className="text-lg text-foreground/70 mt-2 max-w-2xl mx-auto">
            {t('futurePlansSection.longTermSubtitle')}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {longTermPlannedFeatures.map((feature, index) => (
            <AnimatedSection key={index} delay={`delay-${index * 100}ms`} className="h-full">
               <InteractiveCard className="h-full">
                <Card className="h-full flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out bg-card">
                  <CardHeader className="items-center text-center p-6">
                    {feature.icon}
                    <CardTitle className="text-2xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col p-6 pt-0">
                    <div className="relative w-full aspect-[3/2] rounded-md overflow-hidden mb-4">
                      <Image
                        src={feature.imageSrc}
                        alt={feature.imageAlt}
                        layout="fill"
                        objectFit="cover"
                        data-ai-hint={feature.aiHint}
                        className="transition-transform duration-500"
                      />
                    </div>
                    <CardDescription className="text-base text-foreground/70 text-center flex-grow">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </InteractiveCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
