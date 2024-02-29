import React, { Suspense } from 'react'
import { useState } from 'react';
import { tracks } from '../data/tracks';
import './style.css'

const Controls = React.lazy(() => import('./controls'))
const DisplayTrack = React.lazy(() => import('./displaytrack'))
const ProgressBar = React.lazy(() => import('./progressbar'))


const Player =() => {
    const [currentTrack, setCurrentTrack] = useState(tracks[0]);
    return (
        <>
            <div className="player__container">
                
                <div className="player">
                <audio src=""controls></audio>
                <Controls></Controls>    
                    <DisplayTrack currentTrack={currentTrack}></DisplayTrack> 
                    <ProgressBar></ProgressBar>
                </div>

            </div>
        </>
    )
}

export default Player