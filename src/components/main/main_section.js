import './main_section.css'
import React, { Suspense } from 'react'
import { tracks } from '../data/tracks'



const Main = ({ trackIndex, setTrackIndex, currentTrack, setCurrentTrack }) => {
    const changeTrack = (index) => {
        setTrackIndex(index)
        setCurrentTrack(tracks[index])
    }
        var output = ``
        tracks.forEach(element => {
            output += `<div class='track_wrapper'><img src="${element.thumbnail}"
            class = 'content'></img> <div class='meta_wrapper'><h3>${element.title}</h3><h5>${element.author}</h5></div></div>`
            
        })

        
    
    return (
        <>
        <div className='main' >
            <div className="wrapper newTracks">
                <h2 className="new_tracks_header">New Tracks</h2>
                <div className="container" >
                <div onClick={() => changeTrack(0)} className='track_wrapper'><img src={tracks[0].thumbnail}
            className = 'content'></img> <div className='meta_wrapper'><h3>{tracks[0].title}</h3><h5>{tracks[0].author}</h5></div></div>
                 <div onClick={() => changeTrack(1)} className='track_wrapper'><img src={tracks[1].thumbnail}
            className = 'content'></img> <div className='meta_wrapper'><h3>{tracks[1].title}</h3><h5>{tracks[1].author}</h5></div></div>
                
                </div>
                
            </div>
            <div className="wrapper newTracks">
                <h2 className="new_tracks_header">New Tracks</h2>
                <div className="container" >
                <div onClick={() => changeTrack(0)} className='track_wrapper'><img src={tracks[0].thumbnail}
            className = 'content'></img> <div className='meta_wrapper'><h3>{tracks[0].title}</h3><h5>{tracks[0].author}</h5></div></div>
                 <div onClick={() => changeTrack(1)} className='track_wrapper'><img src={tracks[1].thumbnail}
            className = 'content'></img> <div className='meta_wrapper'><h3>{tracks[1].title}</h3><h5>{tracks[1].author}</h5></div></div>
                </div>
            </div>
            <div className="wrapper newTracks">
                <h2 className="new_tracks_header">New Tracks</h2>
                <div className="container" >
                <div onClick={() => changeTrack(0)} className='track_wrapper'><img src={tracks[0].thumbnail}
            className = 'content'></img> <div className='meta_wrapper'><h3>{tracks[0].title}</h3><h5>{tracks[0].author}</h5></div></div>
                 <div onClick={() => changeTrack(1)} className='track_wrapper'><img src={tracks[1].thumbnail}
            className = 'content'></img> <div className='meta_wrapper'><h3>{tracks[1].title}</h3><h5>{tracks[1].author}</h5></div></div>
                </div>
            </div>
        </div>
        </>
    )
}//dangerouslySetInnerHTML={{__html: output}}

export default Main