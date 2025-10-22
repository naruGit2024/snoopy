import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <a className="mr-6 flex items-center space-x-2" href="#home">
            <span className="font-bold">🐕 Snoopy World</span>
          </a>
        </div>
        <nav className="flex items-center space-x-6 text-sm">
          <a href="#about" className="transition-colors hover:text-foreground/80">
            About
          </a>
          <a href="#personas" className="transition-colors hover:text-foreground/80">
            Personas
          </a>
          <a href="#gallery" className="transition-colors hover:text-foreground/80">
            Gallery
          </a>
          <a href="#facts" className="transition-colors hover:text-foreground/80">
            Fun Facts
          </a>
        </nav>
      </div>
    </header>
  );
}