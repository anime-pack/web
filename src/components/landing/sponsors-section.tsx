
"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { HeartHandshake, Star } from "lucide-react";
import Link from 'next/link';
import { AnimatedSection } from "@/components/common/animated-section";
import { useTranslations } from "@/lib/i18n";
import { Separator } from "@/components/ui/separator";
import { FaDiscord, FaPaypal } from 'react-icons/fa';
import { FaPix } from 'react-icons/fa6';
import { SiOpencollective } from 'react-icons/si';


export function SponsorsSection() {
  const { t } = useTranslations();
  return (
    <AnimatedSection id="sponsors" className="py-16 md:py-24 bg-background">
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
              <div className="space-y-4">
                <div>
                  <p className="flex items-center">
                    <FaPaypal className="mr-3 h-6 w-6 text-accent" />
                    {t('sponsorsSection.backerDialog.optionPayPalText')}{' '}
                    <Link href="https://www.paypal.com/donate/?business=R9RPLRDQSCAU6&no_recurring=0" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline ml-1">
                      PayPal
                    </Link>
                  </p>
                  <p className="text-xs text-muted-foreground mt-1 ml-9">
                    {t('sponsorsSection.backerDialog.optionPayPalDescription')}
                  </p>
                </div>
                <div>
                  <p className="flex items-center">
                    <SiOpencollective className="mr-3 h-6 w-6 text-accent" />
                    {t('sponsorsSection.backerDialog.optionOpenCollectiveText')}{' '}
                    <Link href="https://opencollective.com/anime-pack" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline ml-1">
                      OpenCollective
                    </Link>
                  </p>
                   <p className="text-xs text-muted-foreground mt-1 ml-9">
                    {t('sponsorsSection.backerDialog.optionOpenCollectiveDescription')}
                  </p>
                </div>
                <div>
                  <p className="flex items-center">
                    <FaPix className="mr-3 h-6 w-6 text-accent" />
                    {t('sponsorsSection.backerDialog.optionLivepixText')}{' '}
                    <Link href="https://livepix.gg/dark1zin" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline ml-1">
                      Livepix
                    </Link>
                  </p>
                  <p className="text-xs text-muted-foreground mt-1 ml-9">
                    {t('sponsorsSection.backerDialog.optionLivepixDescription')}
                  </p>
                </div>
              </div>
              <p className="mt-2">{t('sponsorsSection.backerDialog.moreOptionsSoon')}</p>
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
