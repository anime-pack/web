
// @/lib/i18n/index.ts
"use client";

import type { ReactNode } from 'react';
import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { enTranslations, type Translations } from './locales/en';
import { ptBRTranslations } from './locales/pt-BR';

type Language = 'en' | 'pt-BR';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: keyof Translations, replacements?: Record<string, string | number | ReactNode>) => string | ReactNode[];
  translations: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translationsMap: Record<Language, Translations> = {
  en: enTranslations,
  'pt-BR': ptBRTranslations,
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    const storedLang = localStorage.getItem('anime-pack-lang') as Language | null;
    if (storedLang && (storedLang === 'en' || storedLang === 'pt-BR')) {
      setLanguageState(storedLang);
    }
  }, []);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('anime-pack-lang', lang);
  }, []);

  const t = useCallback((key: keyof Translations, replacements?: Record<string, string | number | ReactNode>): string | ReactNode[] => {
    const translationString = translationsMap[language][key] || translationsMap['en'][key] || String(key);
    
    if (typeof translationString !== 'string') {
        return [String(translationString)];
    }

    if (!replacements) {
      return [translationString];
    }

    const parts: ReactNode[] = [];
    let lastIndex = 0;
    
    const placeholderRegex = /\{(\w+)\}/g;
    let match;
    
    while((match = placeholderRegex.exec(translationString)) !== null) {
        const placeholder = match[1];
        if (lastIndex < match.index) {
            parts.push(translationString.substring(lastIndex, match.index));
        }
        if (replacements && placeholder in replacements) {
             const replacementValue = replacements[placeholder];
             if (typeof replacementValue === 'string' || typeof replacementValue === 'number') {
                parts.push(String(replacementValue));
             } else {
                parts.push(React.cloneElement(replacementValue as React.ReactElement, { key: `rep-${placeholder}-${parts.length}` }));
             }
        } else {
            parts.push(match[0]); // Keep placeholder if no replacement found
        }
        lastIndex = placeholderRegex.lastIndex;
    }

    if (lastIndex < translationString.length) {
        parts.push(translationString.substring(lastIndex));
    }
    
    if (parts.length === 0 && translationString) {
        return [translationString];
    }
    return parts;
  }, [language]);

  const contextValue: LanguageContextType = {
    language,
    setLanguage,
    t,
    translations: translationsMap[language],
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslations = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useTranslations must be used within a LanguageProvider');
  }
  return context;
};
