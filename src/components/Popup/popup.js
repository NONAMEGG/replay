import React, { Suspense } from 'react'
import { Link } from 'react-router-dom'
import './popup.css'


const popup =() => {
    const ShowPopup = () =>{
        document.getElementsByClassName("Popup_background").style.display = "block";
        document.getElementsByClassName("main_Popup").style.display = "block";
    }
    const HidePopup = () => {
        document.getElementsByClassName("Popup_background").style.display = "none";
        document.getElementsByClassName("main_Popup").style.display = "none";
    }
    return (
        <>
        <Suspense fallback={<div>Loading/////</div>}>
        </Suspense>
        <div className='Popup_background' onClick={HidePopup}></div>
        <div className='main_Popup'>
               
        </div>
    </>
    )
}

export default popup
