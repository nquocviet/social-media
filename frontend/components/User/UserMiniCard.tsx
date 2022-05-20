import React from 'react'
import Link from 'next/link'
import { Dot } from '../Dot'
import { Avatar } from '../Avatar'
import UserAvatar from '@/public/images/user-avatar.webp'

type TUserMiniCardProps = {
  email: string
  fullName: string
  profilePictureUrl: string
}

const UserMiniCard = () => {
  const randomStatus = Math.floor(Math.random() * 2)

  return (
    <Link href="/#">
      <a className="-mx-2 mb-1 block rounded-lg transition-colors duration-200 last:mb-0 hover:bg-gray-100">
        <div className="flex items-center justify-between p-2">
          <div className="flex items-center">
            <Avatar size={36} src={UserAvatar.src} alt="user avatar" />
            <span className="ml-3 font-semibold">Adayin Vetvendos</span>
          </div>
          <div className="flex-shrink-0">
            {randomStatus ? (
              <Dot size={8} color="success" className="mx-2" />
            ) : (
              <span className="text-sm text-gray-400">15 min</span>
            )}
          </div>
        </div>
      </a>
    </Link>
  )
}

export default UserMiniCard
