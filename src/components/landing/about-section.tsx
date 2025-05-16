
"use client";

import { Info } from "lucide-react";
import { AnimatedSection } from "@/components/common/animated-section";

export function AboutSection() {
  return (
    <AnimatedSection id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Info className="h-16 w-16 text-accent mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            What is Anime Pack?
          </h2>
        </div>
        <div className="max-w-3xl mx-auto text-lg text-foreground/80 space-y-6 text-left md:text-justify">
          <p>
            Anime Pack is envisioned as a comprehensive MyAnimeList (MAL) client, with a strong emphasis on providing a rich desktop application experience. It's designed not just for browsing anime and manga information, but to be a vibrant social hub for enthusiasts of anime, manga, manhwa, and the broader otaku culture.
          </p>
          <p>
            Our goal is to create a dedicated space where fans can connect, discuss their favorite series, and share their passion. Anime Pack aims to bridge the gap between content discovery and community interaction, making it easier than ever to dive deep into the anime niche.
          </p>
          <p>
            You'll be able to connect your MyAnimeList account seamlessly, showcase your personalized profile, track your progress, and discover new titles. And this is just the beginning – we have a lot more exciting features planned for future updates to make Anime Pack your ultimate companion for all things anime!
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}
