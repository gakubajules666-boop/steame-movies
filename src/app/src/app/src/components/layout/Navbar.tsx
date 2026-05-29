import Link from "next/link";
import { Clapperboard } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 font-bold">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary">
            <Clapperboard className="h-5 w-5" />
          </span>
          <span>StreamFlix</span>
        </Link>

        <div className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          <Link href="/" className="transition hover:text-white">
            Home
          </Link>
          <Link href="/movies/demo-movie" className="transition hover:text-white">
            Movies
          </Link>
          <Link href="/watch/demo-movie" className="transition hover:text-white">
            Watch
          </Link>
        </div>

        <Link
          href="/api/stripe/checkout"
          className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-zinc-200"
        >
          Subscribe
        </Link>
      </nav>
    </header>
  );
}
