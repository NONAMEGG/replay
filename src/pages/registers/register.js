import React, { Suspense } from 'react'
import { Link } from 'react-router-dom'
import './register.css'

const Login =() => {
    return (
        <>
        <Suspense fallback={<div>Loading/////</div>}>
        </Suspense>
        <div className='main_Register'>
            <img src={"/icons/LOGO4K.png"} className='logo_register'/><br></br>
            <div className='container'>
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
                        <div className='RadioButtons_Register_pol'>
                            <div>Мужской<input type='radio' name='pol'></input></div>
                            <div>Женский<input type='radio' name='pol'></input></div>
                        </div>
                        <br></br>
                        <p>Выберите какую музыку вы предпочитаете:</p>
                        <div className='checkboxes_registers_likes'>
                            <button className='Checkboxs'>Эпическую</button>
                            <button className='Checkboxs'>Нагнетающую</button>
                            <button className='Checkboxs'>Расслабляющую</button>
                            <button className='Checkboxs'>8-bit</button>
                            <button className='Checkboxs'>Энергичную</button>
                            <button className='Checkboxs'>Грустную</button>
                            <button className='Checkboxs'>Весёлую</button>
                            <button className='Checkboxs'>Агрессивный фонк</button>
                        </div>
                    </div>
                </div>
                <button className='button_register'>Зарегестрироваться</button>
            </div>
            <Link className='RegisterP' to="/login">У меня уже есть аккаунт</Link>
        </div>
    </>
    )
}

export default Login
