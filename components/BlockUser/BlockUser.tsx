import React from 'react'
import { Avatar } from '../Avatar'
import { Button } from '../Button'
import { Dot } from '../Dot'
import UserAvatar from '@/public/images/user-avatar.webp'
import { useTranslation } from 'next-i18next'

const BlockUser = () => {
  const { t } = useTranslation('common')

  return (
    <div className="mb-4 last:mb-0">
      <div className="flex items-center justify-between">
        <div className="mr-2 flex items-center">
          <div className="relative mr-4">
            <Avatar size={40} src={UserAvatar.src} alt="user avatar" />
          </div>
          <div className="flex flex-col items-stretch">
            <div className="font-semibold">Taylor David</div>
            <div className="mb-1 flex items-center text-sm text-gray-400">
              Block
              <Dot className="mx-1" />
              16/05/2022
            </div>
          </div>
        </div>
        <Button size="sm" className="flex-shrink-0">
          {t('action.unblock')}
        </Button>
      </div>
    </div>
  )
}

export default BlockUser
