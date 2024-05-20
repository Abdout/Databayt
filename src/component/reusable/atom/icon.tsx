import React from 'react'
import Image from 'next/image'

export interface IconProps {
  size?: 'xl' | 'lg' | 'md' | 'sm'
}

const Icon: React.FC<IconProps> = ({ size = 'lg' }) => {
  let dimension = 0;
  switch (size) {
    case 'xl':
      dimension = 100;
      break;
    case 'lg':
      dimension = 90;
      break;
    case 'md':
      dimension = 60;
      break;
    case 'sm':
      dimension = 30;
      break;
    default:
      dimension = 60;
  }

  return (
    <Image
      src="/circle.png"
      alt="Icon"
      width={dimension}
      height={dimension}
    />
  )
}

export default Icon;