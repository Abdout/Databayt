'use client';
import { LoginButton } from "@/component/auth/login-button";
import MdButton from "@/component/atom/button/md";
import MdIcon from "@/component/atom/icon/md";
import Image from "next/image";
import Modal from "@/component/atom/modal/modal";
import { useModal } from "@/provider/modal";
import Readme from "@/component/home/readme";


export default function Home() {
  const { modal, openModal } = useModal();
  return (
    <>
    {modal.open && modal.id === null && <Modal content={<Readme />} big = {true}/>}
    <div className="flex flex-col items-center justify-center min-h-screen space-y-1 text-start">
      <h1 className="text-3xl text-start pt-40">Databayt</h1>
      <Image 
      className="pb-6"
      src='/pen.png' width={200} height={200} alt='Pen'
      />
      <LoginButton asChild>
        <MdButton placeholder="Get started" />
      </LoginButton>
      
      <p className="text-[14px]  font-light tracking-wider text-start pt-36">
        To <strong>contribute</strong>, you may track the ongoing development by reviewing the Design, Source
        Code, <br/>Discussion and Roadmap on Figma, GitHub, Discord, and
        Readme, respectively.
      </p>
      <div className="flex gap-6 items-center pt-4">
        <MdIcon
          src="/contribute/figma.png"
          alt="Figma"
          path="https://www.figma.com/file/pAkG4vBJ7t6iZfsvumbRMI/Databayt?type=design&node-id=0%3A1&mode=design&t=EN4ApP1h6DVPiNFA-1"
        />
        <MdIcon
          src="/contribute/github.png"
          alt="Github"
          path="https://github.com/Abdout/Databayt"
        />
        
        <MdIcon
          src="/contribute/discord.png"
          alt="Discord"
          path="https://discord.gg/ZBf9qGyH"
        />
        
        <button onClick={() => openModal(null)}>
        <MdIcon
          src="/contribute/readme.png"
          alt="Readme"
          path=""
        />
        </button>
      </div>
    </div>
    </>
  );
}