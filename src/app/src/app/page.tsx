import Link from "next/link";
import { Play, Sparkles } from "lucide-react";
import { MovieCard } from "@/components/movie/MovieCard";

const featuredMovies = [
  {
    id: "demo-movie",
    title: "Midnight Signal",
    description:
      "A cinematic sci-fi thriller about a mysterious broadcast from deep space.",
    posterUrl:
      "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=1200&auto=format&fit=crop",
    releaseYear: 2026,
    genre: ["Sci-Fi", "Thriller"]
  },
  {
    id: "ocean-escape",
    title: "Ocean Escape",
    description:
      "A visually stunning survival drama set in the heart of the Pacific.",
    posterUrl:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    releaseYear: 2025,
    genre: ["Adventure", "Drama"]
  }
];

export default function HomePage() {
  return (
    <div>
      <section className="relative isolate overflow-hidden px-6 py-28 sm:py-36 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,#381014,transparent_45%),linear-gradient(to_bottom,#050505,#050505)]" />

        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-muted-foreground">
            <Sparkles className="h-4 w-4 text-primary" />
            Premium streaming experience
          </div>

          <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
            Watch movies, series and premium video content.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            StreamFlix is a professional full-stack streaming platform powered
            by Next.js, Supabase, Prisma, Stripe, Zustand and HLS.js.
          </p>

          <div className="mt-10 flex items-center justify-center gap-4">
            <Link
              href="/watch/demo-movie"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-glow transition hover:scale-105"
            >
              <Play className="h-5 w-5 fill-current" />
              Start Watching
            </Link>

            <Link
              href="/movies/demo-movie"
              className="rounded-full border border-white/10 px-6 py-3 font-semibold transition hover:bg-white/10"
            >
              Browse Movies
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold">Featured Movies</h2>
            <p className="mt-2 text-muted-foreground">
              Curated titles ready for streaming.
            </p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </div>
  );
}
