import Databayt from '@/component/atom/databayt'
import MdIcon from '@/component/atom/icon/md'
import React from 'react'

const Atom = () => {
  return (
    <div className='flex flex-col space-y-4 items-center justify-center h-screen overflow-hidden'>
      <div className='flex flex-col items-start justify-start -mt-10'>
        <Databayt title='Atom' description='Reusable' />
        <p className="text-[18px] font-light tracking-wider -ml-2 py-4">
          To <strong>contribute</strong>, you may track the ongoing development by reviewing<br/>the Readme,
          Code, Design, Discussion and Live demo respectively.
        </p>
        <div className="flex gap-6 pt-6 items-start">
          <MdIcon
            src="/contribute/readme.png"
            alt="Readme"
            path="/readme"
          />
          <MdIcon
            src="/contribute/github.png"
            alt="Github"
            path="https://github.com/abdout/databayt"
          />
          <MdIcon
            src="/contribute/figmab.png"
            alt="Figma"
            path="https://www.figma.com/file/pAkG4vBJ7t6iZfsvumbRMI/Databayt?type=design&node-id=0%3A1&mode=design&t=EN4ApP1h6DVPiNFA-1"
          />
          <MdIcon
            src="/contribute/discord.png"
            alt="Discord"
            path="https://discord.gg/uPa4gGG62c"
          />
          <MdIcon
            src="/contribute/link.png"
            alt="Live"
            path="/atom/live"
          />
        </div>
      </div>
    </div>
  )
}

export default Atom