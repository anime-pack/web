
"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from 'next/link';
import { AnimatedSection } from "@/components/common/animated-section";
import Image from 'next/image';

export function HeroSection() {
  return (
    <AnimatedSection className="bg-primary/30 dark:bg-primary/10 py-20 md:py-32 relative overflow-hidden">
      {/* Background Image - Positioned to be behind fades and content */}
      <Image
        src="https://placehold.co/1920x1080.png" 
        alt="Hero background image"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0 opacity-40" 
        data-ai-hint="abstract anime landscape"
        priority // Ensures LCP is optimized if this is above the fold
      />

      {/* Top Fade Overlay - Sits on top of the image, using the section's background color */}
      <div className="absolute top-0 inset-x-0 h-1/3 bg-gradient-to-b from-primary/30 to-transparent dark:from-primary/10 z-1" />
      
      {/* Bottom Fade Overlay - Sits on top of the image, using the section's background color */}
      <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-primary/30 to-transparent dark:from-primary/10 z-1" />

      {/* Content Layer - Must be above the image and fades */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Welcome to <span className="text-accent">Anime Pack</span>
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto mb-10">
          Your ultimate destination for discovering, organizing, and enjoying anime. Dive into a world of endless entertainment, personalized just for you.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button 
            asChild 
            size="lg" 
            className="bg-accent text-accent-foreground hover:bg-accent/90 transition-transform duration-300 ease-in-out hover:scale-105 shadow-lg"
          >
            <Link href="#features">
              Explore Features
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          {/* Trailer Button Removed */}
        </div>
         {/* Old image/video placeholder div removed */}
      </div>
    </AnimatedSection>
  );
}
