import React from "react";

const XlInupt = (props: { placeholder: string }) => {
  return (
    <div>
      <input
        className="md:hidden w-full h-[3rem] text-[16px] tracking-wider font-light px-4  border border-gray-500 bg-[#FCFCFC] focus:border-black hover:border-black"
        type="text"
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default XlInupt;
