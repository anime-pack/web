"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle } from "lucide-react";
import Link from 'next/link';
import { AnimatedSection } from "@/components/common/animated-section";
import Image from 'next/image';

export function HeroSection() {
  return (
    <AnimatedSection className="bg-primary/30 dark:bg-primary/10 py-20 md:py-32">
      <div className="container mx-auto px-4 text-center">
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
          <Button 
            variant="outline" 
            size="lg" 
            className="border-accent text-accent hover:bg-accent/10 transition-transform duration-300 ease-in-out hover:scale-105 shadow-lg"
          >
            <PlayCircle className="mr-2 h-5 w-5" />
            Watch Trailer
          </Button>
        </div>
         <div className="mt-16 relative aspect-video max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl">
            <Image 
                src="https://placehold.co/1280x720.png" 
                alt="Anime Pack promotional video placeholder"
                layout="fill"
                objectFit="cover"
                data-ai-hint="anime montage"
                className="transform transition-transform duration-500 hover:scale-105"
            />
             <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <PlayCircle className="h-20 w-20 text-white/80 hover:text-white cursor-pointer transition-colors" />
            </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
