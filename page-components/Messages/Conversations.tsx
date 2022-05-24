import React, { useLayoutEffect, useState } from 'react'
import { useTranslation } from 'next-i18next'
import { MagnifyingGlass } from 'phosphor-react'
import { Section } from '@/components/Layout'
import { Input } from '@/components/Input'
import { Avatar } from '@/components/Avatar'
import { Dot } from '@/components/Dot'
import { useRect } from '@/hooks/index'
import UserAvatar from '@/public/images/user-avatar.webp'

const Conversations = () => {
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
    <div
      ref={ref}
      className="mr-layout w-sidebar flex-shrink-0"
      style={{ maxHeight }}
    >
      <Section className="h-full">
        <div className="flex h-full flex-col items-stretch p-4">
          <Input
            placeholder={t('placeholder.search_name')}
            prefix={<MagnifyingGlass size={20} />}
          />
          <div className="relative flex-1">
            <div className="absolute mt-4 -mr-4 flex h-full flex-col items-stretch overflow-auto pb-4 pr-4">
              {[...Array(20)].map((_, index) => (
                <div
                  key={index}
                  className="mb-2 flex justify-between rounded-lg px-2 py-1 last:mb-0 hover:bg-gray-100"
                >
                  <div className="mr-2 flex items-center">
                    <div className="relative mr-4">
                      <Avatar
                        size={40}
                        src={UserAvatar.src}
                        alt="user avatar"
                      />
                      <Dot
                        size={10}
                        className="absolute top-2/3 left-2/3 translate-x-1/4 translate-y-1/4 border border-white"
                      />
                    </div>
                    <div className="flex flex-col items-stretch">
                      <div className="font-semibold line-clamp-1">
                        Taylor David
                      </div>
                      <div className="mb-1 flex items-center text-sm text-gray-400 line-clamp-1">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Odit, in.
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-shrink-0 flex-col items-end">
                    <p className="mb-0.5 text-xs font-semibold">11:25 am</p>
                    <span className="inline-flex h-4 w-4 items-center justify-center rounded bg-red-500 text-xs font-semibold text-white">
                      1
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default Conversations
