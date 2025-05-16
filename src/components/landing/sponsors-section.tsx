
"use client";

import { Button } from "@/components/ui/button";
import { HeartHandshake, MessagesSquare, ArrowRight, Star } from "lucide-react";
import Link from 'next/link';
import { AnimatedSection } from "@/components/common/animated-section";
import { useTranslations } from "@/lib/i18n";
import { Separator } from "@/components/ui/separator";

export function SponsorsSection() {
  const { t } = useTranslations();
  return (
    <AnimatedSection className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 text-center">
        <HeartHandshake className="h-16 w-16 text-accent mx-auto mb-6" />
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          {t('sponsorsSection.title')}
        </h2>
        <p className="text-lg text-foreground/80 max-w-3xl mx-auto mb-8">
          {t('sponsorsSection.description')}
        </p>
        <Button
          asChild
          size="lg"
          className="bg-accent text-accent-foreground hover:bg-accent/90 transition-transform duration-300 ease-in-out hover:scale-105 shadow-lg"
        >
          {/* Replace "#" with your actual Discord invite link */}
          <Link href="#" target="_blank" rel="noopener noreferrer">
            <MessagesSquare className="mr-2 h-5 w-5" />
            {t('sponsorsSection.buttonTextDiscord')} 
          </Link>
        </Button>

        <Separator className="my-12 md:my-16 max-w-md mx-auto" />

        <Star className="h-12 w-12 text-accent mx-auto mb-6" />
        <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
          {t('sponsorsSection.backerTitle')}
        </h3>
        <p className="text-lg text-foreground/80 max-w-3xl mx-auto mb-8">
          {t('sponsorsSection.backerDescription')}
        </p>
        <Button
          asChild
          size="lg"
          variant="outline"
          className="border-accent text-accent hover:bg-accent/10 transition-transform duration-300 ease-in-out hover:scale-105 shadow-md hover:shadow-lg"
        >
          {/* Replace "#" with your actual backer link (e.g., a different tier on Patreon, Ko-fi) */}
          <Link href="#" target="_blank" rel="noopener noreferrer">
            {t('sponsorsSection.backerButtonText')}
            <Star className="ml-2 h-5 w-5 fill-accent" />
          </Link>
        </Button>
      </div>
    </AnimatedSection>
  );
}

