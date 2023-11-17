import Profile from '@/components/Card/Profile'
import CentiIcon from '@/components/Icon/Centi'
import CentiText from '@/components/Text/Centi'
import MicroText from '@/components/Text/Micro'
import React from 'react'

const Sera = () => {
  return (
    <div>
      <CentiIcon src='/profile.png' alt='me'/>
      <CentiText text='Osman Abdout'/>
      <MicroText text='Embedded Engineer at Tesla'/>
      <MicroText text='Sudan, Portsudan'/>
      
    </div>
  )
}

export default Sera