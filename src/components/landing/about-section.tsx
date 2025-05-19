
"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { AnimatedSection } from "@/components/common/animated-section";
import { useTranslations } from "@/lib/i18n/index.tsx";
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
import { ToastAction } from "@/components/ui/toast";
import { useIsMobile } from "@/hooks/use-mobile"; // Import useIsMobile

const LOCAL_STORAGE_KEY_ACHIEVEMENT_UNLOCKED = 'anime-pack-about-icon-achievement-unlocked';
const DISCORD_SERVER_LINK = "https://discord.gg/Nv8UXpB36y";

export function AboutSection() {
  const { t } = useTranslations();
  const { toast } = useToast();
  const isMobile = useIsMobile(); // Get mobile state

  const handleIconClick = () => {
    if (isMobile) return; // Prevent toast logic on mobile

    const achievementUnlocked = localStorage.getItem(LOCAL_STORAGE_KEY_ACHIEVEMENT_UNLOCKED) === 'true';

    if (!achievementUnlocked) {
      toast({
        title: (
          <div className="flex items-center gap-2">
            <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
            <span className="font-semibold">{t('toast.achievementUnlocked.title')[0] as string}</span>
          </div>
        ),
        description: t('toast.achievementUnlocked.description')[0] as string,
        className: "border-yellow-500 bg-yellow-50 dark:bg-yellow-900/30 dark:border-yellow-600",
        duration: 5000,
      });
      localStorage.setItem(LOCAL_STORAGE_KEY_ACHIEVEMENT_UNLOCKED, 'true');
    } else {
      if (Math.random() < 0.20) {
        const randomNumber = Math.floor(Math.random() * 3);
        switch (randomNumber) {
          case 0:
            toast({
              title: t('toast.subsequent.likeStickers.title')[0] as string,
              description: t('toast.subsequent.likeStickers.description')[0] as string,
              duration: 5000,
            });
            break;
          case 1:
            toast({
              title: t('toast.subsequent.joinDiscord.title')[0] as string,
              description: t('toast.subsequent.joinDiscord.description')[0] as string,
              action: (
                <ToastAction
                  altText={t('toast.subsequent.joinDiscord.buttonAltText')[0] as string}
                  onClick={() => window.open(DISCORD_SERVER_LINK, '_blank', 'noopener,noreferrer')}
                >
                  {t('toast.subsequent.joinDiscord.buttonText')}
                </ToastAction>
              ),
              duration: 7000,
              className: "pl-3"
            });
            break;
          case 2:
            toast({
              title: t('toast.subsequent.funFact.title')[0] as string,
              description: t('toast.subsequent.funFact.description')[0] as string,
              duration: 6000,
            });
            break;
        }
      }
    }
  };

  const imageUrl = "https://avatars.githubusercontent.com/u/200832410?s=200&v=4";
  const imageAlt = t('aboutSection.title')[0] as string;

  const ImageDisplay = (
    <div
      onClick={!isMobile ? handleIconClick : undefined} // Only allow click for toasts if not mobile
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
  );

  return (
    <AnimatedSection id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <TooltipProvider delayDuration={6000}>
            <Tooltip>
              {isMobile ? (
                <TooltipTrigger asChild>{ImageDisplay}</TooltipTrigger>
              ) : (
                <Dialog>
                  <TooltipTrigger asChild>
                    <DialogTrigger asChild>
                      {ImageDisplay}
                    </DialogTrigger>
                  </TooltipTrigger>
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
              )}
              <TooltipContent side="top">
                <p>{t('aboutSection.clickMeTooltip')}</p>
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
