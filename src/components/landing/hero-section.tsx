
"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from 'next/link';
import { AnimatedSection } from "@/components/common/animated-section";
import Image from 'next/image';
import { useTranslations } from "@/lib/i18n";

export function HeroSection() {
  const { t, translations } = useTranslations();

  return (
    <AnimatedSection className="bg-primary/30 dark:bg-primary/10 py-20 md:py-32 relative overflow-hidden">
      {/* Background Image - Positioned to be behind fades and content */}
      <Image
        src="https://placehold.co/1920x1080.png" 
        alt={t('heroSection.subtitle')[0] as string} 
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0 opacity-40" 
        data-ai-hint="abstract anime landscape"
        priority // Ensures LCP is optimized if this is above the fold
      />

      {/* Top Fade Overlay - Sits on top of the image, using the section's background color */}
      <div className="absolute top-0 inset-x-0 h-1/3 bg-gradient-to-b from-primary/30 to-transparent dark:from-primary/10 z-1" />
      
      {/* Bottom Fade Overlay - Sits on top of the image, using the section's background color */}
      <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-primary/30 to-transparent dark:from-primary/10 z-1" />

      {/* Content Layer - Must be above the image and fades */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          {t('heroSection.welcomePrefix')}
          <span className="text-accent">{translations.common.appName}</span>
          {t('heroSection.welcomeSuffix')}
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto mb-10">
          {t('heroSection.subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button 
            asChild 
            size="lg" 
            className="bg-accent text-accent-foreground hover:bg-accent/90 transition-transform duration-300 ease-in-out hover:scale-105 shadow-lg"
          >
            <Link href="#future-plans">
              {t('common.exploreFeatures')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </AnimatedSection>
  );
}
