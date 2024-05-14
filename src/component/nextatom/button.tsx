import React from 'react'

const Button = (props:{
  label?: string,
  onClick?: () => void
}) => {


  return (
    <button 
      className="bg-yellow-400 w-40 p-4"
      onClick={props.onClick} 
    >
      Button
    </button>
  )
}

export default Button