import React from 'react'
import { MagnifyingGlass } from 'phosphor-react'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import { Avatar } from '@/components/Avatar'
import { Input } from '@/components/Input'
import UserAvatar from '@/public/images/user-avatar.webp'

const Header = () => {
  const { t } = useTranslation('common')

  return (
    <>
      <header className="fixed top-0 z-sticky w-header bg-white py-4 pr-6">
        <div className="flex items-center justify-between">
          <div className="w-1/3">
            <Input
              placeholder={t('placeholder.search_something')}
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
      <div className="h-header w-full"></div>
    </>
  )
}

export default Header
