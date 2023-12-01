import Image from "next/image";
import Link from "next/link";
import React from "react";

const MdIcon = (props: {
  src: string;
  alt: string;
  path: string;
}) => {
  return (
    <Link href={props.path}>
        <Image
          src={props.src}
          width={50}
          height={50}
          alt={props.alt}
        />
    </Link>
  );
};

export default MdIcon;
