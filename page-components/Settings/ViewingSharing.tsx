import React, { useState } from 'react'
import { Heading } from '@/components/Heading'
import { useTranslation } from 'next-i18next'
import { Radio } from '@/components/Radio'

const postsRadio = [
  { label: 'everyone', value: 0 },
  { label: 'followers', value: 1 },
  { label: 'only_me', value: 2 },
]

const profileRadio = [
  { label: 'everyone', value: 0 },
  { label: 'followers', value: 1 },
  { label: 'only_me', value: 2 },
]

const shareRadio = [
  { label: 'on', value: 0 },
  { label: 'off', value: 1 },
]

const followRadio = [
  { label: 'everyone', value: 0 },
  { label: 'off', value: 1 },
]

const ViewingSharing = () => {
  const { t } = useTranslation('common')
  const { t: ts } = useTranslation('settings')
  const [seeYourPost, setSeeYourPost] = useState(0)
  const [seeYourProfile, setSeeYourProfile] = useState(0)
  const [shareYourPost, setShareYourPost] = useState(0)
  const [followYou, setFollowYou] = useState(0)

  return (
    <>
      <Heading className="mb-4 text-lg">{t('title.viewing_sharing')}</Heading>
      <p className="mb-4 font-semibold">{ts('viewing_sharing.who_see_post')}</p>
      <div className="mb-4">
        {postsRadio.map(({ label, value }) => (
          <div key={value} className="mb-2">
            <Radio
              label={ts(`viewing_sharing.${label}`)}
              value={value}
              size={12}
              name="see_post"
              containerClassName="font-semibold mb-2.5 last:mb-0"
              checked={seeYourPost === value}
              onChange={() => setSeeYourPost(value)}
            />
          </div>
        ))}
      </div>
      <p className="mb-4 font-semibold">
        {ts('viewing_sharing.who_see_profile')}
      </p>
      <div className="mb-4">
        {profileRadio.map(({ label, value }) => (
          <div key={value} className="mb-2">
            <Radio
              label={ts(`viewing_sharing.${label}`)}
              value={value}
              size={12}
              name="see_profile"
              containerClassName="font-semibold mb-2.5 last:mb-0"
              checked={seeYourProfile === value}
              onChange={() => setSeeYourProfile(value)}
            />
          </div>
        ))}
      </div>
      <p className="mb-4 font-semibold">{ts('viewing_sharing.allow_share')}</p>
      <div className="mb-4">
        {shareRadio.map(({ label, value }) => (
          <div key={value} className="mb-2">
            <Radio
              label={ts(`viewing_sharing.${label}`)}
              value={value}
              size={12}
              name="share_post"
              containerClassName="font-semibold mb-2.5 last:mb-0"
              checked={shareYourPost === value}
              onChange={() => setShareYourPost(value)}
            />
          </div>
        ))}
      </div>
      <p className="mb-4 font-semibold">{ts('viewing_sharing.who_follow')}</p>
      <div className="mb-4">
        {followRadio.map(({ label, value }) => (
          <div key={value} className="mb-2">
            <Radio
              label={ts(`viewing_sharing.${label}`)}
              value={value}
              size={12}
              name="follow_you"
              containerClassName="font-semibold mb-2.5 last:mb-0"
              checked={followYou === value}
              onChange={() => setFollowYou(value)}
            />
          </div>
        ))}
      </div>
    </>
  )
}

export default ViewingSharing
