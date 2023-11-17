"use client";
import useOpacity from "@/hook/Opacity";
import Image from "next/image";


const FileButton = (props: {
    src: string;
    alt: string;
    onClick: () => void;
    activeClass: string;
  }) => {
    return (
      <button
        className={`${props.activeClass} flex flex-col items-center justify-center gap-1`}
        onClick={props.onClick}
      >
        <Image src={props.src} width={35} height={35} alt={props.alt} />
        <h1 className="text-[11px] font-normal">{props.alt}</h1>
      </button>
    );
  };
  
 
const FileOpacity = (props: { tag: { img: string[]; text: string[] } }) => {
    const { handleButtonClick, getOpacity } = useOpacity({ initial: 0 });
  
    return (
      <div>
        <div className="flex gap-3">
          {props.tag.text.map((text, index) => (
            <FileButton
              key={text}
              onClick={() => handleButtonClick(index)}
              alt={text}
              src={props.tag.img[index]}
              activeClass={getOpacity(index)}
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default FileOpacity;
