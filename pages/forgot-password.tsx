import type { NextPage } from 'next'
import { i18n } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { ForgotPassword } from '@/page-components/Auth'

const ForgotPasswordPage: NextPage = () => {
  return <ForgotPassword />
}

export const getStaticProps = async ({ locale }: { locale: string }) => {
  if (process.env.NODE_ENV === 'development') {
    await i18n?.reloadResources()
  }

  return {
    props: {
      ...(await serverSideTranslations(locale, ['auth', 'common'])),
    },
  }
}

export default ForgotPasswordPage
