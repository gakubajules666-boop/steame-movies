"use client";

import Hls from "hls.js";
import { useEffect, useRef } from "react";
import { usePlayerStore } from "@/store/player-store";

type HlsPlayerProps = {
  src: string;
  poster?: string;
};

export function HlsPlayer({ src, poster }: HlsPlayerProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const setPlaying = usePlayerStore((state) => state.setPlaying);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    let hls: Hls | null = null;

    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;
    } else if (Hls.isSupported()) {
      hls = new Hls({
        enableWorker: true,
        lowLatencyMode: true
      });

      hls.loadSource(src);
      hls.attachMedia(video);
    }

    return () => {
      hls?.destroy();
    };
  }, [src]);

  return (
    <video
      ref={videoRef}
      poster={poster}
      controls
      playsInline
      className="aspect-video w-full rounded-2xl bg-black shadow-2xl"
      onPlay={() => setPlaying(true)}
      onPause={() => setPlaying(false)}
    />
  );
}
