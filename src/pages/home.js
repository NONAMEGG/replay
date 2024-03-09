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


    return (
        <>
        <input type="text" placeholder='title'/>
        <input type="text" placeholder='src'/>
        <input type="text" placeholder='author'/>
        <input type="text" placeholder='srthumbnaillink'/>
        <input type="button" value="submit" />
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