import React, { Suspense } from 'react'


const Header = React.lazy(() => import('../components/header'))
const Player = React.lazy(() => import('../components/player/player'))

const Home =() => {
    return (
        <>
        <Suspense fallback={<div>Loading/////</div>}>
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