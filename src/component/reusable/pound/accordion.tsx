import React, { useState } from 'react';

interface AccordionProps {
  title: string;
  content: string;
}

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative w-80 h-20">
      <button
        onClick={toggleAccordion}
        className={`absolute top-0 left-0 w-80 h-20 border-gray-400 border-[1.5px] opacity-80 hover:opacity-100 hover:border-black  ${isOpen ? 'h-60 opacity-100 border-black' : ''}`}
      >
        <p className="text-lg font-semibold">Accordion</p>
      </button>
      <div className={`absolute top-0 left-0 w-0 h-0 border-gray-400 border-l-0 border-t-0 border-r-32 border-b-20 opacity-80 hover:opacity-100 ${isOpen ? 'border-b-60 opacity-100 border-black' : ''}`}></div>
      {isOpen && (
        <div className="w-60 h-60">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;