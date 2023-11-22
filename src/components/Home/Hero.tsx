import React from "react";
import Button from "../Atom/Button/Milli";

const Hero = () => {
  return (
    <div className="-mx-24">
      <div className="w-full h-[17rem] px-[120px] pt-5 bg-[#F1F1F1] items-center text-right">
        <p className="text-[14px] ">القلم اقوى من الذاكرة</p>
        <h1 className="text-[85px] -mt-4 -mr-2 text-black ">داتابيت</h1>
        {/* <p className="text-[18px] text-white">Automate the boring stuff</p> */}
        <div className="pr-[70px] pt-6 ">
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Hero;
