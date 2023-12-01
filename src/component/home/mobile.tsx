import { navLink } from '@/constant/link'
import Link from 'next/link'
import React from 'react'

const Mobile = () => {
  return (
    <ul className=" flex gap-4 md:hidden pb-4">
          {navLink.map((link) => (
            <Link href={link.href} key={link.key}
            className=" text-gray-600 regular-16 flexCenter cursor-pointer
            transition-all hover:text-black active:text-black">
            {link.label}
            </Link>
            ))}
        </ul>
  )
}

export default Mobile