import './style.css'

const DisplayTrack = ( {currentTrack, audioRef} ) => {
    return <audio src={currentTrack.src} ref={audioRef}/>
  }
  export default DisplayTrack