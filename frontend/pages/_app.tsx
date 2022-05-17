import type { AppProps } from 'next/app'
import type { Page } from '../types/page'
import { Layout } from 'components/Layout'
import '@styles/globals.css'

type Props = AppProps & {
  Component: Page
}

const MyApp = ({ Component, pageProps }: Props) => {
  const getLayout = Component.getLayout ?? ((page) => page)

  return <Layout>{getLayout(<Component {...pageProps} />)}</Layout>
}

export default MyApp
