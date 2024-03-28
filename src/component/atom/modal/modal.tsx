"use client";
import { useModal } from "@/provider/modal";
import React from "react";

interface Props {
  content: React.ReactNode;
  big?: boolean; // Add the 'big' prop here
  left?: boolean; // Add the 'left' prop here
}

function Modal({ content, big = false, left = false }: Props) { // Set a default value for 'big' and 'left'
  const { closeModal } = useModal();
 
  return (
    <div className={`fixed inset-0 w-full h-screen z-50 flex ${left ? 'justify-start' : 'justify-center'} items-center`}>
      <div className="absolute inset-0 w-full h-screen bg-black bg-opacity-70" onClick={closeModal}></div>
      <div className={`relative m-4 p-8 z-50 bg-[#fcfcfc] sm:text-sm ${big ? 'max-w-4xl w-[35rem] h-[42rem]' : 'max-w-2xl w-[25rem] h-[32rem]'} ${left ? 'left-0 w-60 h-screen' : ''}`}>
        {content}
      </div>
    </div>
  );
}

export default Modal;