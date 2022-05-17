import type { NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { SignIn } from '@page-components/Auth'

const SignInPage: NextPage = () => {
  return <SignIn />
}

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['auth'])),
  },
})

export default SignInPage
