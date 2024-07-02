// HamburgerMenu.tsx
"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import hamburger from "./constant";
import { Icon } from "@iconify/react";
import Link from "next/link";

interface HamburgerMenuProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ open, setOpen }) => {
  return (
    <div className="" dir="rtl">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed item-center h-screen left-[140px] md:left-[750px] right-0 top-[-24px] buttom-0 shadow-4xl pt-20 bg-[#FCFCFC] dark:bg-gray-950 dark:text-[#fcfcfc] z-40"
          >
            <ul className="grid gap-2">
              {hamburger.map((route, idx) => {
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
                    <Link
                      onClick={() => setOpen((prev) => !prev)}
                      className={
                        "flex items-center w-full gap-4 px-28 p-2 "
                      }
                      href={route.path}
                    >
                      {route.icon && <Icon icon={route.icon} width={25} className="flex-shrink-0" />}
                      <span className="flex gap-1 text-lg">{route.title}</span>
                    </Link>
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

export default HamburgerMenu;