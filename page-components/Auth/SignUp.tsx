import React, { useState } from 'react'
import { useTranslation } from 'next-i18next'
import { At, Calendar, GenderMale, LockSimple, Smiley } from 'phosphor-react'
import { Anchor } from '@/components/Anchor'
import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'
import { Input } from '@/components/Input'
import { Grid } from '@/components/Grid'
import { GenderInput } from '@/components/GenderInput'
import Layout from './Layout'
import { DatePicker } from '@/components/DatePicker'
import { fetcher } from '@/lib/fetcher'

const SignUp = () => {
  const { t } = useTranslation('auth')
  const [birthday, setBirthday] = useState(new Date())
  const [gender, setGender] = useState('0')

  return (
    <Layout>
      <Heading className="text-display-sm">{t('get-started')}</Heading>
      <p className="pt-2 pb-12 font-semibold">{t('create-account')}</p>
      <form className="w-full">
        <div className="mb-5">
          <Input placeholder={t('your-email')} prefix={<At size={20} />} />
        </div>
        <div className="mb-5">
          <Input placeholder={t('your-name')} prefix={<Smiley size={20} />} />
        </div>
        <div className="mb-5">
          <Input
            placeholder={t('your-password')}
            type="password"
            prefix={<LockSimple size={20} />}
          />
        </div>
        <div className="mb-5">
          <Grid row={true}>
            <Grid sm={12} md={6} column={true}>
              <DatePicker
                prefix={<Calendar size={20} />}
                selected={birthday}
                onChange={() => setBirthday(new Date())}
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
    </Layout>
  )
}

export default SignUp
