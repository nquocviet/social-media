import React from 'react'
import { useTranslation } from 'next-i18next'
import { At, CaretLeft } from 'phosphor-react'
import { Anchor } from '@/components/Anchor'
import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'
import { Input } from '@/components/Input'
import Layout from './Layout'

const ForgotPassword = () => {
  const { t } = useTranslation('auth')
  const { t: ts } = useTranslation('common')

  return (
    <Layout>
      <Heading className="text-display-sm">{t('forgot-password')}</Heading>
      <p className="pt-2 pb-12 font-semibold">{t('enter-email')}</p>
      <form className="w-full">
        <div className="mb-5">
          <Input placeholder={t('your-email')} prefix={<At size={20} />} />
        </div>
        <div className="mb-7">
          <Button type="submit" fluid>
            {ts('send')}
          </Button>
        </div>
        <p className="text-center font-semibold">
          <Anchor href="/sign-in">
            <CaretLeft size={16} weight="bold" className="mr-1" />
            {t('back-signin')}
          </Anchor>
        </p>
      </form>
    </Layout>
  )
}

export default ForgotPassword
