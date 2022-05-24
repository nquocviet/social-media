import React, { useEffect, useRef } from 'react'
import { useTranslation } from 'next-i18next'
import { Image, Smiley, VideoCamera } from 'phosphor-react'
import { Avatar } from '../Avatar'
import { Button } from '../Button'
import { Modal } from '../Modal'
import { Textarea } from '../Textarea'
import UserAvatar from '@/public/images/user-avatar.webp'
import { SelectRadio } from '../Select'

type TReportModalProps = {
  open: boolean
  title: string
  onClose: () => void
}

const visibleStatuses = [
  { value: 0, label: 'friends' },
  { value: 1, label: 'public' },
  { value: 2, label: 'only_me' },
]

const CreatePostModal = ({ open, title, onClose }: TReportModalProps) => {
  const { t } = useTranslation('common')
  const ref = useRef<any>()

  useEffect(() => {
    if (ref && ref.current) {
      ref.current.focus()
    }
  }, [open])

  return (
    <Modal
      size={600}
      open={open}
      title={title}
      disableButtons={true}
      onClose={onClose}
      onSubmit={() => null}
    >
      <div className="absolute top-2 right-14">
        <div className="flex h-10 items-center">
          <span className="mr-3 font-semibold">Visible for</span>
          <SelectRadio
            options={visibleStatuses}
            defaultValue={visibleStatuses[0]}
            name="visible"
            onChange={() => null}
            borderless
          />
        </div>
      </div>
      <div className="flex items-start pb-3">
        <Avatar
          size={36}
          src={UserAvatar.src}
          alt="user avatar"
          className="mr-4"
        />
        <Textarea
          minHeight={100}
          placeholder={t('placeholder.what_happening')}
          ref={ref}
        />
      </div>
      <div className="flex items-stretch pt-2">
        <Button
          size="sm"
          color="neutral"
          variant="text"
          className="flex-1 px-1"
        >
          <VideoCamera size={24} className="mr-2" />
          {t('post.live')}
        </Button>
        <Button
          size="sm"
          color="neutral"
          variant="text"
          className="flex-1 px-1"
        >
          <Image size={24} className="mr-2" />
          {t('post.photo_video')}
        </Button>
        <Button
          size="sm"
          color="neutral"
          variant="text"
          className="flex-1 px-1"
        >
          <Smiley size={24} className="mr-2" />
          {t('post.feeling')}
        </Button>
        <Button size="sm" className="ml-4 px-6">
          {t('action.post')}
        </Button>
      </div>
    </Modal>
  )
}

export default CreatePostModal
