// DocIcon.tsx
import Image from "next/image";
import React from "react";
import useOpacity from "@/hook/opacity";

interface DocIconProps {
  src: string;
  alt: string;
  active: boolean;
  onClick: () => void;
}

const DocIcon: React.FC<DocIconProps> = ({ src, alt, active, onClick }) => {
  const { getOpacity } = useOpacity({ initial: 0 });

  return (
    <div
      className={`flex flex-col items-center justify-center gap-1 ${active ? "opacity-100" : "opacity-50"}`}
      onClick={onClick}
      role="button" // Add role="button" to make it accessible
    >
      <Image src={src} width={35} height={35} alt={alt} />
      <h1 className="text-[11px] font-normal">{alt}</h1>
    </div>
  );
};

export default DocIcon;
