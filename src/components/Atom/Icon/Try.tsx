"use client";
import useOpacity from "@/hook/opacity";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";

const Try = (props: {
  src: string;
  alt: string;
  active: boolean;
  onClick: () => void;
}) => {
  const { handleButtonClick, getOpacity } = useOpacity({ initial: 0 });
  return (
    <button className={'flex flex-col items-center justify-center gap-1 ${getOpacity()}'}>
      <Image src={props.src} width={35} height={35} alt={props.alt} />
      <h1 className="text-[11px] font-normal">{props.alt}</h1>
    </button>
  );
};

export default Try;
