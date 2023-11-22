import React from "react";
// import Image from './Image'
import Image from "next/image";
import MicroIcon from "../Atom/Icon/Micro";
import MicroText from "../Atom/Text/Micro";

const Team = () => {
  return (
    <div className="flex overflow-x-auto space-x-4 p-2 gap-2">
      <div className=" outer-dev px-8 w-[100px] h-[140px] border border-black ">
        <div className="flex flex-col justify-center items-center h-full gap-2">
          <div>
            <MicroIcon src="/photo.png" alt="" path="" />
          </div>

          <div className="flex flex-col ">
            <MicroText text="Osman" />
            <MicroText text="Abdout" />
          </div>
        </div>
      </div>

      <div className=" outer-dev px-8 w-[100px] h-[140px] border border-black ">
        <div className="flex flex-col justify-center items-center h-full gap-2">
          <div>
            <MicroIcon src="/photo.png" alt="" path="" />
          </div>

          <div className="flex flex-col ">
            <MicroText text="Osman" />
            <MicroText text="Abdout" />
          </div>
        </div>
      </div>

      <div className=" outer-dev px-8 w-[100px] h-[140px] border border-black ">
        <div className="flex flex-col justify-center items-center h-full gap-2">
          <div>
            <MicroIcon src="/photo.png" alt="" path="" />
          </div>

          <div className="flex flex-col ">
            <MicroText text="Osman" />
            <MicroText text="Abdout" />
          </div>
        </div>
      </div>

      <div className=" outer-dev px-8 w-[100px] h-[140px] border border-black ">
        <div className="flex flex-col justify-center items-center h-full gap-2">
          <div>
            <MicroIcon src="/photo.png" alt="" path="" />
          </div>

          <div className="flex flex-col ">
            <MicroText text="Osman" />
            <MicroText text="Abdout" />
          </div>
        </div>
      </div>

      <div className=" outer-dev px-8 w-[100px] h-[140px] border border-black ">
        <div className="flex flex-col justify-center items-center h-full gap-2">
          <div>
            <MicroIcon src="/photo.png" alt="" path="" />
          </div>

          <div className="flex flex-col ">
            <MicroText text="Osman" />
            <MicroText text="Abdout" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
