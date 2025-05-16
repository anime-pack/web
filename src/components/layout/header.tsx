
import { Rocket } from 'lucide-react';
import Link from 'next/link';
import { ThemeToggle } from '@/components/layout/theme-toggle';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Rocket className="h-6 w-6 text-accent" />
          <span className="font-bold text-xl">Anime Pack</span>
        </Link>
        <div className="ml-auto flex items-center space-x-4">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
