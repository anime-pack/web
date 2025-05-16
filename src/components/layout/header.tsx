
"use client";

import { Github } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { ThemeToggle } from '@/components/layout/theme-toggle';
import { Button } from '@/components/ui/button';
import { LanguageSwitcher } from '@/components/layout/language-switcher';
import { useTranslations } from '@/lib/i18n/index.tsx';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { FaDiscord } from 'react-icons/fa';

export function Header() {
  const { t, translations } = useTranslations();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center px-4">
        <TooltipProvider delayDuration={5000}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href="/" className="flex items-center space-x-2">
                <Image
                  src="/32x32.png"
                  alt={t('common.appName')[0] as string}
                  width={32}
                  height={32}
                />
                <span
                  className="font-bold text-xl header-app-name"
                  data-text-content={translations.common.appName as string}
                >
                  {translations.common.appName}
                </span>
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>❤️</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        
        <TooltipProvider delayDuration={1000}>
          <div className="ml-auto flex items-center space-x-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <LanguageSwitcher />
              </TooltipTrigger>
              <TooltipContent>
                <p>{t('header.language')[0]}</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon" asChild className="h-9 w-9">
                  <Link href="https://github.com/anime-pack" target="_blank" rel="noopener noreferrer">
                    <Github className="h-[1.2rem] w-[1.2rem]" />
                    <span className="sr-only">{t('header.srGitHub')[0]}</span>
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{t('header.srGitHub')[0]}</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon" asChild className="h-9 w-9">
                  <Link href="https://discord.gg/Nv8UXpB36y" target="_blank" rel="noopener noreferrer">
                    <FaDiscord className="h-[1.2rem] w-[1.2rem]" />
                    <span className="sr-only">{t('header.srDiscord')[0]}</span>
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{t('header.srDiscord')[0]}</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <ThemeToggle />
              </TooltipTrigger>
              <TooltipContent align="end">
                <p>{t('header.srThemeToggle')[0]}</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </TooltipProvider>
      </div>
    </header>
  );
}
