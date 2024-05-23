"use client";

import React from "react";
import { useModal } from "../logic/modal";

interface Props {
  content: React.ReactNode;
  big?: boolean;
}

function Modal({ content, big = false }: Props) {
  const { modal, openModal, closeModal } = useModal();

  const handleOpenModal = () => {
    openModal('any-id'); // replace 'any-id' with the id you want to use
  };

  return (
    <>
      <button 
      className="border border-gray-400 p-4 hover:border-black"
      onClick={handleOpenModal}>Open Modal</button>
      {modal.open && (
        <div className="fixed inset-0 w-full h-screen z-50 flex justify-center items-center">
          <div className="absolute inset-0 w-full h-screen bg-black bg-opacity-70" onClick={closeModal}></div>
          <div className={`relative m-4 p-8 z-50 bg-[#fcfcfc] sm:text-sm ${big ? 'max-w-4xl w-[35rem] h-[42rem]' : 'max-w-2xl w-[24rem] h-[29rem]'}`}>
            {content}
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;