import Title from '@/component/atom/databayt'
import React from 'react'

const Welcome = () => {
  return (
    <div className='flex flex-col w-[40rem] space-y-6 items-center justify-center'>
      <Title title='Auth playground' description='Welcome to '/>
      <p className='text-[16px] font-light flex items-center justify-center tracking-wider'>
      You can explore authentication and authorization by clicking below 👇. Access public page and route freely, but authorization is required for protected ones. Experiment with role-based authorization for specific activitie. 
      </p>
    </div>
  )

}

export default Welcome

