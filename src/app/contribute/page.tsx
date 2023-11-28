import MicroIcon from "@/components/atom/icon/micro";
import React from "react";

const Conribute = () => {
  return (
    <div className="flex flex-col gap-6">
      <h1>Contribute</h1>
      <p className="text-[14px] -mt-2 font-light tracking-wider">
        You may track the ongoing development by reviewing the Design, Source
        Code and Discussion on Figma, GitHub, Discord, and
        WhatsApp, respectively.
      </p>
      <div className="flex gap-5 items-center ">
        <MicroIcon
          src="/figma.png"
          alt="Figma"
          path="https://www.figma.com/file/2IL6tuiu2hkArwGY2H73A2/Databayt?type=design&node-id=919%3A1332&mode=design&t=QFcofhh6CIgTp9Pe-1"
        />

        <MicroIcon
          src="/github.png"
          alt="Github"
          path="https://github.com/Abdout/Databayt"
        />

        <MicroIcon
          src="/discord.png"
          alt="Discord"
          path="https://discord.gg/VQaGcGgJ"
        />

        <MicroIcon
          src="/whatsapp.png"
          alt="Whatsapp"
          path="https://chat.whatsapp.com/Jnntf6LZWQc1Cjzxn0tSwc"
        />
      </div>
      <h1>Skill</h1>
      <div className="flex gap-4 items-center">
        <MicroIcon
          src="/typescript.png"
          alt="Typescript"
          path="https://www.figma.com/community/file/1303390002899241380/databayt"
        />

        <MicroIcon
          src="/react.png"
          alt="React"
          path="https://github.com/Abdout/Databayt"
        />

        <MicroIcon
          src="/nextjs.png"
          alt="Discord"
          path="https://www.figma.com/community/file/1303390002899241380/databayt"
        />

        <MicroIcon
          src="/express.svg"
          alt="Express"
          path="https://www.figma.com/community/file/1303390002899241380/databayt"
        />

        <MicroIcon
          src="/git.jpg"
          alt="Express"
          path="https://www.figma.com/community/file/1303390002899241380/databayt"
        />
      </div>

      <div className="flex gap-4">
        <MicroIcon
          src="/mongodb.svg"
          alt="MongoDB"
          path="https://www.figma.com/community/file/1303390002899241380/databayt"
        />
        <MicroIcon
          src="/node.png"
          alt="MongoDB"
          path="https://www.figma.com/community/file/1303390002899241380/databayt"
        />

        <div className="pt-2">
        <MicroIcon
          src="/tailwind.png"
          alt="MongoDB"
          path="https://www.figma.com/community/file/1303390002899241380/databayt"
          />
          </div>
        
        <div className="w-[45px] h-[45px]">
          <MicroIcon
            src="/webassembly.jpg"
            alt="Webassembly"
            path="https://github.com/Abdout/Databayt"
          />
        </div>

        <MicroIcon
          src="/rust.svg"
          alt="Rust"
          path="https://github.com/Abdout/Databayt"
        />
      </div>
      <div className="text-[14px]">
        <h1>Block</h1>
        <div className="flex gap-4">
          <div className="bg-black text-[#FCFCFC] font-medium p-2 mt-3 ">
            Forntend
          </div>
          <div className="bg-black text-[#FCFCFC] font-mediump p-2 mt-3 ">
            Backend
          </div>
          <div className="bg-black text-[#FCFCFC] font-medium p-2 mt-3 ">
            API
          </div>
          <div className="bg-black text-[#FCFCFC] font-medium p-2 mt-3 ">
            Database
          </div>
        </div>
        <div>
          <hr className="border-t-1 border-black mr-3 my-2 mt-3" />
        </div>

        <div className="flex gap-4">
          <div className="border border-black p-2 mt-3 ">Auth</div>
          <div className="border border-black p-2 mt-3 ">Memberbase</div>
          <div className="border border-black p-2 mt-3 opacity-60">Search</div>
          <div className="border border-black p-2 mt-3 opacity-60">SEO</div>
        </div>

        <div className="flex gap-4">
          <div className="border border-black p-2 mt-3">
            Responsive
          </div>
          <div className="border border-black p-2 mt-3 opacity-60">
            Animation
          </div>
          <div className="border border-black p-2 mt-3 ">Hook</div>
          <div className="border border-black p-2 mt-3 ">Icon</div>
        </div>

        <div className="flex gap-4">
          <div className="border border-black p-2 mt-3 ">Desgin</div>
          <div className="border border-black p-2 mt-3 ">Plugin</div>
          <div className="border border-black p-2 mt-3 ">Library</div>
          <div className="border border-black p-2 mt-3 opacity-60">Docs</div>
        </div>

        <div className="flex gap-4">
          <div className="border border-black p-2 mt-3 opacity-60">
            Optimize
          </div>
          <div className="border border-black p-2 mt-3 opacity-60">
            Metadata
          </div>
          <div className="border border-black p-2 mt-3 opacity-60">Test</div>
          <div className="border border-black p-2 mt-3 ">Deploy</div>
        </div>

        <div className="flex gap-4">
        <div className="border border-black p-2 mt-3 opacity-60">Secuirty</div>
          <div className="border border-black p-2 mt-3 opacity-60">AI</div>
          <div className="border border-black p-2 mt-3 opacity-60">
            Blochchain
          </div>
        </div>

        <div className="text-[14px] py-2 mt-2 tracking-wider">
        <h1>Road map</h1>
          <div className="text-[15px] font-meduim mt-2">
            <h1>Phase one</h1>
            <h1>Set point: Dashboard</h1>
            <h1>Inspired by: Monday</h1>
            <h1>Step:</h1>
          </div>

          <div className="text-[15px] p-2 py-3 px-6 mb-8 space-y-1 text-blue-800 cursor-pointer tracking-wide">
            <h1>1. Desgin</h1>
            <h1>2. Database </h1>
            <h1>3. Authentication</h1>
            <h1>4. Task CRUD </h1>
            <h1>5. Task view</h1>
            <h1>6. User management</h1>
            <h1>7. Notification </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conribute;
