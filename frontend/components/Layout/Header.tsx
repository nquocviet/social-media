import React from 'react'
import { List, MagnifyingGlass } from 'phosphor-react'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import { Avatar } from '@/components/Avatar'
import { Input } from '@/components/Input'
import UserAvatar from '@/public/images/user-avatar.webp'
import { Logo } from '../Logo'
import { useUiContext } from '@/context/ui'

const Header = () => {
  const { t } = useTranslation('common')
  const [_, setUi] = useUiContext()

  return (
    <>
      <header className="fixed top-0 left-0 z-sticky h-header w-full bg-white py-4 pr-6 pl-4">
        <div className="flex items-center">
          <div className="-mr-4 flex items-center md:w-sidebar">
            <button
              type="button"
              className="mr-4 block lg:hidden"
              onClick={() => setUi('sidebar', true)}
            >
              <List size={20} weight="bold" />
            </button>
            <Logo />
          </div>
          <div className="flex flex-1 items-center justify-between">
            <div className="w-1/3">
              <Input
                placeholder={t('placeholder.search_something')}
                prefix={<MagnifyingGlass size={20} />}
                className="hidden lg:block"
              />
            </div>
            <Link href="/profile">
              <a className="flex items-center rounded-full hover:bg-gray-100 xs:pl-3">
                <span className="mr-3 hidden font-semibold xs:inline-block">
                  Saleh Ahmed
                </span>
                <Avatar src={UserAvatar.src} alt="user avatar" />
              </a>
            </Link>
          </div>
        </div>
      </header>
      <div className="h-header w-full"></div>
    </>
  )
}

export default Header
