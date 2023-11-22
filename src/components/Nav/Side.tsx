// Side.tsx
"use client"
import React, { useState, useEffect, useRef, MouseEvent } from "react";
import { Squeeze as Hamburger } from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";
import FileOpacity from "../Atom/Button/Opacity/File";
import VoltOpacity from "../Atom/Button/Opacity/Volt";
import DropOpacity from "../Atom/Button/Opacity/Text";

const Side = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handler = (e: MouseEvent | TouchEvent) => {
      const targetNode =
        "touches" in e
          ? (e as TouchEvent).touches[0].target
          : (e as MouseEvent).target;

      if (
        targetNode &&
        menuRef.current &&
        !menuRef.current.contains(targetNode as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  const closeSidebar = () => {
    setOpen(false);
  };

  return (
    <div className="md:hidden">
      <div className="flex -m-3">
        <Hamburger size={20} distance="lg" toggled={open} toggle={setOpen} />
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed item-center h-screen right-[130px] left-0 top-[-24px] pt-12 pl-4 shadow-4xl bg-[#FCFCFC]"
            ref={menuRef}
          >
            <div className="flex flex-col gap-4">
              <FileOpacity
                tag={{
                  img: ["/file.png", "/pdf.png"],
                  text: ["Docs", "Manual"],
                }}
              />
              <VoltOpacity label={["LV", "MV", "HV", "EH"]} />

              <hr className="border-t-1 border-black mr-3 my-2 mt-0" />

              <DropOpacity closeSidebar={closeSidebar} />

              <div className="flex flex-col gap-2 justify-end mt-40 pb-4">
                <h1>Setting</h1>
                <h1>Community</h1>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Side;
