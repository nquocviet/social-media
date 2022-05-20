import React from 'react'
import { Avatar } from '../Avatar'
import UserAvatar from '@/public/images/user-avatar.webp'

type TAvatarGroupProps = {
  size?: number
}

const AvatarGroup = ({ size = 24 }: TAvatarGroupProps) => {
  return (
    <div
      className="flex items-center"
      style={{
        ['--avatar-size' as any]: `${size}px`,
      }}
    >
      {[...Array(3)].map((_, index) => (
        <div
          key={index}
          className="relative -mr-2 rounded-full border border-white"
          style={{
            zIndex: index,
          }}
        >
          <Avatar size={size} src={UserAvatar.src} alt="user avatar" />
        </div>
      ))}
      <div className="relative z-10 inline-flex h-avatar w-avatar items-center justify-center rounded-full border border-white bg-gray-700 text-sm text-white">
        <span>+9</span>
      </div>
    </div>
  )
}

export default AvatarGroup
