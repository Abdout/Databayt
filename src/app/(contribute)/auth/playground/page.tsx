'use client';
import { UserButton } from '@/component/auth/user-button'
import Welcome from '@/component/reusable/auth/welcome'
import { useCurrentUser } from '@/hook/use-current-user'
import Link from 'next/link'
import React from 'react'


const Playground = () => {
    const user = useCurrentUser();

    return (
        <div className='flex flex-col items-center justify-center space-y-10 h-screen'>

            <div className="flex gap-4 absolute top-10 right-10">
                {!user && (
                    <>
                        <Link href='/login'
                             className='bg-black px-4 py-2 text-[#fcfcfc]'>Login
                        </Link>
                        <Link href='/join'
                             className='border border-black px-5 py-2'>Join
                        </Link>
                    </>
                )}
                <div className='scale-150'>
                {user && <UserButton />}

                </div>
                
            </div>
            <Welcome />
            <div className='flex space-x-6'>

                <Link href='/auth/puplic' className='border border-black px-4 py-2'>
                    Puplic page
                </Link>
                <Link href='/auth/protected' className='border border-black px-4 py-2'>
                    Protected page
                </Link>
                <Link href='' className='border border-black px-4 py-2'>
                    Puplic route
                </Link>
                <Link href='' className='border border-black px-4 py-2'>
                    Protected route
                </Link>

            </div>

        </div>
    )
}

export default Playground