import React from 'react'
import { Camera, Pencil, PlusCircle } from 'phosphor-react'
import { Section } from '@/components/Layout'
import { ImageRatio } from '@/components/ImageRatio'
import { Button } from '@/components/Button'
import { useTranslation } from 'next-i18next'
import { Heading } from '@/components/Heading'
import { Avatar } from '@/components/Avatar'
import PostImage from '@/public/images/post.jpg'
import UserAvatar from '@/public/images/user-avatar.webp'

const BasicInfo = () => {
  const { t } = useTranslation('common')

  return (
    <div className="mb-layout px-layout lg:px-0">
      <Section className="mr-layout">
        <div className="relative">
          <ImageRatio
            src={PostImage.src}
            ratio={11 / 4}
            style={{ minHeight: '140px' }}
          />
          <Button
            color="neutral"
            variant="outline"
            className="absolute bottom-4 right-4 md:bottom-8 md:right-8"
          >
            <Camera size={20} />
            <span className="ml-2 hidden md:inline-block">
              {t('action.edit_cover')}
            </span>
          </Button>
        </div>
        <div className="flex flex-wrap items-end justify-between px-8 pb-8">
          <div className="relative flex flex-col pt-12">
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 translate-y-1/4 xs:left-0 xs:translate-x-0">
              <Avatar
                size={164}
                src={UserAvatar.src}
                alt="user avatar"
                className="border-4 border-white"
              />
              <Button
                color="neutral"
                variant="outline"
                className="absolute bottom-0 right-0 -translate-x-1/3 -translate-y-1/3"
                size="sm"
                rounded="full"
                square
              >
                <Camera size={20} />
              </Button>
            </div>
            <Heading className="text-display-sm">Saled Ahmed</Heading>
            <p className="text-lg text-gray-500">
              Sit amet consectetur adipisicing elit. Quas, maxime.
            </p>
          </div>
          <div className="mt-4 flex w-full flex-col items-stretch xs:w-auto xs:flex-row xs:items-center">
            <Button size="sm" className="mb-4 xs:mb-0 xs:mr-4">
              <PlusCircle size={20} weight="fill" className="mr-2" />
              {t('action.add_story')}
            </Button>
            <Button color="neutral" variant="outline" size="sm">
              <Pencil size={20} className="mr-2" />
              {t('action.edit_info')}
            </Button>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default BasicInfo
