import React, { Suspense } from 'react'

const Header = React.lazy(() => import('../components/header'))

const Login =() => {
    return (
        <>
        <Suspense fallback={<div>Loading/////</div>}>
        <Header></Header>
        </Suspense>
        <h1>login</h1>
    </>
    )
}

export default Login
