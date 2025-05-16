
"use client";

import Image from "next/image";
import { useEffect, useState } from 'react';
import { Star } from "lucide-react";
import { AnimatedSection } from "@/components/common/animated-section";
import { useTranslations } from "@/lib/i18n";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { InteractiveCard } from "@/components/common/interactive-card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const LOCAL_STORAGE_KEY_ACHIEVEMENT = 'anime-pack-about-icon-achievement-unlocked';

export function AboutSection() {
  const { t } = useTranslations();
  const { toast } = useToast();
  const [isFirstTimeAchievement, setIsFirstTimeAchievement] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(LOCAL_STORAGE_KEY_ACHIEVEMENT) !== 'true') {
      setIsFirstTimeAchievement(true);
    }
  }, []);

  const handleIconClick = () => {
    if (isFirstTimeAchievement) {
      toast({
        title: (
          <div className="flex items-center gap-2">
            <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
            <span className="font-semibold">{t('toast.achievementUnlocked.title')}</span>
          </div>
        ),
        description: t('toast.achievementUnlocked.description'),
        className: "border-yellow-500 bg-yellow-50 dark:bg-yellow-900/30 dark:border-yellow-600",
        duration: 5000, // Display for 5 seconds
      });
      localStorage.setItem(LOCAL_STORAGE_KEY_ACHIEVEMENT, 'true');
      setIsFirstTimeAchievement(false);
    }
  };

  const imageUrl = "https://placehold.co/100x100.png";
  const imageAlt = t('aboutSection.title') as string; // Assuming t returns string for simple keys

  return (
    <AnimatedSection id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <TooltipProvider delayDuration={6000}>
            <Tooltip>
              <Dialog>
                <DialogTrigger asChild>
                  <div
                    onClick={handleIconClick}
                    className="relative mx-auto mb-6 h-24 w-24 md:h-28 md:w-28 overflow-hidden rounded-lg shadow-md cursor-pointer hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
                  >
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
                  <DialogTitle className="sr-only">App Icon</DialogTitle>
                  <InteractiveCard className="w-full h-full">
                    <Card className="overflow-hidden shadow-xl rounded-lg w-full h-full">
                      <CardContent className="p-2">
                        <div className="relative aspect-square w-full rounded-md overflow-hidden">
                          <Image
                            src={imageUrl}
                            alt={imageAlt} // Using the same alt text
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
              <TooltipContent side="top">
                <p>Click Me!</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

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
