import React from 'react'

export interface InputProps {
  size?: 'lg' | 'md' | 'sm'
}

const sizeToWidthClass = {
  'lg': 'w-60',
  'md': 'w-40',
  'sm': 'w-20',
}

const Input: React.FC<InputProps> = ({ size = 'lg' }) => {
  const widthClass = sizeToWidthClass[size] || 'w-60';

  return (
    <input
      type="text"
      placeholder="Label"
      className={`border-[1.5px] ${widthClass} p-[14px] border-gray-400 hover:border-black outline-none rounded-none`}
    />
  )
}

export default Input;