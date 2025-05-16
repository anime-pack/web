
import { Package, Github, MessagesSquare } from 'lucide-react'; // Changed Rocket to Package
import Link from 'next/link';
import { ThemeToggle } from '@/components/layout/theme-toggle';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center px-4">
        <Link href="/" className="flex items-center space-x-2">
          <Package className="h-6 w-6 text-accent" /> {/* Changed Rocket to Package */}
          <span className="font-bold text-xl">Anime Pack</span>
        </Link>
        <div className="ml-auto flex items-center space-x-2">
          <Button variant="outline" size="icon" asChild>
            <Link href="https://github.com/firebase/studio-prototyper-example" target="_blank" rel="noopener noreferrer">
              <Github className="h-[1.2rem] w-[1.2rem]" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
          <Button variant="outline" size="icon" asChild>
            {/* Replace "#" with your actual Discord invite link */}
            <Link href="#" target="_blank" rel="noopener noreferrer">
              <MessagesSquare className="h-[1.2rem] w-[1.2rem]" />
              <span className="sr-only">Discord</span>
            </Link>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

