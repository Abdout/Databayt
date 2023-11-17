"use client";
import React, { useState } from 'react';
import { Squeeze as Hamburger } from 'hamburger-react';
import { AnimatePresence, motion } from "framer-motion";
import homeNav from '@/constants/nav';

const Burger = () => {
    const [open, setOpen] = useState(false);
  
  return (
    <div className='md:hidden'>
      <div className='absolute top-[-0.4rem] right-[-0.8rem] z-10'>
        <Hamburger size={20} distance='lg' toggled={open} toggle={setOpen}/>
      </div>
        
        <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed item-center h-screen left-[140px] right-0 top-[-24px] pt-20 shadow-4xl bg-[#FCFCFC]"
          >
            <ul className="grid gap-2">
              {homeNav.map((route, idx) => {
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


export default Burger