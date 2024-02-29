import React, { Suspense } from 'react'
import { useRef, useState } from 'react';
import { tracks } from '../data/tracks';
import './style.css'

const Controls = React.lazy(() => import('./controls'))
const DisplayTrack = React.lazy(() => import('./displaytrack'))
const ProgressBar = React.lazy(() => import('./progressbar'))


const Player =() => {
    const [trackIndex, setTrackIndex] = useState(0);
    const audioRef = useRef()
    const [currentTrack, setCurrentTrack] = useState(tracks[trackIndex]);
    const progressBarRef = useRef();

    const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);
    return (
        <>
            <div className="player__container">
            <ProgressBar {...{ progressBarRef, audioRef, timeProgress, duration }}></ProgressBar>

                <div className="player">
                    <DisplayTrack {...{ currentTrack, audioRef, setDuration, progressBarRef }}/> 
                    <Controls {...{ audioRef, progressBarRef, duration, setTimeProgress, tracks,
    trackIndex,
    setTrackIndex,
    setCurrentTrack }}></Controls>    
                    <div className="ghost"></div>
                </div>

            </div>
        </>
    )
}

export default Player