import { create } from "zustand";

type PlayerState = {
  isPlaying: boolean;
  volume: number;
  playbackRate: number;
  setPlaying: (isPlaying: boolean) => void;
  setVolume: (volume: number) => void;
  setPlaybackRate: (playbackRate: number) => void;
};

export const usePlayerStore = create<PlayerState>((set) => ({
  isPlaying: false,
  volume: 1,
  playbackRate: 1,
  setPlaying: (isPlaying) => set({ isPlaying }),
  setVolume: (volume) => set({ volume }),
  setPlaybackRate: (playbackRate) => set({ playbackRate })
}));
