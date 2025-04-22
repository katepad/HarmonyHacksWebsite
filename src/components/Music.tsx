import React, { useContext } from 'react';
import { MusicContext } from '../context/MusicContext';
import '../styles/Music.css';


const Music: React.FC = () => {
  const musicCtx = useContext(MusicContext);


  if (!musicCtx) return null;


  const { currentTrack, isPlaying, play, pause, next, volume, setVolume } = musicCtx;


  return (
    <div className="music-player">
      <div className="music-title">{currentTrack.title}</div>
      <div className="controls">
        <button onClick={isPlaying ? pause : play}>{isPlaying ? 'Pause' : 'Play'}</button>
        <button onClick={next}>Next</button>
      </div>
      <div className="volume-control">
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={(e) => setVolume(parseFloat(e.target.value))}
        />
      </div>
    </div>
  );
};


export default Music;