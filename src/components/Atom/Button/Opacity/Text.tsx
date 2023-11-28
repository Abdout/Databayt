"use client";
import React, { useState } from "react";
import useOpacity from "@/hook/opacity";
import { SidebarData } from "@/constants/Sidebar";
import Link from "next/link";

const DropButton = (props: {
  item: string;
  onClick: () => void;
  activeClass: string;
  path: string;
  isActive: boolean;
  isSubItem?: boolean; // Add isSubItem prop
}) => {
  return (
    <Link href={props.path}>
      <button
        className={`${props.activeClass} block w-[200px] flex  gap-1 hover:bg-gray-200 hover:text-black hover:opacity-100 p-2 ${
          props.isActive && !props.isSubItem
            ? "bg-gray-100 border-l-2 border-yellow-400"
            : ""
        }`}
        onClick={props.onClick}
      >
        <h1 className="text-[16px] font-normal tracking-wider">{props.item}</h1>
      </button>
    </Link>
  );
};



const DropOpacity = (props: { closeSidebar: () => void }) => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const handleButtonClick = (index: number) => {
    setOpenItem((prevItem) => (prevItem === index ? null : index));
  };

  const getOpacity = (index: number) => {
    return openItem === index ? "opacity-100" : "opacity-50";
  };

  return (
    <div>
      <div className="flex flex-col gap-3">
        {SidebarData.map((item, index) => (
          <div key={item.title}>
            <DropButton
              item={item.title}
              onClick={() => handleButtonClick(index)}
              activeClass={getOpacity(index)}
              path={item.path}
              isActive={openItem === index}
            />
            {openItem === index && item.subNav && (
              <div className="pl-4">
                {item.subNav.map((subitem, subIndex) => (
                  <DropButton
                    key={subIndex}
                    item={subitem.title}
                    onClick={() => {
                      handleButtonClick(subIndex);
                      props.closeSidebar();
                    }}
                    activeClass={getOpacity(subIndex)}
                    path={subitem.path}
                    isSubItem // Pass isSubItem prop
                    isActive={false} // Set isActive to false for subitems
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropOpacity;