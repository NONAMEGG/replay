import React, { Suspense } from 'react'

const Navigation = React.lazy(() => import('../components/navigation'))

const Header =() => {
    return (
        <>
<header className='top__header'>
            хуй хуй хуй хуй хуй хуй хуй хуй хуй хуй хуй хуй хуй хуй хуй хуй хуй хуй хуй хуй хуй хуй хуй хуй хуй хуй хуй хуй хуй
            хуй хуй хуй хуй хуй хуй хуй хуй хуй хуй хуй хуй хуй хуй хуй хуй хуй хуй
        </header><header className='fixed__header'>
                <div>ghost::logo</div>
                <Suspense fallback={<div>Loading/////</div>}>
                <Navigation></Navigation>
                </Suspense>
                <div>profile</div>
            </header>
        </>
    )
}

export default Header