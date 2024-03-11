import React, { Suspense } from 'react'
import { Link } from 'react-router-dom'
import './login.css'
import users from '../accountLogin.json' //array logins
import accountInfo from '../accountLogin.json'


const logined = async () =>{
    let login = document.getElementById("#login").value //works
    let password = document.getElementById("#password").value //works
    users.forEach(element => {
        if (element.Login === login && element.password === password){
            accountInfo.forEach(element2 => {
                if(element2.Login === login && element2.password === password){
                    element2.Log_In = true
                    
                }
            });
        }
    });
}
const Login =() => {
    return (
        <>
        <Suspense fallback={<div>Loading/////</div>}>
        </Suspense>
        <div className='main_Login'>
            <img src={"/icons/LOGO4K.png"} className='logo_Login'/><br></br>
            <div className='inputs_Login'>
                <p>Логин:</p>
                <input className='input_Login' type='text' id = "#login"></input><br></br>
                <p>Пароль:</p>
                <input className='input_Login' type='text' id = "#password"></input>
            </div>
            <button className='button_Login' onClick={logined}>Войти</button><br></br>
            <Link className='RegisterP' to="/register">У меня нет аккаунта</Link>
        </div>
    </>
    )
}

export default Login