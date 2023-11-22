import CentiButton from '@/components/Atom/Button/Centi'
import ProjectList from "@/components/Tool/Flow/Project/ProjectList";
import Link from 'next/link'
import React from 'react'


const Project = () => {
  return (
    <div className='flex p-8  pl-12 gap-4'>
      <ProjectList />
      <Link href='/tool/flow/project/create' >
      <button
      className='w-40 h-10 border'>
        Create project
      </button>
      </Link>
    </div> 
  )
}

export default Project