import React, { useCallback, useState } from 'react'
import { Trans, useTranslation } from 'next-i18next'
import { At, Calendar, GenderMale, LockSimple, Smiley } from 'phosphor-react'
import { Anchor } from '@/components/Anchor'
import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'
import { Input } from '@/components/Input'
import { Grid } from '@/components/Grid'
import { GenderInput } from '@/components/GenderInput'
import { Checkbox } from '@/components/Checkbox'
import { DatePicker } from '@/components/DatePicker'
import { fetcher } from '@/lib/fetcher'
import { Form, Field } from 'react-final-form'
import useToggle from '@/hooks/useToggle'
import { SignUpForm } from '@/types/types'
import { getErrorFromJoiMessage } from '@/utils/utils'
import Layout from './Layout'
import { useErrorContext } from '@/context/error'

const SignUp = () => {
  const { t } = useTranslation('auth')
  const [birthday, setBirthday] = useState(new Date('1-1-2000'))
  const [gender, setGender] = useState('0')
  const { open: acceptedTerms, toggle } = useToggle(true)
  const [errors, setErrors] = useErrorContext()

  const onSubmit = useCallback(async (data: SignUpForm) => {
    const { acceptedTerms, ...rest } = data

    try {
      const response = await fetcher('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...rest,
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
      <Heading className="text-display-sm">{t('get-started')}</Heading>
      <p className="pt-2 pb-12 font-semibold">{t('create-account')}</p>
      <Form
        onSubmit={onSubmit}
        initialValues={
          {
            email: '',
            username: '',
            password: '',
            gender: +gender,
            birthday,
            acceptedTerms,
          } as SignUpForm
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
              <Field name="username">
                {({ input }) => (
                  <Input
                    placeholder={t('your-name')}
                    name="username"
                    value={input.value}
                    onChange={input.onChange}
                    prefix={<Smiley size={20} />}
                    error={errors['username']}
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
              <Grid row={true}>
                <Grid sm={12} md={6} column={true}>
                  <DatePicker
                    name="birthday"
                    prefix={<Calendar size={20} />}
                    selected={birthday}
                    onChange={(date) => setBirthday(date)}
                    error={errors['birthday']}
                  />
                </Grid>
                <Grid sm={12} md={6} column={true}>
                  <GenderInput
                    prefix={<GenderMale size={20} />}
                    selected={gender}
                    onChange={(e) => setGender(e.target.value)}
                  />
                </Grid>
              </Grid>
            </div>
            <div className="mb-5">
              <div className="flex items-center justify-between sm:px-4">
                <Checkbox
                  label={
                    <Trans i18nKey="action.accept_terms">
                      I agree to all the <Anchor href="/#">terms</Anchor> and{' '}
                      <Anchor href="/#">privacy</Anchor>
                    </Trans>
                  }
                  checked={acceptedTerms}
                  onChange={toggle}
                />
              </div>
            </div>
            <div className="mb-7">
              <Button type="submit" fluid>
                {t('sign-up')}
              </Button>
            </div>
            <p className="text-center font-semibold">
              {t('have-account')}
              <Anchor href="/sign-in" className="ml-2">
                {t('sign-in')}
              </Anchor>
            </p>
          </form>
        )}
      />
    </Layout>
  )
}

export default SignUp
