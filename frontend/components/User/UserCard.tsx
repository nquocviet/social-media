import React from 'react'
import { useTranslation } from 'next-i18next'
import { Avatar } from '@/components/Avatar'
import { Button } from '../Button'
import UserAvatar from '@/public/images/user-avatar.webp'

const UserCard = () => {
  const { t } = useTranslation('common')

  return (
    <div className="flex flex-col items-stretch rounded-2xl bg-white p-4">
      <div className="mb-4 flex items-start">
        <Avatar
          className="mr-4"
          size={40}
          src={UserAvatar.src}
          alt="user avatar"
        />
        <div className="flex flex-col items-stretch">
          <div className="font-semibold">Radovan SkillArena</div>
          <div className="mb-1 text-sm text-gray-400">
            Founder &amp; CEO at Trophy
          </div>
          <div>{t('friend.mutual_friends', { count: 3 })}</div>
        </div>
      </div>
      <div className="-mx-2 flex items-stretch">
        <div className="flex-1 px-2">
          <Button size="sm" color="neutral" variant="outline" fluid>
            {t('action.ignore')}
          </Button>
        </div>
        <div className="flex-1 px-2">
          <Button size="sm" fluid>
            {t('action.follow')}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default UserCard
