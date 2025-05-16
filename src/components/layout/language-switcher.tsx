// @/components/layout/language-switcher.tsx
"use client";

import * as React from "react";
import { Check, Languages } from "lucide-react";
import { useTranslations } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

// Simplified SVGs for flags
const USFlag = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" viewBox="0 0 20 15" className="mr-2 h-4 w-5 rounded-sm">
    <rect width="20" height="15" fill="#fff"/>
    <rect width="20" height="3" fill="#b22234"/>
    <rect width="20" height="3" y="6" fill="#b22234"/>
    <rect width="20" height="3" y="12" fill="#b22234"/>
    <rect width="9" height="9" fill="#3c3b6e"/>
  </svg>
);

const BrazilFlag = () => (
 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" viewBox="0 0 70 49" className="mr-2 h-4 w-5 rounded-sm">
    <rect width="70" height="49" fill="#009739"/>
    <path d="M35 3.5L66.5 24.5L35 45.5L3.5 24.5L35 3.5Z" fill="#fedd00"/>
    <circle cx="35" cy="24.5" r="12.25" fill="#002776"/>
  </svg>
);


export function LanguageSwitcher() {
  const { language, setLanguage, t } = useTranslations();

  const languages = [
    { code: "en" as const, label: t('header.english'), Flag: USFlag },
    { code: "pt-BR" as const, label: t('header.portugueseBrazil'), Flag: BrazilFlag },
  ];

  const CurrentFlag = languages.find(lang => lang.code === language)?.Flag || Languages;


  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="h-9 w-9 border-border/60 hover:border-border">
          <CurrentFlag />
          <span className="sr-only">{t('header.language')}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>{t('header.language')}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={cn("flex items-center cursor-pointer", language === lang.code && "bg-accent/50")}
          >
            <lang.Flag />
            <span className="flex-grow">{lang.label}</span>
            {language === lang.code && <Check className="ml-2 h-4 w-4" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
