'use client';
import React from 'react'
import { Icon } from "@iconify/react";

const ClubCard = (props:{icon:string, label: string, id: string}) => {
  return (
    <div className='flex flex-col items-center justify-center p-8 border border-gray-400 w-32 h-32 rounded-full reveal'>
         <Icon icon={props.icon} width={35}  />
         <strong>{props.label}</strong>
    </div>
  )
}

export default ClubCard