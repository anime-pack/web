
"use client";

import { Button } from "@/components/ui/button";
import { Github, CodeXml } from "lucide-react"; // Using CodeXml for a generic "code" icon
import Link from 'next/link';
import { AnimatedSection } from "@/components/common/animated-section";

export function FeatureShowcase() {
  return (
    <AnimatedSection id="features" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 text-center">
        <CodeXml className="h-16 w-16 text-accent mx-auto mb-6" /> {/* Changed Icon */}
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Help Build Anime Pack!
        </h2>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-8">
          Anime Pack is an open-source project, and we welcome contributors of all skill levels.
          Whether you're a developer, designer, or just passionate about anime, there's a place for you.
          Help us make Anime Pack the best anime companion app out there!
        </p>
        <Button 
          asChild 
          size="lg" 
          className="bg-accent text-accent-foreground hover:bg-accent/90 transition-transform duration-300 ease-in-out hover:scale-105 shadow-lg"
        >
          <Link href="https://github.com/firebase/studio-prototyper-example" target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-5 w-5" /> {/* Added Github Icon to button */}
            Contribute on GitHub
          </Link>
        </Button>
      </div>
    </AnimatedSection>
  );
}
