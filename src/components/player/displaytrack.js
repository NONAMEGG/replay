import './style.css'
import '../Popup/popup.js'
import { useState } from 'react'


const DisplayTrack = ( { currentTrack, audioRef, setDuration, progressBarRef, active, setActive } ) => {

  const onLoadedMetadata = () => {
    const seconds = audioRef.current.duration
    setDuration(seconds)
    progressBarRef.current.max = seconds
  }

  const changeState =() => {
    setActive((prev) => !prev)
console.log(active)
  }
    return (
      <>
      <div className='dtrack' onClick={changeState}>
        <audio src={currentTrack.src} ref={audioRef} onLoadedMetadata={onLoadedMetadata} />
        <div className="audio_info">
          <div className="audio_image">
            {currentTrack.thumbnail ? (
              <img src={currentTrack.thumbnail} alt="audio avatar" />
            ) : (
              <div className="icon_wrapper">
                <span className="audio_icon">
                  <img src="/icons/PrevTreck.png" alt="" />
                </span>
              </div>
            )}
          </div>
          <div className="text">
            <p className="title">{currentTrack.title}</p>
            <p>{currentTrack.author}</p>
          </div>
        </div>
      </div>
      </>
    )
  }
  export default DisplayTrack