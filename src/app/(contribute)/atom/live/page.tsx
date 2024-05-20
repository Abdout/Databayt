// Live.tsx
'use client';
import React from 'react';
import Navbar from '@/component/live/navbar';
import ComponentRenderer from '@/component/live/render';
import { PropsRenderer } from '@/component/live/props';

const Live: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <div className="w-1/4 flex items-center justify-center border-r my-20">
          <PropsRenderer />
        </div>
        <div className="w-3/4 flex items-center justify-center">
          <ComponentRenderer />
        </div>
      </div>
    </>
  );
};

export default Live;