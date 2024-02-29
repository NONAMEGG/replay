import './style.css'
import ShowPopup from '../Popup/popup.js'

const DisplayTrack = ( { currentTrack, audioRef, setDuration, progressBarRef } ) => {

  const onLoadedMetadata = () => {
    const seconds = audioRef.current.duration;
    setDuration(seconds);
    progressBarRef.current.max = seconds;
  };

    return (
      <>
      <div className='dtrack' onClick={ShowPopup}>
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