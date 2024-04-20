import React from 'react'

const MdButton = (props: {placeholder: string; weight?: number}) => {
  return (
    <button className='bg-yellow-400 w-44 h-14 px-7 py-3 text-lg font-medium tracking-wide hover:bg-[#edc33a]'>
        {props.placeholder}
    </button>
  )
}

export default MdButton