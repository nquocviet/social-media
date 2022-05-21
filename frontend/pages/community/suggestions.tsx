import type { NextPage } from 'next'
import { i18n } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Suggestions } from '@/page-components/Community'

const SuggestionsPage: NextPage = () => {
  return <Suggestions />
}

export const getStaticProps = async ({ locale }: { locale: string }) => {
  if (process.env.NODE_ENV === 'development') {
    await i18n?.reloadResources()
  }

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}

export default SuggestionsPage
