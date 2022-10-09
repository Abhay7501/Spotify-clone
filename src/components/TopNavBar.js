import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import React from 'react'





function TopNavBar() {

    return (
        <div className='bg-stone-800  w-full h-16 font-serif flex justify-between items-center sticky top-0 mix-blend-multiply'>

            <div className='space-x-5 flex'>
                <ChevronLeftIcon className='md:block hidden text-white w-5 cursor-pointer' onClick={() => { console.log("Hey"); }} />
                <ChevronRightIcon className='md:block hidden  text-white w-5 cursor-pointer' onClick={() => { console.log("Hey"); }} />
            </div>

            <div className=' space-x-5 mx-2 '>
                <button className='bg-white py-1 px-4 md:py-3 p md:px-6 rounded-3xl  hover:bg-black text-black hover:text-white'> Log in</button>
                <button className='bg-white py-1 px-4 md:py-3 p md:px-6 rounded-3xl  hover:bg-black text-black hover:text-white '>Sing up</button>
            </div>

        </div >


    )
}

export default TopNavBar
