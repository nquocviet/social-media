import React from 'react'
import Link from 'next/link'
import { Image, Smiley, VideoCamera } from 'phosphor-react'
import { useTranslation } from 'next-i18next'
import { Avatar } from '../Avatar'
import { Textarea } from '../Textarea'
import { Button } from '../Button'
import { Divider } from '../Divider'
import { Section } from '../Layout'
import UserAvatar from '@/public/images/user-avatar.webp'

const CreatePostArea = () => {
  const { t } = useTranslation()

  return (
    <Section className="flex flex-col items-stretch py-3 px-4">
      <div className="flex items-center pb-3">
        <Link href="/profile">
          <a className="mr-4">
            <Avatar size={36} src={UserAvatar.src} alt="user avatar" />
          </a>
        </Link>
        <Textarea placeholder={t('placeholder.what_happening')} />
      </div>
      <Divider />
      <div className="flex items-stretch pt-2">
        <Button color="neutral" variant="text" className="flex-1 px-1">
          <VideoCamera size={24} className="mr-2" />
          {t('post.live')}
        </Button>
        <Button color="neutral" variant="text" className="flex-1 px-1">
          <Image size={24} className="mr-2" />
          {t('post.photo_video')}
        </Button>
        <Button color="neutral" variant="text" className="flex-1 px-1">
          <Smiley size={24} className="mr-2" />
          {t('post.feeling')}
        </Button>
      </div>
    </Section>
  )
}

export default CreatePostArea
