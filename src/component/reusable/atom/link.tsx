import Link from 'next/link'
import React from 'react'

const link = () => {
    return (
        <div>
            <Link
                href="/"
                className="text-blue-700 hover:opacity-80">
                link
            </Link>
        </div>
    )
}

export default link