import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";

type MoviePageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function MoviePage({ params }: MoviePageProps) {
  const { id } = await params;

  const movie = {
    id,
    title: "Midnight Signal",
    description:
      "When a mysterious signal reaches Earth from deep space, a team of scientists uncovers a threat that could redefine humanity's future.",
    posterUrl:
      "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=1200&auto=format&fit=crop",
    releaseYear: 2026,
    durationMins: 128,
    genre: ["Sci-Fi", "Thriller"]
  };

  return (
    <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[360px_1fr]">
      <div className="relative aspect-[2/3] overflow-hidden rounded-3xl border border-white/10">
        <Image
          src={movie.posterUrl}
          alt={movie.title}
          fill
          className="object-cover"
          sizes="360px"
        />
      </div>

      <div>
        <p className="text-sm uppercase tracking-widest text-primary">
          {movie.genre.join(" / ")}
        </p>

        <h1 className="mt-3 text-5xl font-bold">{movie.title}</h1>

        <p className="mt-4 text-muted-foreground">
          {movie.releaseYear} · {movie.durationMins} min
        </p>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-300">
          {movie.description}
        </p>

        <Link
          href={`/watch/${movie.id}`}
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-glow transition hover:scale-105"
        >
          <Play className="h-5 w-5 fill-current" />
          Watch Now
        </Link>
      </div>
    </div>
  );
}
