import React, { Suspense } from 'react'

const Header = React.lazy(() => import('../../components/header'))

const Account =() => {
    return (
        <>
        <Suspense fallback={<div>Loading...</div>}>
        <Header></Header>
        </Suspense>
        <h1>Account</h1>
    </>
    )
}

export default Account
