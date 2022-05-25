import React, { useCallback } from 'react'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { At, LockSimple } from 'phosphor-react'
import { Anchor } from '@/components/Anchor'
import { Button } from '@/components/Button'
import { Checkbox } from '@/components/Checkbox'
import { Heading } from '@/components/Heading'
import { Input } from '@/components/Input'
import { useToggle } from '@/hooks/index'
import { fetcher } from '@/lib/fetcher'
import { useErrorContext } from '@/context/error'
import { getErrorFromJoiMessage } from '@/utils/utils'
import { SignInForm } from '@/types/types'
import { Form, Field } from 'react-final-form'
import Layout from './Layout'

const SignIn = () => {
  const { open: rememberMe, toggle } = useToggle(true)
  const { t } = useTranslation('auth')
  const [errors, setErrors] = useErrorContext()

  const onSubmit = useCallback(async (data: SignInForm) => {
    try {
      const response = await fetcher('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
        }),
      })
    } catch (error: any) {
      if (error.length) {
        setErrors(getErrorFromJoiMessage(error))
      }
    } finally {
    }
  }, [])

  return (
    <Layout>
      <Heading className="text-display-sm">{t('sign-in')}</Heading>
      <p className="pt-2 pb-12 font-semibold">{t('welcome-back')}</p>
      <Form
        onSubmit={onSubmit}
        initialValues={
          {
            email: '',
            password: '',
          } as SignInForm
        }
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit} className="w-full">
            <div className="mb-5">
              <Field name="email">
                {({ input }) => (
                  <Input
                    placeholder={t('your-email')}
                    name="email"
                    value={input.value}
                    onChange={input.onChange}
                    prefix={<At size={20} />}
                    error={errors['email']}
                  />
                )}
              </Field>
            </div>
            <div className="mb-5">
              <Field name="password">
                {({ input }) => (
                  <Input
                    type="password"
                    placeholder={t('your-password')}
                    name="password"
                    value={input.value}
                    onChange={input.onChange}
                    prefix={<LockSimple size={20} />}
                    error={errors['password']}
                  />
                )}
              </Field>
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
            <p className="text-center font-semibold">
              {t('no-account')}
              <Anchor href="/sign-up" className="ml-2">
                {t('sign-up')}
              </Anchor>
            </p>
          </form>
        )}
      />
    </Layout>
  )
}

export default SignIn
