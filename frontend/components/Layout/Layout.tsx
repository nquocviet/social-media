import Head from 'next/head'
import React, { ReactNode } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

type TLayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: TLayoutProps) => {
  const isAuth = false

  return (
    <>
      <Head>
        <title>Meetmax</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen items-stretch">
        {isAuth && <Sidebar />}
        <div className="flex w-full flex-col items-stretch">
          {isAuth && <Header />}
          <main className="flex-1">{children}</main>
        </div>
      </div>
    </>
  )
}

export default Layout
