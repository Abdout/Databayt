import React from 'react'

const Title = (props:{
  title: string,
  description?: string

}) => {
  return (
    <div className='justfiy-start -ml-2'>
        <p className="text-[24px] pl-[6px] pb-1 font-light tracking-wider">{props.description}</p>
            <h1 className="word-animation font-rubik md:text[120px] font-medium text-7xl">
              {props.title.split('').map((letter, index) => (
                <span key={index}>{letter}</span>
              ))}
            </h1>
    </div>
  )
}

export default Title