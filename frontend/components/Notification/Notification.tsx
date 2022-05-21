import React from 'react'
import {
  Chat,
  Confetti,
  Heart,
  ImageSquare,
  ShareNetwork,
  UserCircle,
} from 'phosphor-react'
import { useTranslation } from 'next-i18next'
import { Button } from '../Button'
import { Dot } from '../Dot'
import { Avatar } from '../Avatar'
import UserAvatar from '@/public/images/user-avatar.webp'

type TNotificationProps = {
  type: number
}

// commented, followed, like post, share post, add new photo, add new post
const icons = {
  0: Chat,
  1: UserCircle,
  2: Heart,
  3: ShareNetwork,
  4: ImageSquare,
  5: Confetti,
}

const colors = {
  0: 'green',
  1: 'primary',
  2: 'red',
  3: 'yellow',
  4: 'green',
  5: 'green',
}

const messages = {
  0: 'commented',
  1: 'followed',
  2: 'liked',
  3: 'shared',
  4: 'add_photo',
  5: 'add_post',
}

const Notification = ({ type }: TNotificationProps) => {
  const Icon = (icons as any)[type]
  const { t } = useTranslation('common')

  return (
    <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3 last:border-none">
      <div className="mr-2 flex items-center">
        <div className="relative mr-4">
          <Avatar size={40} src={UserAvatar.src} alt="user avatar" />
          <span
            className={`absolute bottom-0 right-0 inline-block translate-x-1/4 translate-y-1/4 rounded-full p-1 bg-${
              (colors as any)[type]
            }-100`}
          >
            <Icon
              weight="fill"
              size={14}
              color={`var(--${(colors as any)[type]}-500)`}
            />
          </span>
        </div>
        <div className="flex flex-col items-stretch">
          <div className="font-semibold">
            {t(`notification.${(messages as any)[type]}`, {
              people: 'Radovan Skill',
              post: 'Need a logo',
            })}
          </div>
          <div className="mb-1 text-sm text-gray-400">4 hours ago</div>
        </div>
      </div>
      {type === 1 ? (
        <Button size="sm" className="flex-shrink-0">
          Follow back
        </Button>
      ) : (
        <Dot color="error" size={8} />
      )}
    </div>
  )
}

export default Notification
