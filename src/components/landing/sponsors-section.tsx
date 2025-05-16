
"use client";

import { Button } from "@/components/ui/button";
import { HeartHandshake, ArrowRight } from "lucide-react";
import Link from 'next/link';
import { AnimatedSection } from "@/components/common/animated-section";
import { useTranslations } from "@/lib/i18n";

export function SponsorsSection() {
  const { t } = useTranslations();
  return (
    <AnimatedSection className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 text-center">
        <HeartHandshake className="h-16 w-16 text-accent mx-auto mb-6" />
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          {t('sponsorsSection.title')}
        </h2>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-8">
          {t('sponsorsSection.description')}
        </p>
        <Button 
          asChild 
          size="lg" 
          className="bg-accent text-accent-foreground hover:bg-accent/90 transition-transform duration-300 ease-in-out hover:scale-105 shadow-lg"
        >
          {/* Replace "#" with your actual sponsorship link (e.g., GitHub Sponsors, Patreon) */}
          <Link href="#" target="_blank" rel="noopener noreferrer"> 
            {t('sponsorsSection.buttonText')}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </AnimatedSection>
  );
}
