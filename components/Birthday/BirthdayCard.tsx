import React from 'react'
import { useTranslation } from 'next-i18next'
import { Avatar } from '../Avatar'
import { Textarea } from '../Textarea'
import UserAvatar from '@/public/images/user-avatar.webp'

const BirthdayCard = () => {
  const { t } = useTranslation('common')

  return (
    <div className="flex flex-col items-stretch">
      <div className="mb-2 flex items-start">
        <Avatar
          className="mr-4"
          size={40}
          src={UserAvatar.src}
          alt="user avatar"
        />
        <div className="flex flex-col items-stretch">
          <div className="font-semibold">Radovan SkillArena</div>
          <div className="mb-1 text-sm text-gray-400">
            {t('birthday_today')}
          </div>
        </div>
      </div>
      <Textarea placeholder={t('placeholder.congratulation_now')} />
    </div>
  )
}

export default BirthdayCard
