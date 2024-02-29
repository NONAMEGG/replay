import React, { Suspense } from 'react'
import './style.css'

const Controls = React.lazy(() => import('./controls'))
const DisplayTrack = React.lazy(() => import('./displaytrack'))
const ProgressBar = React.lazy(() => import('./progressbar'))

const Player =() => {
    return (
        <>
            <div className="player__container">
                
                <div className="player">
                <Controls></Controls>    
                    <DisplayTrack></DisplayTrack> 
                    <ProgressBar></ProgressBar>
                </div>

            </div>
        </>
    )
}

export default Player