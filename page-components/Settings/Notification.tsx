import React, { ReactNode } from 'react'
import { useTranslation } from 'next-i18next'
import { Heading } from '@/components/Heading'
import {
  Calendar,
  Chat,
  Confetti,
  Heart,
  ShareNetwork,
  UserCircle,
} from 'phosphor-react'
import { Switch } from '@/components/Switch'
import useToggle from '@/hooks/useToggle'

type TNotificationReceiveProps = {
  icon: any
  color: string
  type: string
}

const notifications = [
  {
    icon: Chat,
    color: 'green',
    type: 'comment',
  },
  {
    icon: UserCircle,
    color: 'primary',
    type: 'follow',
  },
  {
    icon: Heart,
    color: 'red',
    type: 'like',
  },
  {
    icon: ShareNetwork,
    color: 'yellow',
    type: 'share',
  },
  {
    icon: UserCircle,
    color: 'primary',
    type: 'mention',
  },
  {
    icon: Confetti,
    color: 'green',
    type: 'post',
  },
  {
    icon: Calendar,
    color: 'green',
    type: 'event',
  },
]

const Notification = () => {
  const { t } = useTranslation('common')
  const { t: ts } = useTranslation('settings')

  return (
    <>
      <Heading className="mb-4 text-lg">{t('title.notification')}</Heading>
      <p className="mb-4 font-semibold">{ts('notification_receive')}</p>
      <div className="flex max-w-[320px] flex-col items-stretch">
        {notifications.map((notification, index) => (
          <NotificationReceive key={index} {...notification} />
        ))}
      </div>
    </>
  )
}

const NotificationReceive = ({
  icon: Icon,
  color,
  type,
}: TNotificationReceiveProps) => {
  const { t: ts } = useTranslation('settings')
  const { open, toggle } = useToggle(true)

  return (
    <div className="mb-4 flex items-center justify-between last:mb-0">
      <div className="flex items-center">
        <span
          className="mr-3 inline-block rounded-full p-1"
          style={{
            backgroundColor: `var(--${color}-100)`,
          }}
        >
          <Icon weight="fill" size={14} color={`var(--${color}-500)`} />
        </span>
        <div className="font-semibold">{ts(`notification.${type}`)}</div>
      </div>
      <Switch active={open} onChange={toggle} />
    </div>
  )
}

export default Notification
