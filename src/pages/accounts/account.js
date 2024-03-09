import React, { Suspense } from 'react'
import './account.css'
import info from '../accountInfo.json'

const Header = React.lazy(() => import('../../components/header'))

const funcPreferences = (preferences) =>{
    let array_preferences = preferences.split(" ")
    let string_preferences = ""
    array_preferences.forEach(element => {
        string_preferences += element + ", "
    });
    string_preferences = string_preferences.substring(0, string_preferences.length - 2)
    return string_preferences;
};

const Account =() => {
    return (
        <>
        <Suspense fallback={<div>Loading...</div>}>
        <Header></Header>
        </Suspense>
        <div className='accountMain'>
            <div className='accountComplex'>
                <img className='accountImage' src='https://sportishka.com/uploads/posts/2022-11/1667480319_11-sportishka-com-p-dzhon-skala-vkontakte-11.jpg'/>
                <div className='accountInfo'>
                    <p className='accountText'>Никнейм: {info.nickName}</p>
                    <p className='accountText'>Дата рождения: {info.Date_of_birth} </p>
                    <p className='accountText'>Предпочтения: {funcPreferences(info.preferences)}</p>
                </div>
            </div>
            <p className='accountTextMain'>Альбомы</p>
            <div className='accountFavoriteAlbum noselect'>
                <div className='albumExample'>
                    <img className='albumImage noselect' src='https://avatars.yandex.net/get-music-content/2358262/6489ace6.a.9425747-1/200x200'/>
                    <p className='textAlbum'>Renovatio - Intelligency</p>
                </div>
                <div className='albumExample'>
                    <img className='albumImage noselect' src='https://avatars.yandex.net/get-music-content/2358262/6489ace6.a.9425747-1/200x200'/>
                    <p className='textAlbum'>Renovatio - Intelligency</p>
                </div>
                <div className='albumExample'>
                    <img className='albumImage noselect' src='https://avatars.yandex.net/get-music-content/2358262/6489ace6.a.9425747-1/200x200'/>
                    <p className='textAlbum'>Renovatio - Intelligency</p>
                </div>
                <div className='albumExample'>
                    <img className='albumImage noselect' src='https://avatars.yandex.net/get-music-content/2358262/6489ace6.a.9425747-1/200x200'/>
                    <p className='textAlbum'>Renovatio - Intelligency</p>
                </div>
                <div className='albumExample'>
                    <img className='albumImage noselect' src='https://avatars.yandex.net/get-music-content/2358262/6489ace6.a.9425747-1/200x200'/>
                    <p className='textAlbum'>Renovatio - Intelligency</p>
                </div>
                <div className='albumExample'>
                    <img className='albumImage noselect' src='https://avatars.yandex.net/get-music-content/2358262/6489ace6.a.9425747-1/200x200'/>
                    <p className='textAlbum'>Renovatio - Intelligency</p>
                </div>
                <div className='albumExample'>
                    <img className='albumImage noselect' src='https://avatars.yandex.net/get-music-content/2358262/6489ace6.a.9425747-1/200x200'/>
                    <p className='textAlbum'>Renovatio - Intelligency</p>
                </div>
                <div className='albumExample'>
                    <img className='albumImage noselect' src='https://avatars.yandex.net/get-music-content/2358262/6489ace6.a.9425747-1/200x200'/>
                    <p className='textAlbum'>Renovatio - Intelligency</p>
                </div>
                <div className='albumExample'>
                    <img className='albumImage noselect' src='https://avatars.yandex.net/get-music-content/2358262/6489ace6.a.9425747-1/200x200'/>
                    <p className='textAlbum'>Renovatio - Intelligency</p>
                </div>
                <div className='albumExample'>
                    <img className='albumImage noselect' src='https://avatars.yandex.net/get-music-content/2358262/6489ace6.a.9425747-1/200x200'/>
                    <p className='textAlbum'>Renovatio - Intelligency</p>
                </div>
                <div className='albumExample'>
                    <img className='albumImage noselect' src='https://avatars.yandex.net/get-music-content/2358262/6489ace6.a.9425747-1/200x200'/>
                    <p className='textAlbum'>Renovatio - Intelligency</p>
                </div>
            </div>
        </div>
    </>
    )
}

export default Account
