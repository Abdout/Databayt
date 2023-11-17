import React from "react";

const MicroText = (props: { text?: string; span?: string; link?: string }) => {
  return (
    <h1 className="text-[14px] font-light tracking-wider text-[#121212]">
      {props.text}
      <a href={props.link} className='text-[#00278C]'>
        {props.span}
      </a>
    </h1>
  );
};

export default MicroText;
