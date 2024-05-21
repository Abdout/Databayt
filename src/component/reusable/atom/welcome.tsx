import Title from '@/component/atom/databayt'
import React from 'react'

const Welcome = () => {
  return (
    <div className='flex flex-col px-60 space-y-6 items-start justify-center'>
      <Title title='Atom playground' description='Welcome to '/>
      <p className='text-[16px] font-light pr-10'>You may explore the reusable UI components by selecting a component from the navigation menu above 👆. Components are categorized from basic to complex, following a chemistry-inspired hierarchy: Atom, Pound, Cell, and Organ.</p>
    </div>
  )

}

export default Welcome

