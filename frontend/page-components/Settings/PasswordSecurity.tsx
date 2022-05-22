import React from 'react'
import { useTranslation } from 'next-i18next'
import { Button } from '@/components/Button'
import { Grid } from '@/components/Grid'
import { Heading } from '@/components/Heading'
import { Input } from '@/components/Input'
import { Session } from '@/components/Session'
import { Switch } from '@/components/Switch'
import useToggle from '@/hooks/useToggle'

const sessions = ['desktop', 'laptop', 'tablet', 'mobile']

const PasswordSecurity = () => {
  const { t } = useTranslation('common')
  const { t: ts } = useTranslation('settings')
  const { open: smsAuth, toggle: setSmsAuth } = useToggle()
  const { open: phoneAuth, toggle: setPhoneAuth } = useToggle()

  return (
    <>
      <Heading className="mb-4 text-lg">{ts('where_logged_in')}</Heading>
      <div className="mb-4">
        <Grid row={true}>
          {sessions.map((session: any) => (
            <Grid xs={12} column={true}>
              <Session device={session} />
            </Grid>
          ))}
        </Grid>
      </div>
      <Heading className="mb-4 text-lg">{ts('change_password')}</Heading>
      <div className="mb-4 max-w-[480px]">
        <Input size="sm" className="mb-4" label={ts('current_password')} />
        <Input size="sm" className="mb-4" label={ts('new_password')} />
        <Input size="sm" className="mb-4" label={ts('retype_password')} />
        <div className="flex justify-end">
          <Button>{t('action.confirm')}</Button>
        </div>
      </div>
      <Heading className="mb-4 text-lg">{ts('two_factor')}</Heading>
      <div className="mb-4 flex items-center justify-between last:mb-0">
        <div className="mr-2 flex flex-col">
          <Heading level={3}>{ts('sms')}</Heading>
          <p>{ts('sms_description')}</p>
        </div>
        <div className="flex-shrink-0">
          <Switch active={smsAuth} onChange={setSmsAuth} />
        </div>
      </div>
      <div className="mb-4 flex items-center justify-between last:mb-0">
        <div className="mr-2 flex flex-col">
          <Heading level={3}>{ts('phone')}</Heading>
          <p>{ts('phone_description')}</p>
        </div>
        <div className="flex-shrink-0">
          <Switch active={phoneAuth} onChange={setPhoneAuth} />
        </div>
      </div>
      <div className="mb-4 flex items-center justify-between last:mb-0">
        <div className="mr-2 flex flex-col">
          <Heading level={3}>{ts('backup_codes')}</Heading>
          <p>{ts('backup_codes_description')}</p>
        </div>
        <div className="flex-shrink-0">
          <Button color="neutral">{t('action.regenerate')}</Button>
        </div>
      </div>
    </>
  )
}

export default PasswordSecurity
