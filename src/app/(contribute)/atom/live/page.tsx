// Live.tsx
import Navbar from '@/component/live/navbar'
// import PropsComponent from '@/component/live/props'
import { Provider } from '@/component/live/provider'
import ComponentRenderer from '@/component/live/render'

import React from 'react'

const Live: React.FC = () => {
  return (
    <Provider>
      <Navbar />
      {/* <PropsComponent /> */}
      <ComponentRenderer />
    </Provider>
  )
}

export default Live