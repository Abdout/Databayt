import Image from "next/image";
import React from "react";

const xlIcon = (props: {
  src: string;
  alt: string;
  
}) => {
  return (
        <Image
          src={props.src}
          width={150}
          height={150}
          alt={props.alt}
        />
  );
};

export default xlIcon;