import React, { Suspense } from 'react'
import {useState} from 'react'
import {tracks} from '../components/data/tracks'

const Header = React.lazy(() => import('../components/header'))
const Player = React.lazy(() => import('../components/player/player'))
const Popup = React.lazy(() => import('../components/Popup/popup'))
const Main = React.lazy(() => import('../components/main/main_section'))

const Home =() => {
  const [popupActive, setPopupActive] = useState(true)

  const [trackIndex, setTrackIndex] = useState(0)
  const [currentTrack, setCurrentTrack] = useState(tracks[trackIndex])
  const [isPlaying, setIsPlaying] = useState(false)


  const [track, setTrack] = useState(false);

  function getTracks() {
    fetch('http://localhost:3001')
      .then(response => {
        return response.text();
      })
      .then(data => {
        setTrack(data);
      });
  }


  const addTracks =() => {
    var title = document.getElementById('title').value
    var src = document.getElementById('src').value
    var author = document.getElementById('author').value
    var thumbnlnk = document.getElementById('thumbnaillink').value

    fetch('http://localhost:3001/tracks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({title, src, author, thumbnlnk}),
    })
      .then(response => {
        return response.text();
      })
      .then(data => {
        alert(data);
        getTracks();
      });


  }

    return (
        <>
        <input id='title' type="text" placeholder='title'/>
        <input id='src' type="text" placeholder='src'/>
        <input id='author' type="text" placeholder='author'/>
        <input id='thumbnaillink' type="text" placeholder='srthumbnaillink'/>
        <input type="button" value="submit" onClick={addTracks}/>
        <Popup active={popupActive} setActive={setPopupActive} />
        <Suspense fallback={<div>Loading/////</div>}>
        <Header></Header>
        </Suspense>
        <Main setTrackIndex={setTrackIndex}
           setCurrentTrack={setCurrentTrack} setIsPlaying={setIsPlaying}></Main>
        <Suspense fallback={<div>Loading/////</div>}>
        <Player active={popupActive} setActive={setPopupActive}
         trackIndex={trackIndex} setTrackIndex={setTrackIndex}
          currentTrack={currentTrack} setCurrentTrack={setCurrentTrack} isPlaying={isPlaying} setIsPlaying={setIsPlaying}></Player>
        </Suspense>
    </>
    )
}



export default Home