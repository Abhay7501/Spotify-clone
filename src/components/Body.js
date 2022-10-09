import React from 'react'
import Card from './Card'
import { useNavigate } from 'react-router-dom'
import Api_fetch from './Api_fetch';

function Body({ userId, id }) {
    const navigate = useNavigate();

    const seeall = () => {
        navigate('/Spotify_playlist');
    };
    return (
        <>
            <div className='bg-black '>
                <h2 className='text-white hover:underline-offset-2 text-2xl md:text-3xl ml-5 pt-5 font-serif flex justify-between mr-5 cursor-pointer '
                    onClick={() => seeall()}>Spotify Playlist<div className='text-gray-500 text-base '>SEE ALL</div></h2>
                <div className=' flex '>
                    {/* <Card />
                    <Card /> */}
                    <Api_fetch />

                    {/* <h1>{userId + id}</h1> */}
                </div>
            </div>

        </>
    )
}

export default Body


