
"use client";

import { Button } from "@/components/ui/button";
import { Github, GitPullRequestArrow } from "lucide-react";
import Link from 'next/link';
import { AnimatedSection } from "@/components/common/animated-section";
import { useTranslations } from "@/lib/i18n";

export function FeatureShowcase() {
  const { t } = useTranslations();
  return (
    <AnimatedSection id="features" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 text-center">
        <GitPullRequestArrow className="h-16 w-16 text-accent mx-auto mb-6" />
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          {t('featureShowcase.title')}
        </h2>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-8">
          {t('featureShowcase.description')}
        </p>
        <Button
          asChild
          size="lg"
          className="bg-accent text-accent-foreground hover:bg-accent/90 transition-transform duration-300 ease-in-out hover:scale-105 shadow-lg"
        >
          <Link href="https://github.com/anime-pack" target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-5 w-5" />
            {t('common.contributeOnGithub')}
          </Link>
        </Button>
        <p className="text-xs text-muted-foreground mt-4 max-w-lg mx-auto">
          {t('featureShowcase.activeContributorNote')}
        </p>
      </div>
    </AnimatedSection>
  );
}

