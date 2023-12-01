import React from 'react'

const mdButton = (props: {placeholder: string; weight?: number}) => {
  return (
    <button className='bg-yellow-400 px-7 py-3 text-[{props.weight}px] font-medium tracking-wide'>
        {props.placeholder}
    </button>
  )
}

export default mdButton