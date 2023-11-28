import { navLink } from "@/constants/link";
import Link from "next/link";
import React from "react";
import Burger from "./Burger";
import Image from "next/image";

const Nav = () => {
  return (
    <div className="flex gap-4 items-center justify-center">
      <ul className="hidden h-full gap-6 md:flex ">
        {navLink.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="text-sm font-normal tracking-wide opacity-50 flexCenter cursor-pointer
            pb-1.5 transition-all hover:text-black"
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div className=" flex gap-8">
        <Image
          className=" hidden   md:flex"
          src="/search.png"
          alt=""
          width={20}
          height={15}
        />
        <Burger />
      </div>
    </div>
  );
};

export default Nav;
