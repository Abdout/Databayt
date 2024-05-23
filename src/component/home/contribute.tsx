import React from 'react'

import MdButton from '../atom/button/md'
import Link from 'next/link'

const Contribute = () => {
    return (
        <div className=''>
            
            <h1 className="pl-8 py-4 pt-4 text-2xl">Contribute</h1>
            <p className='text-xl font-light px-9 tracking-wider'>
                Within the vibrant <strong>community</strong> of Databayt lies the true measure of its success; without this essential foundation, Databayt would cease to exist.
                so, welcome Contributors from hobbyists and production users, from newcomers and seasoned professionals.
            </p>
            <Link href="/contribute">
            <button className='mx-9 mt-6 bg-black text-xl text-[#fcfcfc] p-2 w-80 h-14 hover:opacity-80'>
                Join the community →
            </button>
            </Link>
        </div>
    )
}

export default Contribute