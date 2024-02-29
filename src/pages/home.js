import React, { Suspense } from 'react'
import {useState} from 'react'

const Header = React.lazy(() => import('../components/header'))
const Player = React.lazy(() => import('../components/player/player'))
const Popup = React.lazy(() => import('../components/Popup/popup'))

const Home =() => {
  const [popupActive, setPopupActive] = useState(true)
    return (
        <>
        <Popup active={popupActive} setActive={setPopupActive} />
        <Suspense fallback={<div>Loading/////</div>}>
        <Header></Header>
        </Suspense>
        <div className='main'></div>
        <Suspense fallback={<div>Loading/////</div>}>
        <Player active={popupActive} setActive={setPopupActive}></Player>
        </Suspense>
    </>
    )
}



export default Home