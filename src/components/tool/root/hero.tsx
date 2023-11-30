import React from 'react'

const Tool = (props: {
    title: string;
    subtitle: string;
    desc: string;
   
  }) => {
    return (
      
        <div className="w-full h-[140px]  px-5 pt-7">
          <div className="flex gap-4 items-center">
            <div className="flex items-center justify-center w-[65px] h-[42px] bg-yellow-400 ">
              <h1 className="text-justify text-[18px] font-medium tracking-wide">{props.title}</h1>
            </div>
            <div className='w-[180px]'>
              <p className="whitespace-pre-line text-[16px] font-regular tracking-wide leading-5">
                {props.subtitle}
              </p>
            </div>
          </div>
          <div className="whitespace-pre-line pt-3 text-[14px] font-light tracking-wide leading-6">
            <p>{props.desc}</p>
          </div>
        </div>
     
    );
  };
  
  export default Tool;