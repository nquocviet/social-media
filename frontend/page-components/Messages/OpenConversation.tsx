import React, { Fragment, useLayoutEffect, useState } from 'react'
import { useTranslation } from 'next-i18next'
import {
  Info,
  PaperPlaneRight,
  Phone,
  PlusCircle,
  VideoCamera,
} from 'phosphor-react'
import { Section } from '@/components/Layout'
import { Avatar } from '@/components/Avatar'
import { Dot } from '@/components/Dot'
import { Divider } from '@/components/Divider'
import { Button } from '@/components/Button'
import { useRect } from '@/hooks/index'
import { Textarea } from '@/components/Textarea'
import UserAvatar from '@/public/images/user-avatar.webp'
import Chat from './Chat'
import OtherChat from './OtherChat'

const OpenConversation = () => {
  const { t } = useTranslation('common')
  const [rect, ref] = useRect()
  const [maxHeight, setMaxHeight] = useState(0)

  useLayoutEffect(() => {
    const determineHeight = () => {
      if (ref && rect) {
        const MARGIN = window.innerWidth > 967 ? 24 : 12
        const maximumHeight = window.innerHeight - rect?.top - MARGIN

        setMaxHeight(maximumHeight)
      }
    }

    determineHeight()

    document.addEventListener('resize', determineHeight)
    return () => document.removeEventListener('resize', determineHeight)
  }, [rect])

  return (
    <div ref={ref} className="flex-1" style={{ maxHeight }}>
      <Section className="h-full">
        <div className="flex h-full flex-col items-stretch">
          <div className="flex items-center justify-between p-4">
            <div className="mr-2 flex items-center">
              <div className="mr-4">
                <Avatar size={48} src={UserAvatar.src} alt="user avatar" />
              </div>
              <div className="flex flex-col items-stretch">
                <div className="font-semibold">Taylor David</div>
                <div className="mb-1 flex items-center text-sm text-gray-400">
                  Active now
                  <Dot size={8} color="success" className="ml-2" />
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <Button
                color="neutral"
                variant="text"
                size="sm"
                rounded="full"
                className="ml-1"
                square
              >
                <Phone size={24} />
              </Button>
              <Button
                color="neutral"
                variant="text"
                size="sm"
                rounded="full"
                className="ml-1"
                square
              >
                <VideoCamera size={24} />
              </Button>
              <Button
                color="neutral"
                variant="text"
                size="sm"
                rounded="full"
                className="ml-1"
                square
              >
                <Info size={24} />
              </Button>
            </div>
          </div>
          <Divider />
          <div className="relative flex-1">
            <div className="absolute -mr-4 flex h-full w-full flex-col items-stretch overflow-auto p-4">
              {[...Array(10)].map((_, index) => (
                <Fragment key={index}>
                  <Chat />
                  <OtherChat />
                </Fragment>
              ))}
            </div>
          </div>
          <Divider />
          <div className="flex items-end p-4">
            <Button
              color="neutral"
              variant="text"
              size="sm"
              rounded="full"
              className="mr-2"
              square
            >
              <PlusCircle size={24} />
            </Button>
            <Textarea placeholder={t('placeholder.type_something')} />
            <Button
              variant="outline"
              size="sm"
              rounded="sm"
              className="ml-4"
              square
            >
              <PaperPlaneRight size={24} />
            </Button>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default OpenConversation
