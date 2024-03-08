import './main_section.css'
import React, { Suspense, useState } from 'react'
import { tracks } from '../data/tracks'



const Main = ({ trackIndex, setTrackIndex, currentTrack, setCurrentTrack }) => {
    const changeTrack = (index) => {
        setTrackIndex(index)
        setCurrentTrack(tracks[index])
    }

        const tracks_content = tracks.map((element) => {
            return (<div onClick={() => changeTrack(tracks.indexOf(element))} className='track_wrapper'><img src={tracks[tracks.indexOf(element)].thumbnail}
            className = 'content'></img> <div className='meta_wrapper'>
            <h3>{tracks[tracks.indexOf(element)].title}</h3><h5>{tracks[tracks.indexOf(element)].author}</h5></div></div>)
            
        })
        console.log(tracks_content)
        
    
    return (
        <>
        <div className='main' >
            <div className="wrapper newTracks">
                <h2 className="new_tracks_header">New Tracks</h2>
                <div className="container" >
                {tracks_content}
                </div>
                
            </div>
            <div className="wrapper newTracks">
                <h2 className="new_tracks_header">New Tracks</h2>
                <div className="container" >
                    {tracks_content}
                </div>
            </div>
            <div className="wrapper newTracks">
                <h2 className="new_tracks_header">New Tracks</h2>
                <div className="container" >
                    {tracks_content}
                </div>
            </div>
        </div>
        </>
    )
}//dangerouslySetInnerHTML={{__html: output}}

export default Main