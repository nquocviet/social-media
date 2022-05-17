import { appWithTranslation } from 'next-i18next'
import type { AppProps } from 'next/app'
import { Page } from '@types/page'
import { Layout } from 'components/Layout'
import { RouteGuard } from '@components/RouteGuard'
import '@styles/globals.css'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

type Props = AppProps & {
  Component: Page
}

const MyApp = ({ Component, pageProps }: Props) => {
  const getLayout = Component.getLayout ?? ((page) => page)
  const router = useRouter()
  const { locale } = router

  useEffect(() => {
    router.replace(router.pathname, router.pathname, { locale })
  }, [locale])

  return (
    <Layout>
      <RouteGuard>{getLayout(<Component {...pageProps} />)}</RouteGuard>
    </Layout>
  )
}

export default appWithTranslation(MyApp)
