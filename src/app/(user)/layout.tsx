import React from 'react'
import Sidebar from './dashboard/_components/Side-Bar'

type Props = {
  children: React.ReactNode
}

function layout({ children }: Props) {
  return (
          <div className="flex flex-col ">
          <div className="flex">
        <Sidebar />
            <div className="flex-1 overflow-auto h-screen w-full">
              {children}
            </div>
          </div>
      </div>

  )
}

export default layout
