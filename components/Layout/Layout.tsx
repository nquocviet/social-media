import React, { ReactNode, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useErrorContext } from '@/context/error'
import Header from './Header'
import Sidebar from './Sidebar'

type TLayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: TLayoutProps) => {
  const router = useRouter()
  const [_, setErrors] = useErrorContext()
  const isAuth = false

  useEffect(() => {
    setErrors({})
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.asPath])

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
          <div className="flex flex-1 items-stretch">{children}</div>
        </div>
      </div>
    </>
  )
}

export default Layout
