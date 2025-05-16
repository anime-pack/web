
"use client";

import Image from "next/image";
import { AnimatedSection } from "@/components/common/animated-section";
import { useTranslations } from "@/lib/i18n";

export function AboutSection() {
  const { t } = useTranslations();
  return (
    <AnimatedSection id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="relative mx-auto mb-6 h-24 w-24 md:h-28 md:w-28 overflow-hidden rounded-lg shadow-md">
            <Image
              src="https://placehold.co/100x100.png"
              alt={t('aboutSection.title') as string}
              layout="fill"
              objectFit="cover"
              data-ai-hint="fox box"
              className="transform transition-transform duration-500 hover:scale-110"
            />
          </div>
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
