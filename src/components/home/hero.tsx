import React from "react";
import MdButton from "../atom/button/md";

const Hero = () => {
  return (
    <div className="-mx-24">
      <div className="md:justify-start md:items-start w-full h-[17rem] md:h-[20rem] px-[120px] pt-10 bg-[#F1F1F1] items-center text-right">
        <div className="md:flex md:justify-center md:items-center md:grid-2 md:gap-60">
          <div>
            <p className="text-[14px] font-algalam">القلم اقوى من الذاكرة</p>
            <h1 className="font-riwaj text-[85px] md:text[100px] -mt-4 -mr-2 text-black">
              داتابيت
            </h1>
            <div className="pr-[70px] pt-6 ">
              <MdButton placeholder="Get started"/>
            </div>
          </div>
          <div className="hidden md:flex rounded-full w-40 h-40 bg-black"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
