import toolData from "@/constants/tool";
import Link from "next/link";
import React from "react";

const Tool = (props: {
  id: number;
  title: string;
  subtitle: string;
  desc: string;
  path: string;
}) => {
  return (
    <Link href={props.path}>
      <div className="w-full h-[140px] border border-gray p-5 hover:border-black hover:border-2">
        <div className="flex gap-3 items-center">
          <div className="flex items-center justify-center w-[60px] h-[40px] bg-black ">
            <h1 className="text-white text-justify text-[16px] font-medium tracking-wide">{props.title}</h1>
          </div>
          <div>
            <p className="whitespace-pre text-[16px] font-regular tracking-wide leading-5">
              {props.subtitle}
            </p>
          </div>
        </div>
        <div className="whitespace-pre pt-2 text-[15px] font-light tracking-wide leading-6">
          <p>{props.desc}</p>
        </div>
      </div>
    </Link>
  );
};

export default Tool;
