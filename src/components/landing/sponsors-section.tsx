
"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { HeartHandshake, Star } from "lucide-react";
import Link from 'next/link';
import { AnimatedSection } from "@/components/common/animated-section";
import { useTranslations } from "@/lib/i18n";
import { Separator } from "@/components/ui/separator";
import { FaDiscord } from 'react-icons/fa';

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
          <Link href="https://discord.gg/Nv8UXpB36y" target="_blank" rel="noopener noreferrer">
            <FaDiscord className="mr-2 h-5 w-5" />
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
        <Dialog>
          <DialogTrigger asChild>
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 transition-transform duration-300 ease-in-out hover:scale-105 shadow-lg"
            >
              {t('sponsorsSection.backerButtonText')}
              <Star className="ml-2 h-5 w-5" />
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>{t('sponsorsSection.backerDialog.title')}</DialogTitle>
              <DialogDescription>
                {t('sponsorsSection.backerDialog.description')}
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <p>{t('sponsorsSection.backerDialog.contentPlaceholderLine1')}</p>
              <p>
                {t('sponsorsSection.backerDialog.option1Text')}{' '}
                <Link href="#" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                  Patreon
                </Link>
              </p>
              <p>
                {t('sponsorsSection.backerDialog.option2Text')}{' '}
                <Link href="#" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                  Ko-fi
                </Link>
              </p>
              <p>{t('sponsorsSection.backerDialog.moreOptionsSoon')}</p>
            </div>
            <DialogFooter className="mt-2 pt-4 border-t">
              <p className="text-xs text-muted-foreground text-left w-full">
                {t('sponsorsSection.backerDialog.anonymousDonationNote')}
              </p>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <p className="text-xs text-muted-foreground mt-4 max-w-md mx-auto">
          {t('sponsorsSection.backerEarlyDevelopmentNote')}
        </p>
      </div>
    </AnimatedSection>
  );
}
