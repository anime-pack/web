
"use client"; // Add this directive

import { Github, MessagesSquare } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { ThemeToggle } from '@/components/layout/theme-toggle';
import { Button } from '@/components/ui/button';
import { LanguageSwitcher } from '@/components/layout/language-switcher';
import { useTranslations } from '@/lib/i18n';

export function Header() {
  const { t, translations } = useTranslations();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center px-4">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="https://placehold.co/24x24.png"
            alt={t('common.appName') as string}
            width={24}
            height={24}
            data-ai-hint="app logo"
            className="text-accent" // Keeps a similar visual space if needed, can be removed
          />
          <span className="font-bold text-xl">{translations.common.appName}</span>
        </Link>
        <div className="ml-auto flex items-center space-x-2">
          <LanguageSwitcher />
          <Button variant="outline" size="icon" asChild className="h-9 w-9">
            <Link href="https://github.com/firebase/studio-prototyper-example" target="_blank" rel="noopener noreferrer">
              <Github className="h-[1.2rem] w-[1.2rem]" />
              <span className="sr-only">{t('header.srGitHub')}</span>
            </Link>
          </Button>
          <Button variant="outline" size="icon" asChild className="h-9 w-9">
            {/* Replace "#" with your actual Discord invite link */}
            <Link href="#" target="_blank" rel="noopener noreferrer">
              <MessagesSquare className="h-[1.2rem] w-[1.2rem]" />
              <span className="sr-only">{t('header.srDiscord')}</span>
            </Link>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
