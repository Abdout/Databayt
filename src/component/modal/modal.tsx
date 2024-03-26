// "use client";
import { useGlobalState } from "@/provider/globalProvider";
import React from "react";

function Modal(props: { content: React.ReactNode }) {
  const { closeModal } = useGlobalState();

  return (
    <div>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40" onClick={closeModal}></div>
      <div className="relative m-1 p-2 w-full z-10 border bg-green-500  ">{props.content}</div>
    </div>
  );
}

export default Modal;
