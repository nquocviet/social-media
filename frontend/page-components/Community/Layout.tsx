import React, { ReactNode } from 'react'
import Header from './Header'
import { FriendList, Main } from '@/components/Layout'

type TLayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: TLayoutProps) => {
  return (
    <>
      <Main>
        <div className="flex w-full flex-col items-stretch">
          <Header />
          <div>{children}</div>
        </div>
      </Main>
      <FriendList />
    </>
  )
}

export default Layout
