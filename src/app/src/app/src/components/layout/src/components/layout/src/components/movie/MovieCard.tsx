import Image from "next/image";
import Link from "next/link";

type MovieCardProps = {
  movie: {
    id: string;
    title: string;
    description: string;
    posterUrl: string;
    releaseYear: number;
    genre: string[];
  };
};

export function MovieCard({ movie }: MovieCardProps) {
  return (
    <Link
      href={`/movies/${movie.id}`}
      className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition hover:-translate-y-1 hover:bg-white/[0.06]"
    >
      <div className="relative aspect-[2/3] overflow-hidden">
        <Image
          src={movie.posterUrl}
          alt={movie.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 25vw"
        />
      </div>

      <div className="p-4">
        <h3 className="font-semibold">{movie.title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          {movie.releaseYear} · {movie.genre.join(", ")}
        </p>
      </div>
    </Link>
  );
}
