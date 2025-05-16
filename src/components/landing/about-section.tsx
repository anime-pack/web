
"use client";

import Image from "next/image";
import { AnimatedSection } from "@/components/common/animated-section";
import { useTranslations } from "@/lib/i18n";
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { InteractiveCard } from "@/components/common/interactive-card";

export function AboutSection() {
  const { t } = useTranslations();
  const imageUrl = "https://placehold.co/100x100.png";
  const imageAlt = t('aboutSection.title') as string;

  return (
    <AnimatedSection id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Dialog>
            <DialogTrigger asChild>
              <div className="relative mx-auto mb-6 h-24 w-24 md:h-28 md:w-28 overflow-hidden rounded-lg shadow-md cursor-pointer hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                <Image
                  src={imageUrl}
                  alt={imageAlt}
                  layout="fill"
                  objectFit="cover"
                  data-ai-hint="fox box"
                  className="transform transition-transform duration-500 hover:scale-110"
                />
              </div>
            </DialogTrigger>
            <DialogOverlay className="bg-black/80" />
            <DialogContent
              onOpenAutoFocus={(e) => e.preventDefault()}
              hideCloseButton={true}
              className="p-0 bg-transparent border-0 shadow-none sm:max-w-xs md:max-w-sm focus-visible:ring-0 focus-visible:ring-offset-0"
            >
              <DialogTitle className="sr-only">{t('aboutSection.title')}</DialogTitle>
              <InteractiveCard className="w-full h-full">
                <Card className="overflow-hidden shadow-xl rounded-lg w-full h-full">
                  <CardContent className="p-2">
                    <div className="relative aspect-square w-full rounded-md overflow-hidden">
                      <Image
                        src={imageUrl}
                        alt={imageAlt}
                        layout="fill"
                        objectFit="contain"
                        data-ai-hint="fox box"
                      />
                    </div>
                  </CardContent>
                </Card>
              </InteractiveCard>
            </DialogContent>
          </Dialog>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            {t('aboutSection.title')}
          </h2>
        </div>
        <div className="max-w-3xl mx-auto text-lg text-foreground/80 space-y-6 text-left md:text-justify">
          <p>
            {t('aboutSection.p1')}
          </p>
          <p>
            {t('aboutSection.p2')}
          </p>
          <p>
            {t('aboutSection.p3')}
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}
