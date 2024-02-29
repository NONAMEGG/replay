import React, { Suspense } from 'react'
import { Link } from 'react-router-dom'
import './popup.css'


const popup =() => {
    const ShowPopup = () =>{
        document.getElementById("p2").style.color="blue";
    }
    return (
        <>
        <Suspense fallback={<div>Loading/////</div>}>
        </Suspense>
        <div className='Popup_background'></div>
        <div className='main_Popup'>
               
        </div>
    </>
    )
}

export default popup
