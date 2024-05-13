import React from 'react'
import Link from 'next/link'

const Block = () => {
    const blocks = ['Atom', 'Auth', 'Feature', 'Company', 'Health', 'Education', 'Party'];

    return (
        <div className='flex gap-6 pt-2'>
            {blocks.map(block => (
                <Link key={block} href={`/${block.toLowerCase()}`}>
                    <h4 className='p-2 border border-black opacity-80 hover:opacity-100 cursor-pointer'>{block}</h4>
                </Link>
            ))}
        </div>
    )
}

export default Block