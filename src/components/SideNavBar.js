import React from 'react'
import { BuildingLibraryIcon, HandThumbUpIcon, HomeIcon, MagnifyingGlassIcon, PlusCircleIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'


function SideNavBar() {

    return (
        <>

            <div className='bg-stone-900 h-screen w-72 sm:w-50 sticky top-0'>
                <div className='text-4xl ml-10 sm:ml-14 mt-8  text-white font-bold cursor-pointer' >Spotify</div>
                <div className='ml-10 sm:ml-20 mt-8 text-white ' >
                    <ul className='space-y-9 cursor-pointer'>
                        <li onClick={() => { console.log("ckick2") }} className='hover:text-gray-500 flex'><HomeIcon className='w-5 mr-2' /><Link to="/">Home</Link>  </li>
                        <li onClick={() => { console.log("ckick2") }} className='hover:text-gray-500 flex'><MagnifyingGlassIcon className=" w-5 mr-2" /><Link to="/Search">Search</Link> </li>
                        <li onClick={() => { console.log("ckick3") }} className='hover:text-gray-500 flex' ><BuildingLibraryIcon className=' w-5 mr-2' /><Link to="">Your Library</Link> </li>
                        <li onClick={() => { console.log("ckick4") }} className='hover:text-gray-500 flex' ><HandThumbUpIcon className=' w-5 mr-2' /> Liked songs</li>
                        <li onClick={() => { console.log("clicked") }} className='hover:text-gray-500 flex' ><PlusCircleIcon className=' w-5 mr-2' /> Create playlist </li>
                    </ul>
                </div>
            </div >

        </>
    )
}

export default SideNavBar
