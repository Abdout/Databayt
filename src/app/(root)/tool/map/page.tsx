import Tool from "@/component/tool/root/hero";
import Back from "@/component/atom/icon/back";
import ToolIcon from "@/component/tool/root/icon";
import React from "react";

const Map = () => {
  return (
    <>
      <Back path='/tool'/>
      <Tool
        title="MAP"
        subtitle="Map of treasure"
        desc="Location, contact, working hours, traffic, Appointment Booking and required docs"
      />
      <div className="grid gap-3 grid-cols-2 items-center justify-center">
        <ToolIcon src="/health.png" width={100} height={100} alt="Health" path='/tool/map/health'/>
        <ToolIcon src="/document.png" width={100} height={100} alt="Document" path='/tool/map/document' />
        <ToolIcon src="/shop.png" width={100} height={100} alt="Shop" path='/tool/map/shop' />
        <ToolIcon src="/company.png" width={100} height={100} alt="Company"path='/tool/map/company'/>
      </div>
    </>
  );
};

export default Map;
