import React, { useContext, useState } from 'react';
import { MusicContext } from '../context/MusicContext';
import { FaPlay, FaPause, FaMusic, FaMinus, FaInfo } from 'react-icons/fa'; //icons for pause and play
import { motion, AnimatePresence } from 'framer-motion'; // for the minimization animations
import { Link } from 'react-router-dom'; //to link to page about music
import '../styles/Music.css';


const Music: React.FC = () => {
  const musicCtx = useContext(MusicContext);
  const [minimized, setMinimized] = useState(false); //for minimizing component


  if (!musicCtx) return null;


  const { currentTrack, isPlaying, play, pause, next, previous, volume, setVolume } = musicCtx;


  return (
    <>
    <AnimatePresence>
      {minimized ? (
        <motion.button
          title = "Open Music Player"
          key="minimized"
          className="music-open-button"
          onClick={() => setMinimized(false)}
          initial={{ opacity: 0}}
          animate={{ opacity: 1}}
          exit={{ opacity: 0}}
          transition={{ type: "tween", duration: 0.1, ease: "easeOut" }}
        >
          <FaMusic />
        </motion.button>
      ) : (
        <motion.div
          key="player"
          className="music-player"
          initial={{ x: -300, y: 100, scale: 0.8, opacity: 0 }}
          animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
          exit={{ x: -300, y: 100, scale: 0.8, opacity: 0 }}
          transition={{ type: "spring", stiffness: 250, damping: 20 }} //higher stiffness = faster motion,, higher damping = less bounciness
        >
          <div className="music-player-header">
            <button title = "Minimize" className="music-player-header-button" onClick={() => setMinimized(true)}>
              <FaMinus />
            </button>
            <Link to="/aboutMusic">
              <button title = "What's this?" className="music-player-header-button">
                <FaInfo />
              </button>
            </Link>
          </div>
          <div className="music-title">{currentTrack.title}</div>
          <div className="music-artist">by {currentTrack.artist}</div>
          <div className="controls">
            <button title = "Previous" className="music-arrow-button-left" onClick={previous}>
              ♡
            </button>
            <button
              className="music-player-button" title = "Pause/Play"
              onClick={isPlaying ? pause : play}
            >
              {isPlaying ? <FaPause /> : <FaPlay />}
            </button>
            <button title = "Next" className="music-arrow-button-right" onClick={next}>
              ♡
            </button>
          </div>
          <div title = "Volume" className="volume-control">
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
}


export default Music;