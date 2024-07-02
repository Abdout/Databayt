import React from 'react'

import { Rubik } from 'next/font/google'

const rubik = Rubik({
  weight: '600', // Example: Specify the weight you need
  subsets: ['latin'] // Example: Specify the subsets you need
});

const Title = (props:{
  title: string,
  description?: string

}) => {
  return (
    <div className='justfiy-start -ml-2'>
        <p className="text-[24px] pl-[6px]  rubik font-light tracking-wider">{props.description}</p>
        <div className={rubik.className}>
            <h1 className="word-animation md:text[120px] rubik -mt-4 font-medium text-[5rem]">
              {props.title.split('').map((letter, index) => (
                <span key={index}>{letter}</span>
                
              ))}
            </h1>
            </div>
    </div>
  )
}

export default Title