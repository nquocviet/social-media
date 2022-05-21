import type { NextPage } from 'next'
import { i18n } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Following } from '@/page-components/Community'

const FollowingPage: NextPage = () => {
  return <Following />
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

export default FollowingPage
