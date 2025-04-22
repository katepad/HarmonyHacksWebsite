import React, { createContext, useState, useRef, useEffect } from 'react';
import musicData from '../data/Music.json';

type Music = typeof musicData[number];

interface MusicContextType {
    currentTrack: Music;
    isPlaying: boolean;
    volume: number;
    play: () => void;
    pause: () => void;
    next: () => void;
    setVolume: (v: number) => void;
    audioRef: React.RefObject<HTMLAudioElement | null>; // ← fix here
}  

export const MusicContext = createContext<MusicContextType | null>(null);

export const MusicProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [trackIndex, setTrackIndex] = useState(() => Number(localStorage.getItem('trackIndex')) || 0);
  const [isPlaying, setIsPlaying] = useState(() => localStorage.getItem('isPlaying') === 'true');
  const [volume, setVolumeState] = useState(() => Number(localStorage.getItem('volume')) || 0.5);
  const audioRef = useRef<HTMLAudioElement>(null);

  const currentTrack = musicData[trackIndex];

  useEffect(() => {
    localStorage.setItem('trackIndex', String(trackIndex));
    localStorage.setItem('volume', String(volume));
    localStorage.setItem('isPlaying', String(isPlaying));
  }, [trackIndex, volume, isPlaying]);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = volume;
      if (isPlaying) {
        audio.play().catch(() => {});
      } else {
        audio.pause();
      }
    }
  }, [volume, isPlaying, trackIndex]);

  useEffect(() => {
  const audio = audioRef.current;
  if (!audio) return;

  const handleUserInteraction = () => {
    if (isPlaying) {
      audio.play().catch(() => {});
    }
    window.removeEventListener('click', handleUserInteraction);
  };

  window.addEventListener('click', handleUserInteraction);

  return () => {
    window.removeEventListener('click', handleUserInteraction);
  };
}, [isPlaying]);

  const play = () => setIsPlaying(true);
  const pause = () => setIsPlaying(false);
  const next = () => setTrackIndex((prev) => (prev + 1) % musicData.length);
  const setVolume = (v: number) => setVolumeState(v);

  return (
    <MusicContext.Provider value={{ currentTrack, isPlaying, play, pause, next, volume, setVolume, audioRef }}>
      <audio
        ref={audioRef}
        src={`/assets/music/${currentTrack.filename}`}
        loop
        autoPlay={isPlaying}
      />
      {children}
    </MusicContext.Provider>
  );
};
