
import { HeroSection } from '@/components/landing/hero-section';
import { AboutSection } from '@/components/landing/about-section';
import { FuturePlansSection } from '@/components/landing/future-plans-section';
import { SponsorsSection } from '@/components/landing/sponsors-section';
import { FeatureShowcase } from '@/components/landing/feature-showcase';
import { CommunityInvitation } from '@/components/landing/community-invitation';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center">
      <HeroSection />
      <AboutSection />
      <FuturePlansSection />
      <SponsorsSection />
      <FeatureShowcase />
      <CommunityInvitation />
    </div>
  );
}
