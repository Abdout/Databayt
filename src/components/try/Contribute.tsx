import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Contribute = () => {
  return (
    <div className='flex gap-4'>
        <Link href="https://www.figma.com/community/file/1303390002899241380/databayt">
        <Image 
        src="/figma.png"
        width={50}
        height={50}
        alt="Figma"
        />
        </Link>

        <Link href="https://github.com/Abdout/Databayt">
        <Image 
        src="/github.png"
        width={50}
        height={50}
        alt="Github"
        />
        </Link>

    </div>
  )
}

export default Contribute