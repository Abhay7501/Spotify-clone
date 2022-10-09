import React from 'react'
import SideNavBar from '../components/SideNavBar'
import TopNavBar from '../components/TopNavBar'
import Card from './Card'

function Spotify_playlist() {
    return (
        <div>
            <div className='flex'>
                <SideNavBar className="hidden " />
                <div className='w-screen'>
                    <TopNavBar />
                    <div className='bg-black  h-screen'>
                        <div className=' md:flex flex'>
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Spotify_playlist


