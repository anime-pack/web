
"use client";

import { Button } from "@/components/ui/button";
import { MessagesSquare, ArrowRight } from "lucide-react"; // Changed icon to MessagesSquare
import Link from 'next/link';
import { AnimatedSection } from "@/components/common/animated-section";

export function CommunityInvitation() {
  return (
    <AnimatedSection className="py-16 md:py-24 bg-primary/30 dark:bg-primary/10">
      <div className="container mx-auto px-4 text-center">
        <MessagesSquare className="h-16 w-16 text-accent mx-auto mb-6" />
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Join Our Discord Community!
        </h2>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-8">
          Connect with fellow Anime Pack members on our official Discord server. Share your thoughts, discover new gems, get support, and stay updated with the latest news.
        </p>
        <Button 
          asChild 
          size="lg" 
          className="bg-accent text-accent-foreground hover:bg-accent/90 transition-transform duration-300 ease-in-out hover:scale-105 shadow-lg"
        >
          {/* Replace "#" with your actual Discord invite link */}
          <Link href="#" target="_blank" rel="noopener noreferrer"> 
            Join our Discord
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </AnimatedSection>
  );
}
