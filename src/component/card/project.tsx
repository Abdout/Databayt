import Link from 'next/link'
import React from 'react'
import { Icon } from "@iconify/react";

const Project = () => {
    return (
        <div>
            <Link href=''>
                <div className='p-4 border-[1.5px] opacity-70 hover:opacity-100 hover:border-black'>
                    <h1>Title</h1>
                    <h3>Description</h3>
                    <div className="flex">
                        <Icon icon="material-symbols-light:bookmark-sharp" width={25} />
                        <h4>Lead</h4>
                    </div>
                    <div className="flex gap-4 items-center">
                        <div className="rounded-full bg-green-600 w-[16px] h-[16px] md:w-[14px] md:h-[14px]"></div>
                        <h4 className="md:text-[15px]">Stauts</h4>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Project