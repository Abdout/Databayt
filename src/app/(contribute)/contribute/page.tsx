import Databayt from '@/component/atom/databayt'
import MdIcon from '@/component/atom/icon/md'
import React from 'react'

const Contribute = () => {
  return (
    <div className='flex flex-col space-y-4 items-center justify-center h-screen overflow-hidden'>
      <div className='flex flex-col items-start justify-start -mt-10'>
        <Databayt title='Databayt' description='Contributors' />
        <p className="text-[18px] font-light tracking-wider pl-1 py-4">
          To <strong>contribute</strong>, you may track the ongoing development by<br/>reviewing the Readme,
          Code, Design and Discussion respectively.
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
            path="https://github.com/abdout/beta"
          />
          <MdIcon
            src="/contribute/figma.png"
            alt="Figma"
            path="https://www.figma.com/file/pAkG4vBJ7t6iZfsvumbRMI/Databayt?type=design&node-id=0%3A1&mode=design&t=EN4ApP1h6DVPiNFA-1"
          />
          <MdIcon
            src="/contribute/discord.png"
            alt="Discord"
            path="https://discord.gg/uPa4gGG62c"
          />
        </div>
      </div>
    </div>
  )
}

export default Contribute