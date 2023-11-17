import React from 'react'
import NanoIcon from '../Icon/Nano';
import CentiText from '../Text/Centi';
import CentiInupt from '../Input/Centi';
import Side from '../Nav/Side';

const TestHeader = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-center gap-2">
        <NanoIcon src="/test.png" alt="" path=""/>
        <CentiText text="T&C" />
      </div>

      <CentiInupt placeholder="Search" />

      <div>
        <div>
          <Side />
        </div>
      </div>
    </div>
  );
  
}

export default TestHeader