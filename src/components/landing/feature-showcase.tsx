"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { LibraryBig, ListChecks, Users, Search, Bell } from "lucide-react";
import Image from "next/image";
import { AnimatedSection } from "@/components/common/animated-section";

const features = [
  {
    icon: <LibraryBig className="h-10 w-10 text-accent mb-4" />,
    title: "Vast Library Access",
    description: "Explore thousands of anime series and movies, with new titles added regularly to keep your watchlist fresh.",
    imageSrc: "https://placehold.co/600x400.png",
    imageAlt: "Vast anime library",
    aiHint: "anime library",
  },
  {
    icon: <ListChecks className="h-10 w-10 text-accent mb-4" />,
    title: "Personalized Tracking",
    description: "Effortlessly track watched episodes, manage your watchlist, and get personalized recommendations.",
    imageSrc: "https://placehold.co/600x400.png",
    imageAlt: "Personalized anime tracking",
    aiHint: "anime watchlist",
  },
  {
    icon: <Users className="h-10 w-10 text-accent mb-4" />,
    title: "Community Hub",
    description: "Connect with fellow fans, join discussions, share reviews, and discover hidden gems together.",
    imageSrc: "https://placehold.co/600x400.png",
    imageAlt: "Anime community hub",
    aiHint: "anime community",
  },
  {
    icon: <Search className="h-10 w-10 text-accent mb-4" />,
    title: "Advanced Search & Filters",
    description: "Quickly find exactly what you're looking for with powerful search and intuitive filtering options by genre, year, and more.",
    imageSrc: "https://placehold.co/600x400.png",
    imageAlt: "Advanced anime search",
    aiHint: "anime search",
  },
  {
    icon: <Bell className="h-10 w-10 text-accent mb-4" />,
    title: "Release Notifications",
    description: "Stay updated with notifications for new episode releases of your favorite animes and never miss out.",
    imageSrc: "https://placehold.co/600x400.png",
    imageAlt: "Anime release notifications",
    aiHint: "anime notification",
  },
];

export function FeatureShowcase() {
  return (
    <AnimatedSection id="features" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Why Choose Anime Pack?</h2>
          <p className="text-lg text-foreground/70 mt-2 max-w-2xl mx-auto">
            We provide a seamless and enriching experience for every anime enthusiast.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <AnimatedSection key={index} delay={`delay-${index * 100}ms`}>
              <Card className="h-full flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1">
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
