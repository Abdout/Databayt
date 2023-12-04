import XlButton from '@/component/atom/button/xl'
import XlInupt from '@/component/atom/input/xl'
import React from 'react'

const Edit = () => {
  return (
    <div className='flex flex-col space-y-4 boarder w-60'>
      <XlInupt placeholder='Name' />
      <XlInupt placeholder='Location' />
      <XlButton placeholder='Edit project' />
    </div>
  )
}

export default Edit