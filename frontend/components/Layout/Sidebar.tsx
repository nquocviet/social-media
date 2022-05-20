import React from 'react'
import {
  SquaresFour,
  Users,
  ChatText,
  BellSimple,
  GlobeHemisphereWest,
  User,
  Gear,
  SignOut,
} from 'phosphor-react'
import Link from 'next/link'
import clsx from 'clsx'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { Logo } from '@/components/Logo'

const navItems = [
  {
    slug: '/',
    label: 'feed',
    icon: SquaresFour,
  },
  {
    slug: '/community',
    label: 'community',
    icon: Users,
  },
  {
    slug: '/messages',
    label: 'messages',
    icon: ChatText,
  },
  {
    slug: '/notification',
    label: 'notification',
    icon: BellSimple,
  },
  {
    slug: '/explore',
    label: 'explore',
    icon: GlobeHemisphereWest,
  },
  {
    slug: '/profile',
    label: 'profile',
    icon: User,
  },
  {
    slug: '/settings',
    label: 'settings',
    icon: Gear,
  },
]

const Sidebar = () => {
  const router = useRouter()
  const { t } = useTranslation('common')

  return (
    <div className="w-sidebar flex-shrink-0 bg-white">
      <aside className="fixed top-0 left-0 h-screen max-h-screen w-sidebar overflow-y-auto p-4">
        <Logo />
        <nav className="mt-8">
          <ul className="font-semibold">
            {navItems.map((navItem, index) => {
              const { slug, label, icon: Icon } = navItem

              return (
                <li className="mb-3" key={index}>
                  <Link href={slug}>
                    <a
                      className={clsx(
                        'flex items-center rounded-lg px-3 py-2 transition-colors duration-200',
                        router.asPath === slug
                          ? 'bg-primary-600 text-white'
                          : 'hover:bg-gray-100'
                      )}
                    >
                      <Icon size={20} />
                      <span className="ml-4">{t(`navigation.${label}`)}</span>
                    </a>
                  </Link>
                </li>
              )
            })}
            <li className="mb-3">
              <a
                role="button"
                className="flex w-full items-center rounded-lg px-3 py-2 transition-colors duration-200 hover:bg-gray-100"
              >
                <SignOut size={20} />
                <span className="ml-4">{t('navigation.logout')}</span>
              </a>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  )
}

export default Sidebar
