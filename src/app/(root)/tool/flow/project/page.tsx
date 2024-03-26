"use client";
import Modal from "@/component/modal/modal";
import TopicsList from "@/component/tool/flow/project/TopicsList";
import { useState } from "react";
import MdIcon from "@/component/atom/icon/md";

import React from "react";
import Add from "./add/page";

const Project = () => {
  
  const [show, setShow] = useState(false);
  return (
    <div className="flex grid-4 gap-4">
      <TopicsList />
      <button
        onClick={() => setShow(true)}
        className="border justify-center item-center p-10 w-fit"
      >
        <MdIcon src="/plus.png" alt="Add" path="" />
      </button>
      {show && <Add onClose={() => setShow(false)} />}
    </div>
  );
};

export default Project;
