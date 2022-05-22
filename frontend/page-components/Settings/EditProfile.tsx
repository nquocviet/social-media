import React, { useState } from 'react'
import { useTranslation } from 'next-i18next'
import { Calendar, Camera } from 'phosphor-react'
import { Grid } from '@/components/Grid'
import { Input } from '@/components/Input'
import { DatePicker } from '@/components/DatePicker'
import { GenderInput } from '@/components/GenderInput'
import { Heading } from '@/components/Heading'
import { Button } from '@/components/Button'
import { Avatar } from '@/components/Avatar'
import UserAvatar from '@/public/images/user-avatar.webp'

const EditProfile = () => {
  const { t } = useTranslation('common')
  const { t: ts } = useTranslation('settings')
  const [birthday, setBirthday] = useState(new Date())
  const [gender, setGender] = useState('0')

  return (
    <>
      <Heading className="mb-4 text-lg">{ts('edit_profile')}</Heading>
      <div className="relative mb-6 inline-block">
        <Avatar
          size={120}
          src={UserAvatar.src}
          alt="user avatar"
          className="border-4 border-white"
        />
        <Button
          color="neutral"
          variant="outline"
          className="absolute bottom-0 right-0 -translate-x-1/4 -translate-y-1/4"
          size="sm"
          rounded="full"
          square
        >
          <Camera size={20} />
        </Button>
      </div>
      <Grid spacer={24} row={true}>
        <Grid xs={12} sm={6} column={true}>
          <Input
            label={t('input.full_name')}
            placeholder={t('placeholder.full_name')}
            size="sm"
          />
        </Grid>
        <Grid xs={12} sm={6} column={true}>
          <DatePicker
            label={t('input.birthday')}
            selected={birthday}
            onChange={() => setBirthday(new Date())}
            suffix={<Calendar size={20} />}
            size="sm"
          />
        </Grid>
        <Grid xs={12} sm={6} column={true}>
          <Input
            type="email"
            label={t('input.email')}
            placeholder={t('placeholder.email')}
            size="sm"
          />
        </Grid>
        <Grid xs={12} sm={6} column={true}>
          <Input
            label={t('input.bio')}
            placeholder={t('placeholder.bio')}
            size="sm"
          />
        </Grid>
        <Grid xs={12} sm={6} column={true}>
          <Input
            label={t('input.phone_number')}
            placeholder={t('placeholder.phone_number')}
            size="sm"
          />
        </Grid>
        <Grid xs={12} sm={6} column={true}>
          <Input
            label={t('input.website')}
            placeholder={t('placeholder.website')}
            size="sm"
          />
        </Grid>
        <Grid xs={12} sm={6} column={true}>
          <GenderInput
            label={t('input.gender')}
            selected={gender}
            onChange={(e) => setGender(e.target.value)}
            size="sm"
          />
        </Grid>
        <Grid xs={12} sm={6} column={true}>
          <Input
            label={t('input.location')}
            placeholder={t('placeholder.location')}
            size="sm"
          />
        </Grid>
      </Grid>
      <Heading className="mt-8 mb-4 text-lg">{ts('social_link')}</Heading>
      <Grid spacer={24} row={true}>
        <Grid xs={12} sm={6} column={true}>
          <Input
            label={t('input.facebook')}
            placeholder={t('placeholder.facebook')}
            size="sm"
          />
        </Grid>
        <Grid xs={12} sm={6} column={true}>
          <Input
            label={t('input.twitter')}
            placeholder={t('placeholder.twitter')}
            size="sm"
          />
        </Grid>
        <Grid xs={12} sm={6} column={true}>
          <Input
            label={t('input.instagram')}
            placeholder={t('placeholder.instagram')}
            size="sm"
          />
        </Grid>
        <Grid xs={12} sm={6} column={true}>
          <Input
            label={t('input.linkedin')}
            placeholder={t('placeholder.linkedin')}
            size="sm"
          />
        </Grid>
      </Grid>
      <div className="mt-4 flex justify-end">
        <Button color="neutral" variant="outline" size="sm" className="mr-4">
          {t('action.cancel')}
        </Button>
        <Button size="sm">{t('action.save_changes')}</Button>
      </div>
    </>
  )
}

export default EditProfile
