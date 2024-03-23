import React, { Suspense, useEffect, useState} from 'react'
import {tracks} from '../components/data/tracks'
import { supabase } from './lib/supabaseClient'
import '../App.css'

const Header = React.lazy(() => import('../components/header'))
const Player = React.lazy(() => import('../components/player/player'))
const Popup = React.lazy(() => import('../components/Popup/popup'))
const Main = React.lazy(() => import('../components/main/main_section'))

const Home =() => {
  const [fetcherError, setFetchError] = useState(null)
  const [accounts, setAccounts] = useState(null)

  useEffect (() => {
    const fatchAccounts = async () => {
      const{ data, error} = await supabase
      .from('accounts')
      .select()

      if (error){
        setFetchError('Could not fetch the accounts')
        setAccounts(null)
        console.log(error)
      }
      if (data){
        setAccounts(data)
        setFetchError(null)
      }
    }

    fatchAccounts()
  }, [])

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

        {/*IF ERROR == NULL */}
        {fetcherError && (<p>{fetcherError}</p>)}
        {accounts && (
          <div>
            {accounts.map(account => (
              <p>{account.login}</p>
            ))}
          </div>
        )}
        {/* TEST */}
        
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