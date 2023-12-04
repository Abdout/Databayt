import Image from "next/image";
import Link from "next/link";
import React from "react";

const SmIcon = (props: {
  src: string;
  alt: string;
  path: string;
}) => {
  return (
    <Link href={props.path}>
        <Image
          src={props.src}
          width={25}
          height={25}
          alt={props.alt}
        />
    </Link>
  );
};

export default SmIcon;