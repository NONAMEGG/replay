import React, { Suspense } from 'react'
import { Link } from 'react-router-dom'
import './popup.css'



const popup =({active, setActive}) => {
    const changeState =() => {
        setActive((prev) => !prev)
    console.log(active)

    }
    return (
        <>
        <Suspense fallback={<div>Loading/////</div>}>
        </Suspense>
        <div className={ active ? 'Popup_background.activePopup' : 'Popup_background'} onClick={changeState}></div>
        <div className={ active ? 'main_Popup activePopup' : 'main_Popup'} onClick={e => e.stopPropagation()}>
               
        </div>
    </>
    )
}

export default popup
