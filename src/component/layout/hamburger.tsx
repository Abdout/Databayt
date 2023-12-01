"use client";
import React, { useState } from "react";
import { Squeeze as Hamburger } from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";
import homeNav from "@/constant/homeNav";
import flowNav from "@/constant/flowNav";


const Burger = (props:{
    left: number;
    right: number;
    item: string[];
}) => {
  const [open, setOpen] = useState(false);

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
            className="fixed item-center h-screen right-[{props.right}] left-[props.left] top-[-24px] pt-12 pl-4 shadow-4xl bg-[#FCFCFC]"
          >
            <div className="flex items-center gap-2 p-8">
                      <div className="rounded-full w-4 h-4 bg-black"></div>
                      <h1>Brand</h1>
                    </div>
            <ul className="grid gap-2">
              {flowNav.map((route, idx) => {
                // const { Icon } = route;

                return (
                  <motion.li
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1 + idx / 10,
                    }}
                    key={route.title}
                    className="w-full p-[0.08rem]"
                  >
                    
                    <a
                      onClick={() => setOpen((prev) => !prev)}
                      className={
                        "flex items-center justify-between w-full px-4 p-2 "
                      }
                      href={route.path}
                    >
                      <span className="flex gap-1 text-lg">{route.title}</span>
                      {/* <Icon className="text-xl" /> */}
                    </a>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Burger;
