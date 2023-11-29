import { SidebarData } from "@/constants/Sidebar";
import React from "react";
import SubMenu from "./submenu";


const Sidebar = () => {
  return (
    <div>
      {SidebarData.map((item, index) => {
        return <SubMenu item={item} key={index} />;
      })}
    </div>
  );
};

export default Sidebar;