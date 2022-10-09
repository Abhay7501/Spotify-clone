import React from 'react'
import { Link } from 'react-router-dom'
export default function Card({ title, id }) {
    return (
        <div>
            <Link to="Play_music">
                <div className="sm:w-48 sm:h-72 rounded-md w-36 h-64 border-slate-50 text-center  cursor-pointer bg-stone-900 ml-10 mt-10 hover:bg-stone-800">
                    <img src="/images/image.jpg" className=" " />
                    <div className="text-white">
                        <h5 className="">{title}</h5>
                        <p className="card">{id}</p>
                        <a href="/" className="">Go somewhere</a>
                    </div>
                </div>
            </Link>
        </div>
    )
}
