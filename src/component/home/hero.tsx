"use client";
import React from "react";
import MdButton from "../atom/button/md";
import Image from "next/image";
import Lottie from 'lottie-react';
import animationData from '../../../public/animation/slow.json';
import Link from "next/link";
import Title from "../atom/databayt";

const Hero = () => {
  return (
    <div className="-mx-24">
      <div className="md:justify-start md:items-start w-full h-[18rem] md:h-[23rem] px-[120px] pt-10 bg-[#F1F1F1] items-center">
        <div className="md:flex md:justify-center md:items-center md:grid-2 md:gap-60">
          <div>
            <Title title="Databayt" />
            <p className="text-[28px] font-light tracking-wider pt-2 pb-7  leading-[38px]"><strong className="font-regular">Automate</strong> the Boring, <br /> Elevate the Extraordinary.</p>
            <Link href="/getstarted"
              className="pr-[70px] mt-14 ">
              <MdButton placeholder="Get started" />
            </Link>
          </div>
          <div className="flex-col items-center justify-center hidden md:flex rounded-full w-[16rem] h-[16rem] bg-black relative">
            <Lottie animationData={animationData} style={{ width: 320, height: 320 }} />
            <div className="absolute">
              <Image src="/home/pencil.png" alt="Pencil" width={180} height={40} />
              <Image src="/home/memory.png" alt="Memory" width={180} height={40} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;