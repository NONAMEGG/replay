import './style.css'
import { useState, useEffect, useRef, useCallback } from 'react'




const Controls = ({ audioRef, progressBarRef, duration, setTimeProgress, tracks,
  trackIndex,
  setTrackIndex,
  setCurrentTrack, isPlaying, setIsPlaying }) => {

    const [volume, setVolume] = useState(60)
  
  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev)
  }

  const [muteVolume, setMuteVolume] = useState(false)

  const repeat = useCallback(() => {
    if (audioRef.current) {

    const currentTime = audioRef.current.currentTime
    setTimeProgress(currentTime)
    progressBarRef.current.value = currentTime
    progressBarRef.current.style.setProperty(
      '--range-progress',
      `${(progressBarRef.current.value / duration) * 100}%`
    )

    if (((currentTime / duration) * 100) == 100) {
      if (trackIndex >= tracks.length - 1) {
        setTrackIndex(0)
        setCurrentTrack(tracks[0])
      } else {
        setTrackIndex((prev) => prev + 1)
        setCurrentTrack(tracks[trackIndex + 1])
      }
    }
      

    playAnimationRef.current = requestAnimationFrame(repeat)
    }
  }, [audioRef, duration, progressBarRef, setTimeProgress])

  const playAnimationRef = useRef()

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play()
    } else {
      audioRef.current.pause()
    }
    playAnimationRef.current = requestAnimationFrame(repeat)
  }, [isPlaying, audioRef, repeat])
  
  const skipForward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime += 15

    }
  }
  
  const skipBackward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime -= 15
    }
  }
  
  const handlePrevious = () => {
    if (trackIndex === 0) {
      let lastTrackIndex = tracks.length - 1
      setTrackIndex(lastTrackIndex)
      setCurrentTrack(tracks[lastTrackIndex])
    } else {
      setTrackIndex((prev) => prev - 1)
      setCurrentTrack(tracks[trackIndex - 1])
    }
  }

  const handleNext = () => {
    if (trackIndex >= tracks.length - 1) {
      setTrackIndex(0)
      setCurrentTrack(tracks[0])
    } else {
      setTrackIndex((prev) => prev + 1)
      setCurrentTrack(tracks[trackIndex + 1])
    }
  }

  useEffect(() => {
    if (audioRef) {
      audioRef.current.volume = volume / 100
    }
  }, [volume, audioRef])

  return (
    <div className="controls_wrapper">
      <div className="controls">
      <div className="volume_container">
      <input type="range" min={0} max={100} value={volume}
  onChange={(e) => setVolume(e.target.value)} style={{
    background: `linear-gradient(to right, #f50 ${volume}%, #ccc ${volume}%)`, width: `50px`, transform: `rotate(-45deg)`, 
  }} />
  </div>
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
        <div className="volume_container">
      <input type="range" min={0} max={100} value={volume}
  onChange={(e) => setVolume(e.target.value)} style={{
    background: `linear-gradient(to right, #f50 ${volume}%, #ccc ${volume}%)`, width: `50px`, transform: `rotate(45deg)`, 
  }} />
  </div>
      </div>
      
    </div>
  )
}


export default Controls