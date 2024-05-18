import React from 'react'
import Image from 'next/image'

export interface IconProps {
  size?: 'lg' | 'md' | 'sm'
}

const Icon: React.FC<IconProps> = ({ size = 'lg' }) => {
  let dimension = 0;
  switch (size) {
    case 'lg':
      dimension = 48;
      break;
    case 'md':
      dimension = 32;
      break;
    case 'sm':
      dimension = 16;
      break;
    default:
      dimension = 48;
  }

  return (
    <Image
      src="/contribute/github.png"
      alt="Icon"
      width={dimension}
      height={dimension}
    />
  )
}

export default Icon;