import { HlsPlayer } from "@/components/video/HlsPlayer";

type WatchPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function WatchPage({ params }: WatchPageProps) {
  const { id } = await params;

  const demoHlsUrl =
    "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8";

  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <div className="mb-6">
        <p className="text-sm uppercase tracking-widest text-primary">
          Now Playing
        </p>
        <h1 className="mt-2 text-4xl font-bold">Movie ID: {id}</h1>
      </div>

      <HlsPlayer src={demoHlsUrl} />

      <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
        <h2 className="text-xl font-semibold">Streaming Details</h2>
        <p className="mt-2 text-muted-foreground">
          This player uses HLS.js for adaptive bitrate video playback.
        </p>
      </div>
    </div>
  );
}
