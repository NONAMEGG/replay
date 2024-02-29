import React, { Suspense } from 'react'
import { Link } from 'react-router-dom'
import './popup.css'


const popup =() => {
    const ShowPopup = () =>{
        React.Children.toArray(this.props.children).filter((item) => item.props.className === 'Popup_background').style.display = "block";
        React.Children.toArray(this.props.children).filter((item) => item.props.className === 'main_Popup').style.display = "block";
    }
    const HidePopup = () => {
        React.Children.toArray(this.props.children).filter((item) => item.props.className === 'Popup_background').style.display = "none";
        React.Children.toArray(this.props.children).filter((item) => item.props.className === 'main_Popup').style.display = "none";
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
