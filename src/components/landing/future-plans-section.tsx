
"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Wand2, UsersRound, Smartphone, Paintbrush, Telescope } from "lucide-react";
import Image from "next/image";
import { AnimatedSection } from "@/components/common/animated-section";

const plannedFeatures = [
  {
    icon: <Wand2 className="h-10 w-10 text-accent mb-4" />,
    title: "AI-Powered Recommendations",
    description: "Get even smarter anime suggestions based on your evolving tastes, powered by advanced AI.",
    imageSrc: "https://placehold.co/600x400.png",
    imageAlt: "AI Recommendations",
    aiHint: "artificial intelligence brain",
  },
  {
    icon: <UsersRound className="h-10 w-10 text-accent mb-4" />,
    title: "Expanded Social Features",
    description: "More ways to connect, share lists, join group watches, and participate in community events.",
    imageSrc: "https://placehold.co/600x400.png",
    imageAlt: "Expanded Social Features",
    aiHint: "social connection network",
  },
  {
    icon: <Smartphone className="h-10 w-10 text-accent mb-4" />,
    title: "Native Mobile Apps",
    description: "Take Anime Pack on the go with dedicated iOS and Android applications for a seamless mobile experience.",
    imageSrc: "https://placehold.co/600x400.png",
    imageAlt: "Native Mobile Apps",
    aiHint: "mobile app interface",
  },
  {
    icon: <Paintbrush className="h-10 w-10 text-accent mb-4" />,
    title: "Customizable Profiles",
    description: "Personalize your user profile with unique themes, badges, and showcase your favorite anime achievements.",
    imageSrc: "https://placehold.co/600x400.png",
    imageAlt: "Customizable Profiles",
    aiHint: "profile customization options",
  },
  {
    icon: <Telescope className="h-10 w-10 text-accent mb-4" />,
    title: "Advanced Genre Tagging",
    description: "Discover niche genres and explore anime with a highly detailed and community-curated tagging system.",
    imageSrc: "https://placehold.co/600x400.png",
    imageAlt: "Advanced Genre Tagging",
    aiHint: "data graph connections",
  },
];

export function FuturePlansSection() {
  return (
    <AnimatedSection id="future-plans" className="py-16 md:py-24 bg-primary/10 dark:bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">What's Coming Next?</h2>
          <p className="text-lg text-foreground/70 mt-2 max-w-2xl mx-auto">
            We're constantly working to make Anime Pack even better. Here's a sneak peek at what we're planning.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plannedFeatures.map((feature, index) => (
            <AnimatedSection key={index} delay={`delay-${index * 100}ms`}>
              <Card className="h-full flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1 bg-card">
                <CardHeader className="items-center text-center p-6">
                  {feature.icon}
                  <CardTitle className="text-2xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col p-6 pt-0">
                  <div className="relative w-full aspect-[3/2] rounded-md overflow-hidden mb-4">
                    <Image
                      src={feature.imageSrc}
                      alt={feature.imageAlt}
                      layout="fill"
                      objectFit="cover"
                      data-ai-hint={feature.aiHint}
                      className="transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <CardDescription className="text-base text-foreground/70 text-center flex-grow">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
