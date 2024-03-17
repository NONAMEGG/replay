import React, { Suspense, useEffect} from 'react'
import {useState} from 'react'
import './account.css'
import info from '../accountInfo.json'
import { supabase } from '../lib/supabaseClient'

const Header = React.lazy(() => import('../../components/header'))

const Account =() => {

    const [formError, setFormError] = useState(null)
    const [title, setTtitle] = useState('')
    const [src, setSrc] = useState('')
    const [author, setAuthor] = useState('')
    const [thumbnaillink, setThumbnaillink] = useState('')

    const handlTreckSubmit = async (e) =>{
        e.preventDefault()
    
        if (!title || !src || !author || !thumbnaillink){
            setFormError('Please cheack filling in the music fields')
            return
        }
        const donwloadSupabase = async () => {
            var fileMusic = document.getElementById('src')
            fileMusic = fileMusic.files[0]
            if (fileMusic){
                const{ data, error } = await supabase.storage.from('music').upload(title + ' - ' + author + '.mp3', fileMusic)
                if (error.error == 'Duplicate') {
                    setFormError('Такой файл уже существует, пожалуйста поменяйте название музыки или имя автора')
                    //return
                }
            }

            var fileImage = document.getElementById('thumbnaillink')
            fileImage = fileImage.files[0]
            if (fileImage){
                const{ data, error } = await supabase.storage.from('images').upload(title + ' - ' + author + '.jpg', fileImage)
                if (error.error == 'Duplicate') {
                    setFormError('Такой файл уже существует, пожалуйста поменяйте название музыки или имя автора')
                }
            }
        }   

        donwloadSupabase()
        setFormError('')
    }

    const funcPreferences = (preferences) =>{
        let array_preferences = preferences.split(" ")
        let string_preferences = ""
        array_preferences.forEach(element => {
            string_preferences += element + ", "
        });
        string_preferences = string_preferences.substring(0, string_preferences.length - 2)
        return string_preferences;
    };

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
            <div className='accountMusic'>
                <p className='accountTextMain'>Загрузите свою песню</p>
                <div className='accountDownloadMusic'>
                    <form onSubmit={handlTreckSubmit} className='accountDownloadMusic'>
                        <input className='forDownloadMusic'
                            id = 'title'
                            type = 'text'
                            placeholder='Название песни'
                            value={title}
                            onChange={(e) => setTtitle(e.target.value)}
                        />
                        <label className='Download' for="src">Загрузите музыку</label>
                        <input className='forDownloadMusic'
                            id = 'src'
                            type = 'file'
                            onChange={(e) => setSrc(e.target.value)}
                        />
                        <input className='forDownloadMusic'
                            id = 'author'
                            type = 'text'
                            placeholder='Автор'
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                        />
                        <label className='Download' for="thumbnaillink">Загрузите фотографию</label>
                        <input className='forDownloadMusic'
                            id = 'thumbnaillink'
                            type = 'file'
                            onChange={(e) => setThumbnaillink(e.target.value)}
                        />
                        <button className='buutonDownloadMusic'>Download</button>
                        {formError && <p>{formError}</p>}
                    </form>
                    {/* <input type="button" value="submit" onClick={addTracks}/> */}
                </div>
            </div>
            <div className='accountAlbum'>
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
        </div>
    </>
    )
}

export default Account
