import React, { useContext } from 'react';
import { MusicContext } from '../context/MusicContext';
import { FaPlay, FaPause } from 'react-icons/fa'; //icons for pause and play
import '../styles/Music.css';


const Music: React.FC = () => {
  const musicCtx = useContext(MusicContext);


  if (!musicCtx) return null;


  const { currentTrack, isPlaying, play, pause, next, previous, volume, setVolume } = musicCtx;


  return (
    <div className="music-player">
      <div className="music-title">{currentTrack.title}</div>
      <div className="music-artist">by {currentTrack.artist}</div>
      <div className="controls">
        <button className="music-arrow-button-left" onClick={previous}>♡</button>
        <button className="play-pause-button" onClick={isPlaying ? pause : play}>{isPlaying ? <FaPause/> : <FaPlay/>}</button>
        <button className="music-arrow-button-right" onClick={next}>♡</button>
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

