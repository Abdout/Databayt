// Live.tsx
'use client';
import React, { useContext } from 'react';
import Navbar from '@/component/live/navbar';
import ComponentRenderer from '@/component/live/render';
import { PropsRenderer } from '@/component/live/props';
import { ComponentContext } from '@/component/live/context';
import Welcome from '@/component/reusable/atom/welcome';

const Playground: React.FC = () => {
  const { selectedComponent } = useContext(ComponentContext);

  return (
    <>
      <Navbar />
      {selectedComponent && selectedComponent !== 'live/welcome' ? (
        <div className="flex">
          <div className="w-1/4 flex items-center justify-center border-r my-20">
            <PropsRenderer />
          </div>
          <div className="w-3/4 flex items-center justify-center">
            <ComponentRenderer />
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-screen">
          <Welcome />
        </div>
      )}
    </>
  );
};

export default Playground;