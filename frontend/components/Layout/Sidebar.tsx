import React, { useRef } from 'react'
import {
  SquaresFour,
  Users,
  ChatText,
  BellSimple,
  GlobeHemisphereWest,
  User,
  Gear,
  SignOut,
  List,
} from 'phosphor-react'
import Link from 'next/link'
import clsx from 'clsx'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { Logo } from '../Logo'
import { useUiContext } from '@/context/ui'
import { useOnClickOutside } from '@/hooks/index'

const navItems = [
  {
    slug: '/',
    label: 'feed',
    icon: SquaresFour,
  },
  {
    slug: '/community/suggestions',
    label: 'community',
    icon: Users,
    includePath: true,
  },
  {
    slug: '/messages',
    label: 'messages',
    icon: ChatText,
    includePath: true,
  },
  {
    slug: '/notifications',
    label: 'notifications',
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
  const [ui, setUi] = useUiContext()
  const sidebarRef = useRef(null)

  useOnClickOutside(sidebarRef, () => setUi('sidebar', false))

  return (
    <>
      <div
        ref={sidebarRef}
        className={clsx(
          'fixed z-popover w-sidebar flex-shrink-0 bg-white transition-transform duration-200 lg:static lg:z-0',
          !ui.sidebar && '-translate-x-full lg:translate-x-0'
        )}
      >
        <aside className="sticky top-0 left-0 h-screen max-h-screen w-sidebar overflow-y-auto overflow-x-hidden bg-white p-4">
          <div className="-mb-4 h-header">
            <div className="-mr-4 flex w-sidebar items-center py-1.5 lg:hidden">
              <button
                type="button"
                className="mr-4 block lg:hidden"
                onClick={() => setUi('sidebar', false)}
              >
                <List size={20} weight="bold" />
              </button>
              <Logo />
            </div>
          </div>
          <nav>
            <ul className="font-semibold">
              {navItems.map((navItem, index) => {
                const { slug, label, icon: Icon, includePath } = navItem
                const isActive = includePath
                  ? router.asPath.split('/')[1] === slug.split('/')[1]
                  : router.asPath === slug

                return (
                  <li className="mb-3" key={index}>
                    <Link href={slug}>
                      <a
                        className={clsx(
                          'flex items-center rounded-lg px-3 py-2 transition-colors duration-200',
                          isActive
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
      {ui.sidebar && (
        <div className="fixed top-0 left-0 z-drawer h-screen w-screen bg-zinc-900/50"></div>
      )}
    </>
  )
}

export default Sidebar
