import React, { ReactNode } from 'react'
import Header from './Header'

type TLayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: TLayoutProps) => {
  return (
    <div className="flex h-screen flex-col items-stretch">
      <Header />
      <div className="flex flex-1 justify-center bg-gray-50">
        <div className="mt-8 w-full max-w-[500px] px-4">
          <div className="flex w-full flex-col items-center rounded-2xl bg-white p-4 text-center drop-shadow-sm sm:p-6">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout
