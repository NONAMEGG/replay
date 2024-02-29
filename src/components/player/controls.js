import './style.css'
import { useState, useEffect } from 'react';




const Controls = ({ audioRef }) => {
  
  const [isPlaying, setIsPlaying] = useState(false);
  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  }

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, audioRef]);

  return (
    <div className="controls_wrapper">
      <div className="controls">
        <button>
        <img src="/icons/PrevTreck.png" alt="" />
        </button>
        <button>
        <img src="/icons/PrevTreck.png" alt="" />
        </button>

        <button onClick={togglePlayPause}>
          {isPlaying ? <img src="/icons/PauseMusic.png" alt="" /> : 
          <img src="/icons/PlayMusic.png" alt="" />}
        </button>
        <button>
        <img src="/icons/NextTreck.png" alt="" />
        </button>
        <button>
        <img src="/icons/NextTreck.png" alt="" />

        </button>
      </div>
    </div>
  );
};


export default Controls;