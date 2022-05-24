import React, { ReactNode } from 'react'

type TMainProps = {
  children: ReactNode
}

const Main = ({ children }: TMainProps) => {
  return (
    <main className="flex flex-1 items-stretch rounded-tl-2xl rounded-tr-2xl bg-gray-50 p-layout">
      {children}
    </main>
  )
}

export default Main
