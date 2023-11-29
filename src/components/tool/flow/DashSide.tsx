import React from "react";
import SideNav from "./SideNav";

const DashSide = () => {
  return (
    <div className="hidden md:flex">
      <div className="h-screen w-60 border-right bg-gray-200 ">
        <div className="flex items-center gap-2 p-8">
          <div className="rounded-full w-4 h-4 bg-black"></div>
          <h1>Brand</h1>
        </div>
        <div>
          <SideNav />
        </div>
      </div>
    </div>
  );
};

export default DashSide;
