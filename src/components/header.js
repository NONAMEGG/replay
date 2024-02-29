import React, { Suspense } from 'react'
import { Link } from 'react-router-dom'


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
                <Link className='profile' to="/account">profile</Link>
            </header>
        </>
    )
}

export default Header