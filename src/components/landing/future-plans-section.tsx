
"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Paintbrush, Telescope, LibraryBig, ListChecks, Users, Search, Bell, Smartphone, MessagesSquare, Flame } from "lucide-react";
import Image from "next/image";
import { AnimatedSection } from "@/components/common/animated-section";
import { InteractiveCard } from "@/components/common/interactive-card";
import { useTranslations } from "@/lib/i18n";

// Import local images - ASSUMES .png EXTENSION.
// MANUALLY CHANGE THE EXTENSION (e.g., to .jpg or .webp) IF YOUR FILE IS DIFFERENT.
// Using camelCase for feature names in filenames as per user instruction.
import vastLibraryFeatureImg from '@/app/features_img/vastLibrary-feature.jpg';
import personalizedTrackingFeatureImg from '@/app/features_img/personalizedTracking-feature.webp';
import communityHubFeatureImg from '@/app/features_img/communityHub-feature.jpg';
import releaseNotificationsFeatureImg from '@/app/features_img/releaseNotifications-feature.jpg';
import customizableProfilesFeatureImg from '@/app/features_img/customizableProfiles-feature.jpg';
import communityRecommendationsFeatureImg from '@/app/features_img/communityRecommendations-feature.jpg';
import advancedFiltersFeatureImg from '@/app/features_img/advancedFilters-feature.jpg'; // Ensure this file exists: src/app/features_img/advancedFilters-feature.png
import advancedGenreTaggingFeatureImg from '@/app/features_img/advancedGenreTagging-feature.jpg';
import nativeMobileAppsFeatureImg from '@/app/features_img/nativeMobileApps-feature.jpg';
import socialFeaturesFeatureImg from '@/app/features_img/socialFeatures-feature.webp';


export function FuturePlansSection() {
  const { t } = useTranslations();

  const nearTermPlannedFeatures = [
    {
      icon: <LibraryBig className="h-10 w-10 text-accent mb-4" />,
      titleKey: 'futurePlansSection.features.vastLibrary.title',
      descriptionKey: 'futurePlansSection.features.vastLibrary.description',
      image: vastLibraryFeatureImg,
    },
    {
      icon: <ListChecks className="h-10 w-10 text-accent mb-4" />,
      titleKey: 'futurePlansSection.features.personalizedTracking.title',
      descriptionKey: 'futurePlansSection.features.personalizedTracking.description',
      image: personalizedTrackingFeatureImg,
    },
    {
      icon: <Users className="h-10 w-10 text-accent mb-4" />,
      titleKey: 'futurePlansSection.features.communityHub.title',
      descriptionKey: 'futurePlansSection.features.communityHub.description',
      image: communityHubFeatureImg,
    },
    {
      icon: <Bell className="h-10 w-10 text-accent mb-4" />,
      titleKey: 'futurePlansSection.features.releaseNotifications.title',
      descriptionKey: 'futurePlansSection.features.releaseNotifications.description',
      image: releaseNotificationsFeatureImg,
    },
    {
      icon: <Paintbrush className="h-10 w-10 text-accent mb-4" />,
      titleKey: 'futurePlansSection.features.customizableProfiles.title',
      descriptionKey: 'futurePlansSection.features.customizableProfiles.description',
      image: customizableProfilesFeatureImg,
    },
    {
      icon: <Flame className="h-10 w-10 text-accent mb-4" />,
      titleKey: 'futurePlansSection.features.communityRecommendations.title',
      descriptionKey: 'futurePlansSection.features.communityRecommendations.description',
      image: communityRecommendationsFeatureImg,
    },
  ];

  const longTermPlannedFeatures = [
    {
      icon: <Search className="h-10 w-10 text-accent mb-4" />,
      titleKey: 'futurePlansSection.features.advancedFilters.title',
      descriptionKey: 'futurePlansSection.features.advancedFilters.description',
      image: advancedFiltersFeatureImg,
    },
    {
      icon: <Telescope className="h-10 w-10 text-accent mb-4" />,
      titleKey: 'futurePlansSection.features.advancedGenreTagging.title',
      descriptionKey: 'futurePlansSection.features.advancedGenreTagging.description',
      image: advancedGenreTaggingFeatureImg,
    },
    {
      icon: <Smartphone className="h-10 w-10 text-accent mb-4" />,
      titleKey: 'futurePlansSection.features.nativeMobileApps.title',
      descriptionKey: 'futurePlansSection.features.nativeMobileApps.description',
      image: nativeMobileAppsFeatureImg,
    },
    {
      icon: <MessagesSquare className="h-10 w-10 text-accent mb-4" />,
      titleKey: 'futurePlansSection.features.socialFeatures.title',
      descriptionKey: 'futurePlansSection.features.socialFeatures.description',
      image: socialFeaturesFeatureImg,
    },
  ];

  const renderFeatureCard = (feature: typeof nearTermPlannedFeatures[0] | typeof longTermPlannedFeatures[0], index: number) => {
    const title = t(feature.titleKey)[0] as string;
    const description = t(feature.descriptionKey)[0] as string;
    return (
      <AnimatedSection key={index} delay={`delay-${index * 100}ms`} className="h-full">
        <InteractiveCard className="h-full">
          <Card className="h-full flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out bg-card">
            <CardHeader className="items-center text-center p-6">
              {feature.icon}
              <CardTitle className="text-2xl">{title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col p-6 pt-0">
              <div className="relative w-full aspect-[3/2] rounded-md overflow-hidden mb-4">
                <Image
                  src={feature.image}
                  alt={title}
                  fill
                  className="object-cover transition-transform duration-500"
                />
              </div>
              <CardDescription className="text-base text-foreground/70 text-center flex-grow">
                {description}
              </CardDescription>
            </CardContent>
          </Card>
        </InteractiveCard>
      </AnimatedSection>
    );
  };


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
          {nearTermPlannedFeatures.map(renderFeatureCard)}
        </div>

        <div className="text-center mt-16 md:mt-24 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{t('futurePlansSection.longTermTitle')}</h2>
          <p className="text-lg text-foreground/70 mt-2 max-w-2xl mx-auto">
            {t('futurePlansSection.longTermSubtitle')}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {longTermPlannedFeatures.map(renderFeatureCard)}
        </div>
      </div>
    </AnimatedSection>
  );
}
