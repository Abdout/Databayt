import React from "react";
import MicroIcon from "../../Atom/Icon/Micro";
import NanoIcon from "../../Atom/Icon/Nano";
import CentiInupt from "../../Atom/Input/Centi";
import FlowBurger from "./FlowBurger";

const DashHeader = () => {
  return (
    <>
   
    <div className="hidden md:flex  justify-between p-4">
      <div className="flex  justify-between gap-[30rem] pl-[30rem]">
        <CentiInupt placeholder="Search" />
        <NanoIcon src="/profile.png" alt="Osman" path="#" />
      </div>
    </div>

    <div className="md:hidden">
    <FlowBurger />

    </div>
    </>
  );
};

export default DashHeader;
