"use client";
import useOpacity from "@/hook/Opacity";
import React, { useState, useRef, useEffect } from "react";

const DropDown = (props: { items: string[] }) => {
  const { handleButtonClick, getOpacity } = useOpacity({ initial: 0 });

  return (
    <div className="relative inline-block text-left">
      <div className="flex flex-col ring-black ring-opacity-5">
        <div>
          {props.items.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                handleButtonClick(index);
              }}
              className={`block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-black focus:text-gray-900 ${getOpacity(
                index
              )}`}
              role="menuitem"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DropDown;
