import React, { Suspense } from 'react'


const Header = React.lazy(() => import('../components/header'))
const Player = React.lazy(() => import('../components/player/player'))
const Popup = React.lazy(() => import('../components/Popup/popup'))

const Home =() => {
    return (
        <>
        <Suspense fallback={<div>Loading/////</div>}>
        <Popup></Popup>
        <Header></Header>
        </Suspense>
      <div className='main'></div>
      <Suspense fallback={<div>Loading/////</div>}>
      <Player></Player>
        </Suspense>
    </>
    )
}

export default Home