import React from "react";

const CentiText = (props: { text: string}) => {
  return (
    <h1 className="text-[18px] font-medium tracking-wide text-[#121212]">
      {props.text}
    </h1>
  );
};

export default CentiText;
