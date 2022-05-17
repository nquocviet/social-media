import { useState, useEffect, ReactNode } from 'react'
import { useRouter } from 'next/router'

type TRouteGuardProps = {
  children: ReactNode
}

const RouteGuard = ({ children }: TRouteGuardProps): any => {
  const router = useRouter()
  const [authorized, setAuthorized] = useState(false)

  useEffect(() => {
    authCheck(router.asPath)
    const hideContent = () => setAuthorized(false)

    router.events.on('routeChangeStart', hideContent)
    router.events.on('routeChangeComplete', authCheck)

    return () => {
      router.events.off('routeChangeStart', hideContent)
      router.events.off('routeChangeComplete', authCheck)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const authCheck = (url: string) => {
    const initPaths = ['/sign-in', '/sign-up', '/forgot-password']
    const path = url.split('?')[0]
    const user = JSON.parse(localStorage.getItem('user') as any) || null
    const isPrivate = initPaths
      .map((path) => router.locale + path)
      .includes(path)

    if (!user && isPrivate) {
      setAuthorized(false)
      router.push({
        pathname: router.locale + '/sign-in',
        query: { returnUrl: path },
      })
    } else {
      setAuthorized(true)
    }
  }

  return authorized && children
}

export default RouteGuard
