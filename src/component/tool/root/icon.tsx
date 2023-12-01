import Image from "next/image";
import Link from "next/link";
import React from "react";

const ToolIcon = (props: {
  src: string;
  width?: number;
  height?: number;
  alt: string;
  path: string;
}) => {
  return (
    <Link href={props.path}>
      <div className="flex flex-col items-center pt-8">
        <Image
          src={props.src}
          width={props.width}
          height={props.height}
          alt={props.alt}
        />
        <h1 className="pt-3 font-medium">{props.alt}</h1>
      </div>
    </Link>
  );
};

export default ToolIcon;
