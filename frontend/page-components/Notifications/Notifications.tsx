import React from 'react'
import { useTranslation } from 'next-i18next'
import { FriendList, Main, Section } from '@/components/Layout'
import { Heading } from '@/components/Heading'
import { Divider } from '@/components/Divider'
import { Notification } from '@/components/Notification'

const Notifications = () => {
  const { t } = useTranslation('common')

  return (
    <>
      <Main>
        <div className="flex w-full flex-col items-stretch">
          <Section className="w-full">
            <header className="p-4">
              <Heading className="text-lg">
                {t('navigation.notifications')}
              </Heading>
            </header>
            <Divider />
            <div className="flex flex-col items-stretch">
              {[...Array(30)].map((_, index) => {
                const randomType = Math.floor(Math.random() * 6)

                return <Notification key={index} type={randomType} />
              })}
            </div>
          </Section>
        </div>
      </Main>
      <FriendList />
    </>
  )
}

export default Notifications
