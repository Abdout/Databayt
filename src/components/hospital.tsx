import React from 'react'

const Hospital = () => {
  return (
    <div className="bg-gray-100 flex flex-col items-start justify-start relative text-left text-[14px] text-gray-200 font-inter border-[0.4px] border-solid border-black">
      <div className="my-0 mx-[!important] absolute top-[13.1px] left-[17.5px] flex flex-row items-center justify-center gap-[16px] z-[0]">
        <img
          className="relative w-[34.5px] h-[34.5px] object-cover"
          alt=""
          src="/health-1@2x.png"
        />
        <div className="relative tracking-[0.04em] font-light inline-block w-[166.2px] shrink-0">
          <p className="m-0">Royal Care</p>
          <p className="m-0">International Hospital</p>
        </div>
      </div>
    </div>
  );
};

export default Hospital;