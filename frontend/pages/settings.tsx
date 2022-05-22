import type { NextPage } from 'next'
import { i18n } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Settings } from '@/page-components/Settings'

const SettingsPage: NextPage = () => {
  return <Settings />
}

export const getStaticProps = async ({ locale }: { locale: string }) => {
  if (process.env.NODE_ENV === 'development') {
    await i18n?.reloadResources()
  }

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'settings'])),
    },
  }
}

export default SettingsPage
