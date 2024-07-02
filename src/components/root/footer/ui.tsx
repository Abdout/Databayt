'use client';
import React from 'react'
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <p className='flex h-20 items-center justify-center border-t border-gray-400 mt-14 py-6 opacity-85 hover:opacity-100 transition-opacity duration-200 '>
      الحركة <strong className='text-[#fcfcfc] dark:text-gray-900'>.</strong>
      <Icon icon={"ph:copyright-light"} height="20" />
      <strong className='text-[#fcfcfc] dark:text-gray-900'>.</strong> جميع الحقوق محفوظة
    </p>
  )
}

export default Footer

