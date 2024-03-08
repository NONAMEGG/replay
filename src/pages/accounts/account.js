import React, { Suspense } from 'react'
import './account.css'
//import ./dataAccount

const Header = React.lazy(() => import('../../components/header'))

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
                    <p className='accountText'>Никнейм: {"Dwayne Johnson"}</p>
                    <p className='accountText'>Полных лет: {"Year"} </p>
                    <p className='accountText'>Любимые категории музыки: {"Array favorite music"}</p>
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
