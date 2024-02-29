import React, { Suspense } from 'react'
import { Link } from 'react-router-dom'
import './register.css'

const Login =() => {
    return (
        <>
        <Suspense fallback={<div>Loading/////</div>}>
        </Suspense>
        <div className='main_Register'>
            <img src={"/icons/LOGO.png"} className='logo_register'/><br></br>
            <div className='all_set'>
                <div className='inputs_Register'>
                    <p>Придумайте логин:</p>
                    <input className='input_Register' type='text'></input>
                    <br></br>
                    <p>Придумайте пароль:</p>
                    <input className='input_Register' type='text'></input>
                    <br></br>
                    <p>Выберите дату рождения:</p>
                    <input className='input_Register' type='date'></input>
                    <br></br>
                </div>
                <div className='inputs_Register'>
                    <p>Выберите пол:</p>
                    <div>Мужской<input type='radio' name='pol'></input></div>
                    <div>Женский<input type='radio' name='pol'></input></div>
                    <br></br>
                    <p>Выберите какую музыку вы предпочитаете:</p>
                    <div className='checkboxes'>
                        <p>Эпическую</p>
                        <input type='checkbox'></input>
                        <p>Нагнитающую</p>
                        <input type='checkbox'></input>
                        <p>Расслабляющую</p>
                        <input type='checkbox'></input>
                        <p>8-bit</p>
                        <input type='checkbox'></input>
                        <p>Энергичную</p>
                        <input type='checkbox'></input>
                        <p>Грустную</p>
                        <input type='checkbox'></input>
                        <p>Весёлую</p>
                        <input type='checkbox'></input>
                        <p>Агрессивный фонк</p>
                        <input type='checkbox'></input>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Login
