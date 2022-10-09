import { ChevronLeftIcon, ChevronRightIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import React from 'react'
import SideNavBar from '../components/SideNavBar'
// import TopNavBar from '../components/TopNavBar'

function Search() {
    return (
        <div>
            <div className='flex'>
                <SideNavBar className="hidden " />
                <div className='w-screen'>
                    <div className='bg-stone-800 w-full h-16 font-serif flex justify-between items-center sticky top-0 '>
                        <div className='space-x-5 flex'>
                            <ChevronLeftIcon className='md:block hidden  text-white w-5 cursor-pointer ' onClick={() => { console.log("Hey"); }} />
                            <ChevronRightIcon className='md:block hidden  text-white w-5 cursor-pointer' onClick={() => { console.log("Hey"); }} />
                            <input type="text" className="md:w-72 md:h-10 w-56  md:pl-14 pl-8 rounded-3xl  border-solid" placeholder="What do you want to listen" />
                        </div>
                        <div className=' space-x-5 mx-2 '>
                            <button className='bg-white py-1 px-4 md:py-3 p md:px-6 rounded-3xl  hover:bg-black text-black hover:text-white'>Log in</button>
                            <button className='bg-white py-1 px-4 md:py-3 p md:px-6 rounded-3xl  hover:bg-black text-black hover:text-white '>Sing up</button>
                        </div>
                    </div>
                    <div className='bg-black h-screen'>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Search
