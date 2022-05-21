import { appWithTranslation } from 'next-i18next'
import type { AppProps } from 'next/app'
import { Page } from '@/types/page'
import { Layout } from 'components/Layout'
import { RouteGuard } from '@/components/RouteGuard'
import { UiProvider } from '@/context/ui'
import '@/styles/globals.css'
import '@/styles/datepicker.css'

type Props = AppProps & {
  Component: Page
}

const MyApp = ({ Component, pageProps }: Props) => {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <UiProvider>
      <Layout>
        <RouteGuard>{getLayout(<Component {...pageProps} />)}</RouteGuard>
      </Layout>
    </UiProvider>
  )
}

export default appWithTranslation(MyApp)
