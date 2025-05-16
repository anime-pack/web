"use client";

import { Button } from "@/components/ui/button";
import { UsersRound, ArrowRight } from "lucide-react";
import Link from 'next/link';
import { AnimatedSection } from "@/components/common/animated-section";

export function CommunityInvitation() {
  return (
    <AnimatedSection className="py-16 md:py-24 bg-primary/30 dark:bg-primary/10">
      <div className="container mx-auto px-4 text-center">
        <UsersRound className="h-16 w-16 text-accent mx-auto mb-6" />
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Join Our Vibrant Community!
        </h2>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-8">
          Become a part of the Anime Pack family. Share your thoughts, discover new gems, and connect with anime fans from around the globe.
        </p>
        <Button 
          asChild 
          size="lg" 
          className="bg-accent text-accent-foreground hover:bg-accent/90 transition-transform duration-300 ease-in-out hover:scale-105 shadow-lg"
        >
          <Link href="/community"> {/* Placeholder link */}
            Join Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </AnimatedSection>
  );
}
