import Tool from '@/component/tool/root/hero'
import Back from '@/component/atom/icon/back'
import ToolIcon from '@/component/tool/root/icon'
import React from 'react'

const Fix = () => {
  return (
    <>
    <Back path='/tool'/>
    <Tool
      title="FIX"
      subtitle="When all else fails, read the instructions"
      desc="Blog, community, manual, course and technical support bot."
    />
    <div className="grid gap-3 grid-cols-2 items-center justify-center">
      <ToolIcon src="/test.png" width={100} height={100} alt="T&C" path='/tool/fix/test'/>
      <ToolIcon src="/wheel.png" width={100} height={100} alt="Automative" path='/tool/fix/automative'/>
      <ToolIcon src="/power.png" width={100} height={100} alt="Generator" path='/tool/fix/generator'/>
      <ToolIcon src="/fan.png" width={100} height={100} alt="Appliance" path='/tool/fix/appliance'/>
    </div>
  </>
  )
}

export default Fix