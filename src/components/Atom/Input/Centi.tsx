import React from "react";

const CentiInupt = (props: { placeholder: string }) => {
  return (
    <div>
      <input
        className="w-full text-[14px] tracking-wider font-thin px-4 py-2 border border-gray-500 bg-[#FCFCFC] focus:border-black hover:border-black"
        type="text"
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default CentiInupt;
