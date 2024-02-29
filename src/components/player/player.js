import React, { Suspense } from 'react'
import { useRef, useState } from 'react';
import { tracks } from '../data/tracks';
import './style.css'

const Controls = React.lazy(() => import('./controls'))
const DisplayTrack = React.lazy(() => import('./displaytrack'))
const ProgressBar = React.lazy(() => import('./progressbar'))


const Player =() => {
    
    const audioRef = useRef()
    const [currentTrack, setCurrentTrack] = useState(tracks[0]);
    return (
        <>
            <div className="player__container">
                
                <div className="player">
                <Controls audioRef={audioRef}></Controls>    
                    <DisplayTrack currentTrack={currentTrack}
                    audioRef={audioRef}></DisplayTrack> 
                    <ProgressBar></ProgressBar>
                </div>

            </div>
        </>
    )
}

export default Player