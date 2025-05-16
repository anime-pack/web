
"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from 'next/link';
import { AnimatedSection } from "@/components/common/animated-section";
import { useTranslations } from "@/lib/i18n";
import { FaDiscord } from 'react-icons/fa';

export function CommunityInvitation() {
  const { t } = useTranslations();
  return (
    <AnimatedSection className="py-16 md:py-24 bg-primary/30 dark:bg-primary/10">
      <div className="container mx-auto px-4 text-center">
        <FaDiscord className="h-16 w-16 text-accent mx-auto mb-6" />
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          {t('communityInvitation.title')}
        </h2>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-8">
          {t('communityInvitation.description')}
        </p>
        <Button
          asChild
          size="lg"
          className="bg-accent text-accent-foreground hover:bg-accent/90 transition-transform duration-300 ease-in-out hover:scale-105 shadow-lg"
        >
          <Link href="https://discord.gg/Nv8UXpB36y" target="_blank" rel="noopener noreferrer">
            {t('common.joinDiscord')}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </AnimatedSection>
  );
}
