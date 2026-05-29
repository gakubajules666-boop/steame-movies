export type Movie = {
  id: string;
  title: string;
  slug: string;
  description: string;
  posterUrl: string;
  backdropUrl?: string | null;
  releaseYear: number;
  durationMins: number;
  rating?: string | null;
  genre: string[];
};

export type VideoSource = {
  id: string;
  movieId: string;
  url: string;
  quality: "SD" | "HD" | "FULL_HD" | "UHD";
  isHls: boolean;
};
