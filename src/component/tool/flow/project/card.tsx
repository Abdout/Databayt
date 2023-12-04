import SmIcon from "@/component/atom/icon/sm";
import React from "react";

const Card = () => {
  return (
    <div className="border p-4 w-fit">
      <h1>RTCC</h1>
      <h2 className="mb-4">Jubial regoin</h2>
      <SmIcon src="/profile.png" alt="Osman" path="" />
      <div className="flex items-center gap-2 pl-2 pt-4">
        <div className="rounded-full w-4 h-4 bg-green-500"></div>
        <h2>On going</h2>
      </div>
      <div className="flex justify-end gap-2 mt-4">
        <SmIcon src="/edit.png" alt="Edit" path="/tool/flow/project/edit"/>
        <SmIcon src="/delete.png" alt="Delete" path=""/>
      </div>
    </div>
  );
};

export default Card;
