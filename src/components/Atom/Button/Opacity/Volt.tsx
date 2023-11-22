

"use client";
import useOpacity from "@/hook/Opacity";


const VoltButton = (props: {
    label: string;
    onClick: () => void;
    activeClass: string;
  }) => {
    return (
      <button
        className={`${props.activeClass} border border-black w-7 h-6  text-[12px] font-light tracking-wide`}
        onClick={props.onClick}
      >
        {props.label}
      </button>
    );
  };
  
 
const VoltOpacity = (props: { label: string[] }) => {
    const { handleButtonClick, getOpacity } = useOpacity({ initial: 1 });
  
    return (
      <div>
        <div className="flex gap-3">
          {props.label.map((label, index) => (
            <VoltButton
              key={index}
              onClick={() => handleButtonClick(index)}
              label={label}
              activeClass={getOpacity(index)}
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default VoltOpacity;

