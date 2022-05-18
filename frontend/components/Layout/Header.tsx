import React from 'react'
import { Avatar } from '@/components/Avatar'
import UserAvatar from '@/public/images/user-avatar.webp'
import { Input } from '@/components/Input'
import { MagnifyingGlass } from 'phosphor-react'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="bg-white py-4 pr-6">
      <div className="flex items-center justify-between">
        <div className="w-1/3">
          <Input
            placeholder="Search for something here..."
            prefix={<MagnifyingGlass size={20} />}
          />
        </div>
        <Link href="/profile">
          <a className="flex items-center rounded-full pl-3 hover:bg-gray-100">
            <span className="mr-3 font-semibold">Saleh Ahmed</span>
            <Avatar src={UserAvatar.src} alt="user avatar" />
          </a>
        </Link>
      </div>
    </header>
  )
}

export default Header
