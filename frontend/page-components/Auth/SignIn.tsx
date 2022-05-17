import React from 'react'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { At, LockSimple } from 'phosphor-react'
import { Anchor } from '@components/Anchor'
import { Button } from '@components/Button'
import { Checkbox } from '@components/Checkbox'
import { Heading } from '@components/Heading'
import { Input } from '@components/Input'
import { useToggle } from '@hooks/index'
import Header from './Header'
import Layout from './Layout'

const SignIn = () => {
  const { open: rememberMe, toggle } = useToggle(true)
  const { t } = useTranslation('auth')

  return (
    <div className="flex h-screen flex-col items-stretch">
      <Header />
      <Layout>
        <Heading className="text-display-sm">{t('sign-in')}</Heading>
        <p className="pt-2 pb-12 font-semibold">{t('welcome-back')}</p>
        <form className="w-full">
          <div className="mb-5">
            <Input placeholder={t('your-email')} prefix={<At size={20} />} />
          </div>
          <div className="mb-5">
            <Input
              placeholder={t('your-password')}
              type="password"
              prefix={<LockSimple size={20} />}
            />
          </div>
          <div className="mb-5">
            <div className="flex items-center justify-between sm:px-4">
              <Checkbox
                label={t('remember-me')}
                checked={rememberMe}
                onChange={toggle}
              />
              <Link href="/forgot-password">
                <a className="hover:underlined">{t('forgot-password')}</a>
              </Link>
            </div>
          </div>
          <div className="mb-7">
            <Button type="submit" fluid>
              {t('sign-in')}
            </Button>
          </div>
          <p className="text-center">
            {t('no-account')}
            <Anchor href="/sign-up" className="ml-2">
              {t('sign-up')}
            </Anchor>
          </p>
        </form>
      </Layout>
    </div>
  )
}

export default SignIn
