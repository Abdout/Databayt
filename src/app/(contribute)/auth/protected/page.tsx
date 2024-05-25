import Role from '@/component/reusable/auth/role'
import React from 'react'

const Protected = () => {
  return (
    <div className='flex flex-col space-y-6 items-center justify-center h-screen'>
         <div className='text-2xl font-light'>You are on a<strong>&nbsp;protected&nbsp;</strong>page and <strong>&nbsp;authorized&nbsp;</strong> as</div>
         <Role />
    </div>
  )
}

export default Protected