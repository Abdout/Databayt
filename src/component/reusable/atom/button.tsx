// button.tsx
import React from 'react';

export type ButtonSize = 'lg' | 'md' | 'sm';

export interface ButtonProps {
  size?: ButtonSize; // make size optional
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
}

const Button: React.FC<ButtonProps> = ({ size = 'lg', sm = false, md = false, lg = false }) => {
  const sizeClasses = {
    lg: 'bg-black text-white w-60',
    md: 'bg-yellow-400 text-black w-40',
    sm: 'border-black w-20',
  };

  let sizeClass = sizeClasses[size];

  if (sm) sizeClass += ' bg-red-500'; // Add additional classes based on sm, md, and lg
  if (md) sizeClass += ' bg-yellow-500';
  if (lg) sizeClass += ' bg-blue-500';

  return (
    <button className={`${sizeClass} h-12`}>
      Button
    </button>
  )
}

export default Button;