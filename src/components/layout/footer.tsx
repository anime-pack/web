
export function Footer() {
  return (
    <footer className="py-6 md:px-8 md:py-0 border-t border-border/40">
      <div className="container flex flex-col items-center justify-center gap-4 md:h-20 md:flex-row">
        <div className="flex flex-col items-center text-center">
          <p className="text-balance text-sm leading-loose text-muted-foreground">
            © {new Date().getFullYear()} Anime Pack. All rights reserved.
          </p>
          <p className="text-balance text-xs leading-loose text-muted-foreground/80 mt-1">
            Anime Pack is an independent project and is not affiliated with, nor endorsed by, MyAnimeList or Discord.
          </p>
        </div>
      </div>
    </footer>
  );
}
