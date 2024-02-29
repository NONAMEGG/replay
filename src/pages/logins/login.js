import React, { Suspense } from 'react'
import { Link } from 'react-router-dom'
import './login.css'

const Login =() => {
    return (
        <>
        <Suspense fallback={<div>Loading/////</div>}>
        </Suspense>
        <div className='main'>
            <img src={"/icons/LOGO.png"} className='logo_login'/><br></br>
            <div className='inputs'>
                <p>Логин:</p>
                <input className='input_Login' type='text'></input><br></br>
                <p>Пароль:</p>
                <input className='input_Login' type='text'></input>
            </div>
            <button className='button_Login'>Войти</button><br></br>
            <Link className='RegisterP' to="/register">Регистрация</Link>
        </div>
    </>
    )
}

export default Login
