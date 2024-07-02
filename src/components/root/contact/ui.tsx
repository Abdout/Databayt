'use client'
import React from 'react'
import Title from '@/components/atom/title'
import Excute from './excute'
import Office from './office'
import NewsLetter from './newsletter'
import Social from './social'

const Contact = () => {
  return (
    <div className='flex flex-col space-y-8'>
        <Title icon="material-symbols-light:contact-page-outline-rounded" placeholder="عناوين الاتصال"/>
        <Office />
        <Excute />
        <NewsLetter />
        <Social />
        
    </div>
  )
}

export default Contact