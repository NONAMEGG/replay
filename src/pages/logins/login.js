import React, { Suspense } from 'react'
import { Link } from 'react-router-dom'
import './login.css'

const Login =() => {
    return (
        <>
        <Suspense fallback={<div>Loading/////</div>}>
        </Suspense>
        <div className='main'>
            <img src={"/icons/LOGO.png"} className='logo'/><br></br>
            <div className='inputs'>
                <p>Логин:</p>
                <input type='text'></input><br></br>
                <p>Пароль:</p>
                <input type='text'></input>
            </div>
            <button>Войти</button>
            <Link className='RegisterP'>Регистрация</Link>
        </div>
    </>
    )
}

export default Login
