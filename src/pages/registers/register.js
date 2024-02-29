import React, { Suspense } from 'react'
import { Link } from 'react-router-dom'
import './register.css'

const Login =() => {
    return (
        <>
        <Suspense fallback={<div>Loading/////</div>}>
        </Suspense>
        <div className='main'>
            <img src={"/icons/LOGO.png"} className='logo_login'/><br></br>
        </div>
    </>
    )
}

export default Login
