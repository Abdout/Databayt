import Profile from '@/components/Tool/Sera/ProfileCard'
import CentiIcon from '@/components/Atom/Icon/Centi'
import CentiText from '@/components/Atom/Text/Centi'
import MicroText from '@/components/Atom/Text/Micro'
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