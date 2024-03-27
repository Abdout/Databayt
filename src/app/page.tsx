import { LoginButton } from "@/component/auth/login-button";
import MdButton from "@/component/atom/button/md";
import MdIcon from "@/component/atom/icon/md";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-2 text-start">
      <h1 className="text-3xl text-start pt-40">Databayt</h1>
      <p className="text-2xl text-start ">Business Automation</p>
      <Image 
      className="pb-4"
      src='/pen.png' width={200} height={200} alt='Pen'
      />
      <LoginButton asChild>
        <MdButton placeholder="Get started" />
      </LoginButton>
      
      <p className="text-[14px] -mt-2 font-light tracking-wider text-start pt-40">
        To <strong>contribute</strong>, you may track the ongoing development by reviewing the Design, Source
        Code, <br/>Discussion and Roadmap on Figma, GitHub, Discord, and
        Readme, respectively.
      </p>
      <div className="flex gap-7 items-center pt-2">
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
        <MdIcon
          src="/contribute/readme.png"
          alt="Readme"
          path=""
        />
      </div>
    </div>
  );
}