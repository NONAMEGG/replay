import './style.css'
import { useState, useEffect, useRef, useCallback } from 'react';




const Controls = ({ audioRef, progressBarRef, duration, setTimeProgress, tracks,
  trackIndex,
  setTrackIndex,
  setCurrentTrack }) => {

    const [volume, setVolume] = useState(60);
  
  const [isPlaying, setIsPlaying] = useState(false);
  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  }

  const [muteVolume, setMuteVolume] = useState(false);

  const repeat = useCallback(() => {
    const currentTime = audioRef.current.currentTime;
    setTimeProgress(currentTime);
    progressBarRef.current.value = currentTime;
    progressBarRef.current.style.setProperty(
      '--range-progress',
      `${(progressBarRef.current.value / duration) * 100}%`
    );

    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [audioRef, duration, progressBarRef, setTimeProgress]);


  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, audioRef]);

  const playAnimationRef = useRef();

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [isPlaying, audioRef, repeat]);

  
  const skipForward = () => {
    audioRef.current.currentTime += 15;
  };
  
  const skipBackward = () => {
    audioRef.current.currentTime -= 15;
  };
  
  const handlePrevious = () => {
    if (trackIndex === 0) {
      let lastTrackIndex = tracks.length - 1;
      setTrackIndex(lastTrackIndex);
      setCurrentTrack(tracks[lastTrackIndex]);
    } else {
      setTrackIndex((prev) => prev - 1);
      setCurrentTrack(tracks[trackIndex - 1]);
    }
  };

  const handleNext = () => {
    if (trackIndex >= tracks.length - 1) {
      setTrackIndex(0);
      setCurrentTrack(tracks[0]);
    } else {
      setTrackIndex((prev) => prev + 1);
      setCurrentTrack(tracks[trackIndex + 1]);
    }
  };

  useEffect(() => {
    if (audioRef) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume, audioRef]);

  return (
    <div className="controls_wrapper">
      <div className="controls">
        <button onClick={handlePrevious}>
        <img src="/icons/PrevTreck.png" alt="" />
        </button>
        <button onClick={skipBackward}>
        <img src="/icons/PrevTreck.png" alt="" />
        </button>

        <button onClick={togglePlayPause}>
          {isPlaying ? <img src="/icons/PauseMusic.png" alt="" /> : 
          <img src="/icons/PlayMusic.png" alt="" />}
        </button>
        <button onClick={skipForward}>
        <img src="/icons/NextTreck.png" alt="" />
        </button>
        <button onClick={handleNext}>
        <img src="/icons/NextTreck.png" alt="" />

        </button>
        
      </div>
      <input type="range" min={0} max={100} value={volume}
  onChange={(e) => setVolume(e.target.value)} style={{
    background: `linear-gradient(to right, #f50 ${volume}%, #ccc ${volume}%)`,
  }} />
    </div>
  );
};


export default Controls;