
// @/lib/i18n/index.tsx
"use client";

import type { ReactNode } from 'react';
import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { enTranslations, type Translations } from './locales/en';
import { ptBRTranslations } from './locales/pt-BR';

type Language = 'en' | 'pt-BR';

// Helper function to get nested value from an object using a dot-separated path
const getNestedValue = (obj: any, path: string): string | undefined => {
  const keys = path.split('.');
  let current = obj;
  for (const key of keys) {
    if (current && typeof current === 'object' && key in current) {
      current = current[key];
    } else {
      return undefined; // Path not found or not an object
    }
  }
  return typeof current === 'string' ? current : undefined; // Return only if the final value is a string
};

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string, replacements?: Record<string, string | number | ReactNode>) => ReactNode[]; // key is now string
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

  const t = useCallback((key: string, replacements?: Record<string, string | number | ReactNode>): ReactNode[] => {
    const currentTranslations = translationsMap[language];
    const fallbackTranslations = translationsMap['en'];

    let translationString = getNestedValue(currentTranslations, key) || getNestedValue(fallbackTranslations, key);

    if (typeof translationString !== 'string') {
      // If the key is not found or doesn't resolve to a string, return the key itself.
      return [key];
    }

    // Now, translationString is definitely a string.
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
        if (placeholder in replacements) {
             const replacementValue = replacements[placeholder];
             if (typeof replacementValue === 'string' || typeof replacementValue === 'number') {
                parts.push(String(replacementValue));
             } else {
                // Ensure React elements have a key if they are part of a list
                parts.push(React.isValidElement(replacementValue) ? React.cloneElement(replacementValue, { key: `rep-${placeholder}-${parts.length}` }) : replacementValue);
             }
        } else {
            parts.push(match[0]); // Keep placeholder if no replacement found
        }
        lastIndex = placeholderRegex.lastIndex;
    }

    if (lastIndex < translationString.length) {
        parts.push(translationString.substring(lastIndex));
    }

    return parts.length > 0 ? parts : [translationString]; // Ensure an array is always returned, even if empty (though unlikely with a found string)
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
