import React, { useState } from 'react'
import Link from 'next/link'
import {
  BellSimple,
  ChatsCircle,
  ChatText,
  DotsThreeOutline,
  EyeSlash,
  GlobeHemisphereWest,
  Heart,
  Share,
  UserMinus,
} from 'phosphor-react'
import { useTranslation } from 'next-i18next'
import { Avatar } from '../Avatar'
import { Dropdown, Menu, MenuItem } from '../Dropdown'
import { Dot } from '../Dot'
import { ImageRatio } from '../ImageRatio'
import { Button } from '../Button'
import { AvatarGroup } from '../AvatarGroup'
import { Textarea } from '../Textarea'
import { Divider } from '../Divider'
import UserAvatar from '@/public/images/user-avatar.webp'
import PostImage from '@/public/images/post.jpg'
import ModalConfirm from '../Modal/ModalConfirm'
import ReportModal from './ReportModal'

const PostCard = () => {
  const { t } = useTranslation('common')
  const [showReport, setShowReport] = useState(false)
  const [showUnfollow, setShowUnfollow] = useState(false)

  return (
    <>
      <article className="mb-layout flex flex-col items-stretch rounded-2xl bg-white p-4 shadow-md shadow-gray-200 last:mb-0">
        <div className="mb-4 flex items-center justify-between last:mb-0">
          <div className="flex items-center">
            <Link href="/profile">
              <a className="mr-4">
                <Avatar size={40} src={UserAvatar.src} alt="user avatar" />
              </a>
            </Link>
            <div>
              <Link href="/profile">
                <a className="font-semibold">Sepural Gallery</a>
              </Link>
              <p className="flex items-center text-gray-500">
                <span>14 hour</span>
                <Dot size={3} className="mx-2" />
                <span>{t('public')}</span>
                <GlobeHemisphereWest weight="duotone" className="ml-1" />
              </p>
            </div>
          </div>
          <Dropdown
            className="inline-flex flex-shrink-0"
            overlay={
              <Menu size={300} position="-right-2 top-full">
                <MenuItem className="font-semibold">
                  <span className="inline-flex items-center">
                    <EyeSlash size={20} className="mr-2" />
                    {t('action.hide_post')}
                  </span>
                </MenuItem>
                <MenuItem className="font-semibold">
                  <span className="inline-flex items-center">
                    <BellSimple size={20} className="mr-2" />
                    {t('action.turn_on_notification_post')}
                  </span>
                </MenuItem>
                <MenuItem
                  className="font-semibold"
                  onClick={() => setShowReport(true)}
                >
                  <span className="inline-flex items-center">
                    <ChatText size={20} className="mr-2" />
                    {t('action.report_post')}
                  </span>
                </MenuItem>
                <MenuItem
                  className="font-semibold"
                  onClick={() => setShowUnfollow(true)}
                >
                  <span className="inline-flex items-center">
                    <UserMinus size={20} className="mr-2" />
                    {t('action.unfollow')}
                  </span>
                </MenuItem>
              </Menu>
            }
          >
            <button type="button">
              <DotsThreeOutline size={20} weight="fill" />
            </button>
          </Dropdown>
        </div>
        <div className="mb-4 overflow-hidden rounded-xl last:mb-0">
          <ImageRatio ratio={16 / 9} src={PostImage.src} />
        </div>
        <div className="mb-4 flex items-center justify-between last:mb-0">
          <AvatarGroup />
          <div className="flex items-center">
            <span className="mr-3 text-gray-400 hover:underline" role="button">
              {t('post.total_comment', { count: 2 })}
            </span>
            <span className="text-gray-400 hover:underline" role="button">
              {t('post.total_share', { count: 0 })}
            </span>
          </div>
        </div>
        <div className="mb-4 last:mb-0">
          <Divider />
          <div className="flex items-stretch py-1">
            <Button
              color="neutral"
              size="xs"
              variant="text"
              className="flex-1 px-0"
            >
              <Heart size={24} className="mr-2" />
              {t('post.like')}
            </Button>
            <Button
              color="neutral"
              size="xs"
              variant="text"
              className="flex-1 px-0"
            >
              <ChatsCircle size={24} className="mr-2" />
              {t('post.comment')}
            </Button>
            <Button
              color="neutral"
              size="xs"
              variant="text"
              className="flex-1 px-0"
            >
              <Share size={24} className="mr-2" />
              {t('post.share')}
            </Button>
          </div>
          <Divider />
        </div>
        <div className="mb-4 flex items-center last:mb-0">
          <Avatar
            className="mr-3"
            size={32}
            src={UserAvatar.src}
            alt="user avatar"
          />
          <Textarea placeholder={t('placeholder.what_happening')} />
        </div>
      </article>
      <ModalConfirm
        open={showUnfollow}
        title={t('action.unfollow_people', { people: '@Whitechaple' })}
        content={t('confirm.unfollow')}
        confirmMessage="unfollow"
        onClose={() => setShowUnfollow(false)}
        onSubmit={() => null}
      />
      <ReportModal
        title="Report an issue"
        open={showReport}
        onClose={() => setShowReport(false)}
      />
    </>
  )
}

export default PostCard
