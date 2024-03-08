import './main_section.css'
import React, { Suspense } from 'react'
import { tracks } from '../data/tracks'



const Main = () => {
    const changeTrack = () => {
        
    }
        var output = ``
        tracks.forEach(element => {
            output += `<div onClick=${changeTrack()} class='track_wrapper'><img src="${element.thumbnail}"
            class = 'content'></img> <div class='meta_wrapper'><h3>${element.title}</h3><h5>${element.author}</h5></div></div>`
            
        })

        
    
    return (
        <>
        <div className='main'>
            <div className="wrapper newTracks">
                <h2 className="new_tracks_header">New Tracks</h2>
                <div className="container" dangerouslySetInnerHTML={{__html: output}}>
                
                </div>
            </div>
            <div className="wrapper newTracks">
                <h2 className="new_tracks_header">New Tracks</h2>
                <div className="container" dangerouslySetInnerHTML={{__html: output}}>
                
                </div>
            </div>
            <div className="wrapper newTracks">
                <h2 className="new_tracks_header">New Tracks</h2>
                <div className="container" dangerouslySetInnerHTML={{__html: output}}>
                
                </div>
            </div>
        </div>
        </>
    )
}

export default Main