// import React from "react";

// const Blog = () => {
//   return <div>b</div>;
// };

// export default Blog;
"use client";
import Modal from '@/component/modal/modal'
import React from 'react'
import { useState } from 'react'

const Blog = () => {
  const [show, setShow] = useState(false)
  return (
    <div className='h-screen flex flex-col item-center gap-6 bg-slate-400'>
      <h1 className='text-5xl font-bold mt-4'>Popup Modal</h1>
      <button 
      onClick={() => setShow(true)}
      className='bg-violet-500 px-4 py-2 rounded-lg text-lg'> Get ebook
      </button>
      {show && <Modal onClose = {() => setShow(false)}/>}

    </div>
  )
}

export default Blog