import { HeroSection } from '@/components/landing/hero-section';
import { FuturePlansSection } from '@/components/landing/future-plans-section';
import { FeatureShowcase } from '@/components/landing/feature-showcase';
import { CommunityInvitation } from '@/components/landing/community-invitation';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center">
      <HeroSection />
      <FuturePlansSection />
      <FeatureShowcase />
      <CommunityInvitation />
    </div>
  );
}
