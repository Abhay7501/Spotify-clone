import { BackwardIcon, ForwardIcon, HeartIcon, PauseIcon, PlayIcon, StarIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { useState } from 'react'
import SideNavBar from '../components/SideNavBar'
import TopNavBar from '../components/TopNavBar'
// import PropType from 'prop-types'

function Play_music() {

    const [heartColor, setHeartColor] = useState('white');
    const [starColor, setStarColor] = useState('white');
    const addtoplaylist = () => {
        setStarColor(starColor === 'white' ? 'red-900' : 'white');
    }
    const heart = () => {
        setHeartColor(heartColor === 'white' ? 'red-900' : 'white');
    }

    return (
        <div>
            <div className='flex'>
                <SideNavBar className="hidden " />
                <div className='w-screen'>
                    <TopNavBar />
                    <div className='bg-black  h-screen'>
                        <img src="/images/image.jpg" className="w-screen h-1/2 " />
                        <div className='flex justify-center space-x-5 mt-10'>
                            <HeartIcon className={` w-10 cursor-pointer ${heartColor == 'white' ? 'text-white' : "text-red-500"}`} onClick={heart} />
                            <BackwardIcon className="text-white w-10  cursor-pointer " />
                            <PlayIcon className={`text-white w-10 cursor-pointer `} />
                            <PauseIcon className={`text-white w-10 cursor-pointer`} />
                            <ForwardIcon className="text-white w-10 cursor-pointer " />
                            <StarIcon className={` w-8 cursor-pointer ${starColor == 'white' ? 'text-white' : "text-red-500"}`} onClick={addtoplaylist} />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default Play_music
