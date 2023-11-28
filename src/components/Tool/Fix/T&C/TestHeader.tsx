import React from "react";
import NanoIcon from "../../../atom/icon/nano";
import CentiInupt from "../../../atom/input/Centi";
import FlowBurger from "../../Flow/FlowBurger";



const TestHeader = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-[110px]">
        <FlowBurger />
        <div className="flex items-center justify-center gap-2">
          <NanoIcon src="/test.png" alt="" path="" />
          <h1>T&C</h1>
        </div>
      </div>
      <CentiInupt placeholder="Search" />
      <div>
        <div></div>
      </div>
    </div>
  );
};

export default TestHeader;
